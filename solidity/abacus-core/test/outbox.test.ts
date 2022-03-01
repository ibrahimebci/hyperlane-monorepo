import { ethers, abacus } from 'hardhat';
import { expect } from 'chai';
import { AbacusState, Validator } from './lib/core';
import { Signer } from './lib/types';

import { TestOutbox, TestOutbox__factory } from '../typechain';

const destinationNonceTestCases = require('../../../vectors/destinationNonce.json');

const localDomain = 1000;
const destDomain = 2000;
const nullAddress: string = '0x' + '00'.repeat(32);

describe('Outbox', async () => {
  let outbox: TestOutbox, signer: Signer, recipient: Signer;

  before(async () => {
    [signer, recipient] = await ethers.getSigners();
  });

  beforeEach(async () => {
    // redeploy the outbox before each test run
    const outboxFactory = new TestOutbox__factory(signer);
    outbox = await outboxFactory.deploy(localDomain);
    // The ValidatorManager is unused in these tests *but* needs to be a
    // contract.
    await outbox.initialize(outbox.address);
  });

  it('Cannot be initialized twice', async () => {
    await expect(outbox.initialize(outbox.address)).to.be.revertedWith(
      'Initializable: contract is already initialized',
    );
  });

  it('ValidatorManager can fail', async () => {
    await outbox.testSetValidatorManager(signer.address);
    await outbox.fail();
    expect(await outbox.state()).to.equal(AbacusState.FAILED);

    const message = ethers.utils.formatBytes32String('message');
    await expect(
      outbox.dispatch(
        destDomain,
        abacus.ethersAddressToBytes32(recipient.address),
        message,
      ),
    ).to.be.revertedWith('failed state');
  });

  it('Non ValidatorManager cannot fail', async () => {
    await expect(outbox.connect(recipient).fail()).to.be.revertedWith(
      '!validatorManager',
    );
  });

  it('Does not dispatch too large messages', async () => {
    const message = `0x${Buffer.alloc(3000).toString('hex')}`;
    await expect(
      outbox.dispatch(
        destDomain,
        abacus.ethersAddressToBytes32(recipient.address),
        message,
      ),
    ).to.be.revertedWith('msg too long');
  });

  it('Dispatches a message', async () => {
    const message = ethers.utils.formatBytes32String('message');
    const nonce = await outbox.nonces(localDomain);

    // Format data that will be emitted from Dispatch event
    const destinationAndNonce = abacus.destinationAndNonce(destDomain, nonce);

    const abacusMessage = abacus.formatMessage(
      localDomain,
      signer.address,
      nonce,
      destDomain,
      recipient.address,
      message,
    );
    const messageHash = abacus.messageHash(abacusMessage);
    const leafIndex = await outbox.tree();
    const [checkpointedRoot] = await outbox.latestCheckpoint();

    // Send message with signer address as msg.sender
    await expect(
      outbox
        .connect(signer)
        .dispatch(
          destDomain,
          abacus.ethersAddressToBytes32(recipient.address),
          message,
        ),
    )
      .to.emit(outbox, 'Dispatch')
      .withArgs(
        messageHash,
        leafIndex,
        destinationAndNonce,
        checkpointedRoot,
        abacusMessage,
      );
  });

  it('Checkpoints the latest root', async () => {
    const message = ethers.utils.formatBytes32String('message');
    await outbox.dispatch(
      destDomain,
      abacus.ethersAddressToBytes32(recipient.address),
      message,
    );
    await outbox.checkpoint();
    const [root, index] = await outbox.latestCheckpoint();
    expect(root).to.not.equal(nullAddress);
    expect(index).to.equal(1);
  });

  it('Correctly calculates destinationAndNonce', async () => {
    for (let testCase of destinationNonceTestCases) {
      let { destination, nonce, expectedDestinationAndNonce } = testCase;
      const solidityDestinationAndNonce = await outbox.destinationAndNonce(
        destination,
        nonce,
      );
      expect(solidityDestinationAndNonce).to.equal(expectedDestinationAndNonce);
    }
  });
});