/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PingPongRouter,
  PingPongRouterInterface,
} from "../PingPongRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "matchId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPing",
        type: "bool",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "matchId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPing",
        type: "bool",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "enrollRemoteRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
    ],
    name: "initiatePingPongMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020da380380620020da833981810160405260208110156200003757600080fd5b5051620000508162000057602090811b62000a6717901c565b50620003b8565b600054610100900460ff16806200007357506200007362000127565b8062000082575060005460ff16155b620000bf5760405162461bcd60e51b815260040180806020018281038252602e815260200180620020ac602e913960400191505060405180910390fd5b600054610100900460ff16158015620000eb576000805460ff1961ff0019909116610100171660011790555b606680546001600160a01b0319166001600160a01b0384161790556200011062000145565b801562000123576000805461ff00191690555b5050565b60006200013f306200020360201b62000bc41760201c565b15905090565b600054610100900460ff16806200016157506200016162000127565b8062000170575060005460ff16155b620001ad5760405162461bcd60e51b815260040180806020018281038252602e815260200180620020ac602e913960400191505060405180910390fd5b600054610100900460ff16158015620001d9576000805460ff1961ff0019909116610100171660011790555b620001e362000209565b620001ed620002b1565b801562000200576000805461ff00191690555b50565b3b151590565b600054610100900460ff16806200022557506200022562000127565b8062000234575060005460ff16155b620002715760405162461bcd60e51b815260040180806020018281038252602e815260200180620020ac602e913960400191505060405180910390fd5b600054610100900460ff16158015620001ed576000805460ff1961ff001990911661010017166001179055801562000200576000805461ff001916905550565b600054610100900460ff1680620002cd5750620002cd62000127565b80620002dc575060005460ff16155b620003195760405162461bcd60e51b815260040180806020018281038252602e815260200180620020ac602e913960400191505060405180910390fd5b600054610100900460ff1615801562000345576000805460ff1961ff0019909116610100171660011790555b600062000351620003b4565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350801562000200576000805461ff001916905550565b3390565b611ce480620003c86000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063715018a6116100765780638da5cb5b1161005b5780638da5cb5b146101f9578063b49c53a714610201578063f2fde38b1461022a576100a3565b8063715018a6146101e95780638129fc1c146101f1576100a3565b8063025ed069146100a85780633339df96146100cd57806341bdc8b5146100fe57806356d5d47514610131575b600080fd5b6100cb600480360360208110156100be57600080fd5b503563ffffffff1661025d565b005b6100d56102c9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100cb6004803603602081101561011457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102e5565b6100cb6004803603606081101561014757600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561017457600080fd5b82018360208201111561018657600080fd5b803590602001918460018302840111640100000000831117156101a857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103d4945050505050565b6100cb6105b5565b6100cb6106cc565b6100d56107e8565b6100cb6004803603604081101561021757600080fd5b5063ffffffff8135169060200135610804565b6100cb6004803603602081101561024057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166108c5565b6066805463ffffffff74010000000000000000000000000000000000000000808304821660018181019093169091027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff909316929092179092556102c48383836000610bce565b505050565b60665473ffffffffffffffffffffffffffffffffffffffff1681565b6102ed610d37565b73ffffffffffffffffffffffffffffffffffffffff1661030b6107e8565b73ffffffffffffffffffffffffffffffffffffffff161461038d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b606680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6103dd33610d3b565b61044857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f217265706c696361000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b82826104548282610de4565b6104bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f2172656d6f746520726f75746572000000000000000000000000000000000000604482015290519081900360640190fd5b60006104cb8482610e03565b90506104f87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216610e27565b1561050c576105078682610e47565b6105ad565b6105377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216610e54565b15610546576105078682610e5d565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f2176616c696420616374696f6e00000000000000000000000000000000000000604482015290519081900360640190fd5b505050505050565b6105bd610d37565b73ffffffffffffffffffffffffffffffffffffffff166105db6107e8565b73ffffffffffffffffffffffffffffffffffffffff161461065d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60335460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600054610100900460ff16806106e557506106e5610e6a565b806106f3575060005460ff16155b610748576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611c12602e913960400191505060405180910390fd5b600054610100900460ff161580156107ae57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6107b6610e7b565b80156107e557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b61080c610d37565b73ffffffffffffffffffffffffffffffffffffffff1661082a6107e8565b73ffffffffffffffffffffffffffffffffffffffff16146108ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b63ffffffff909116600090815260656020526040902055565b6108cd610d37565b73ffffffffffffffffffffffffffffffffffffffff166108eb6107e8565b73ffffffffffffffffffffffffffffffffffffffff161461096d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166109d9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611bcb6026913960400191505060405180910390fd5b60335460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600054610100900460ff1680610a805750610a80610e6a565b80610a8e575060005460ff16155b610ae3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611c12602e913960400191505060405180910390fd5b600054610100900460ff16158015610b4957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b606680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416179055610b91610e7b565b8015610bc057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b803b15155b919050565b6000610bd985610f6d565b9050600084610bf157610bec8484610fef565b610bfb565b610bfb848461103a565b9050610c05611043565b73ffffffffffffffffffffffffffffffffffffffff1663d34686398784846040518463ffffffff1660e01b8152600401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c81578181015183820152602001610c69565b50505050905090810190601f168015610cae5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610ccf57600080fd5b505af1158015610ce3573d6000803e3d6000fd5b5050604080518681528815156020820152815163ffffffff808a1695508b1693507fc33c46696831ce09e40c8eb57b62d0d0cd48c408d38fa19f9a8ba3138415db10929181900390910190a3505050505050565b3390565b606654604080517f5190bc5300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015291516000939290921691635190bc5391602480820192602092909190829003018186803b158015610db257600080fd5b505afa158015610dc6573d6000803e3d6000fd5b505050506040513d6020811015610ddc57600080fd5b505192915050565b63ffffffff821660009081526065602052604090205481145b92915050565b815160009060208401610e1e64ffffffffff851682846110df565b95945050505050565b600060015b610e3583611140565b6002811115610e4057fe5b1492915050565b60016102c483828461117b565b60006002610e2c565b60006102c483828461117b565b6000610e7530610bc4565b15905090565b600054610100900460ff1680610e945750610e94610e6a565b80610ea2575060005460ff16155b610ef7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611c12602e913960400191505060405180910390fd5b600054610100900460ff16158015610f5d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610f65611237565b6107b6611349565b63ffffffff811660009081526065602052604090205480610bc957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f2172656d6f746500000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b606060025b8383604051602001808460ff1660f81b81526001018363ffffffff1660e01b81526004018281526020019350505050604051602081830303815290604052905092915050565b60606001610ff4565b606654604080517f9fa92f9d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691639fa92f9d916004808301926020929190829003018186803b1580156110ae57600080fd5b505afa1580156110c2573d6000803e3d6000fd5b505050506040513d60208110156110d857600080fd5b5051905090565b6000806110ec84846114d9565b90506040518111156110fc575060005b8061112a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611139565b61113585858561154b565b9150505b9392505050565b600061116d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831661155e565b60ff166002811115610dfd57fe5b60006111a87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611564565b905060006111d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611595565b604080518481528615156020820152815192935063ffffffff80851693908916927faa15aa1b86193c9d924f48e0c48b3cba78f17e281109c7de2f865c5a1c3d7009928290030190a36112308585158385600101610bce565b5050505050565b600054610100900460ff16806112505750611250610e6a565b8061125e575060005460ff16155b6112b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611c12602e913960400191505060405180910390fd5b600054610100900460ff161580156107b657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff9091166101001716600117905580156107e557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff16806113625750611362610e6a565b80611370575060005460ff16155b6113c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611c12602e913960400191505060405180910390fd5b600054610100900460ff1615801561142b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6000611435610d37565b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156107e557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b81810182811015610dfd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60d81c90565b6000610dfd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600160206115c2565b6000610dfd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600160045b60008160200360080260ff166115d98585856115e3565b901c949350505050565b600060ff82166115f557506000611139565b6115fe8461178e565b6bffffffffffffffffffffffff166116198460ff85166114d9565b11156116f85761165a61162b856117a2565b6bffffffffffffffffffffffff166116428661178e565b6bffffffffffffffffffffffff16858560ff166117b6565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116bd5781810151838201526020016116a5565b50505050905090810190601f1680156116ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff161115611755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180611c40603a913960400191505060405180910390fd5b600882026000611764866117a2565b6bffffffffffffffffffffffff169050600061177f83611911565b91909501511695945050505050565b60181c6bffffffffffffffffffffffff1690565b60781c6bffffffffffffffffffffffff1690565b606060006117c38661195a565b91505060006117d18661195a565b91505060006117df8661195a565b91505060006117ed8661195a565b915050838383836040516020018080611c7a603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021611bf182397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b600080601f5b600f8160ff1611156119c25760ff600882021684901c61197f81611a2e565b61ffff16841793508160ff1660101461199a57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611960565b50600f5b60ff8160ff161015611a285760ff600882021684901c6119e581611a2e565b61ffff16831792508160ff16600014611a0057601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016119c6565b50915091565b6000611a4060048360ff16901c611a5e565b60ff161760081b62ffff0016611a5582611a5e565b60ff1617919050565b600060f08083179060ff82161415611a7a576030915050610bc9565b8060ff1660f11415611a90576031915050610bc9565b8060ff1660f21415611aa6576032915050610bc9565b8060ff1660f31415611abc576033915050610bc9565b8060ff1660f41415611ad2576034915050610bc9565b8060ff1660f51415611ae8576035915050610bc9565b8060ff1660f61415611afe576036915050610bc9565b8060ff1660f71415611b14576037915050610bc9565b8060ff1660f81415611b2a576038915050610bc9565b8060ff1660f91415611b40576039915050610bc9565b8060ff1660fa1415611b56576061915050610bc9565b8060ff1660fb1415611b6c576062915050610bc9565b8060ff1660fc1415611b82576063915050610bc9565b8060ff1660fd1415611b98576064915050610bc9565b8060ff1660fe1415611bae576065915050610bc9565b8060ff1660ff1415611bc4576066915050610bc9565b5091905056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573732e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220eba637bd90ef68f6db5778d631ff7da4e38a31762506454d69f29a052345f99564736f6c63430007060033496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564";

export class PingPongRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PingPongRouter> {
    return super.deploy(
      _xAppConnectionManager,
      overrides || {}
    ) as Promise<PingPongRouter>;
  }
  getDeployTransaction(
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_xAppConnectionManager, overrides || {});
  }
  attach(address: string): PingPongRouter {
    return super.attach(address) as PingPongRouter;
  }
  connect(signer: Signer): PingPongRouter__factory {
    return super.connect(signer) as PingPongRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PingPongRouterInterface {
    return new utils.Interface(_abi) as PingPongRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PingPongRouter {
    return new Contract(address, _abi, signerOrProvider) as PingPongRouter;
  }
}