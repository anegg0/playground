/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ThrottledWallet,
  ThrottledWalletInterface,
} from "../../contracts/ThrottledWallet";

const _abi = [
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refillRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "spend",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
    ],
    name: "walletBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805460ff1916905561002433610029565b610082565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b610944806100916000396000f3fe6080604052600436106100c75760003560e01c80638456cb5911610074578063cf9cd8f81161004e578063cf9cd8f8146101dd578063ebe29d74146101fd578063f2fde38b1461021357600080fd5b80638456cb59146101725780638da5cb5b14610187578063af7d6ca3146101bd57600080fd5b806347e7ef24116100a557806347e7ef24146101225780635c975abb14610145578063715018a61461015d57600080fd5b80631a861d26146100cc5780633f4ba83a146100f5578063435635a11461010c575b600080fd5b3480156100d857600080fd5b506100e260015481565b6040519081526020015b60405180910390f35b34801561010157600080fd5b5061010a610233565b005b34801561011857600080fd5b506100e260025481565b610135610130366004610866565b610245565b60405190151581526020016100ec565b34801561015157600080fd5b5060005460ff16610135565b34801561016957600080fd5b5061010a610447565b34801561017e57600080fd5b5061010a610459565b34801561019357600080fd5b5060005461010090046001600160a01b03166040516001600160a01b0390911681526020016100ec565b3480156101c957600080fd5b5061010a6101d8366004610866565b610469565b3480156101e957600080fd5b506100e26101f8366004610892565b610534565b34801561020957600080fd5b506100e260035481565b34801561021f57600080fd5b5061010a61022e366004610892565b6105bd565b61023b61064d565b6102436106ad565b565b600480546040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152339281019290925230602483015260009183916001600160a01b03169063dd62ed3e9060440160206040518083038186803b1580156102ad57600080fd5b505afa1580156102c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e591906108b6565b1061043d57600480546040516370a0823160e01b8152309281019290925283916001600160a01b03909116906370a082319060240160206040518083038186803b15801561033257600080fd5b505afa158015610346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036a91906108b6565b61037491906108cf565b600480546040516370a0823160e01b815230928101929092526001600160a01b0316906370a082319060240160206040518083038186803b1580156103b857600080fd5b505afa1580156103cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f091906108b6565b5050826001600160a01b03167fa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b8360405161042d91815260200190565b60405180910390a2506001610441565b5060005b92915050565b61044f61064d565b61024360006106ff565b61046161064d565b61024361076f565b60025460035461047991906108cf565b4210156104cd5760405162461bcd60e51b815260206004820152601b60248201527f546865206d61784c696d697420686173206e6f7420706173736564000000000060448201526064015b60405180910390fd5b6002546003546104dd91906108cf565b47101561052c5760405162461bcd60e51b815260206004820152601b60248201527f546865206d61784c696d697420686173206e6f7420706173736564000000000060448201526064016104c4565b505042600355565b600480546040516370a0823160e01b81526001600160a01b0384811693820193909352600092909116906370a082319060240160206040518083038186803b15801561057f57600080fd5b505afa158015610593573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b791906108b6565b50919050565b6105c561064d565b6001600160a01b0381166106415760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104c4565b61064a816106ff565b50565b6000546001600160a01b036101009091041633146102435760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c4565b6106b56107ac565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b6107776107fe565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586106e23390565b60005460ff166102435760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104c4565b60005460ff16156102435760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016104c4565b6001600160a01b038116811461064a57600080fd5b6000806040838503121561087957600080fd5b823561088481610851565b946020939093013593505050565b6000602082840312156108a457600080fd5b81356108af81610851565b9392505050565b6000602082840312156108c857600080fd5b5051919050565b60008219821115610909577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea264697066735822122010e8c0ee79bf6d91223269dd389ec1a16f33639fcfc5bcdfae65eb12ceb4398964736f6c63430008090033";

type ThrottledWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ThrottledWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ThrottledWallet__factory extends ContractFactory {
  constructor(...args: ThrottledWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ThrottledWallet> {
    return super.deploy(overrides || {}) as Promise<ThrottledWallet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ThrottledWallet {
    return super.attach(address) as ThrottledWallet;
  }
  override connect(signer: Signer): ThrottledWallet__factory {
    return super.connect(signer) as ThrottledWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ThrottledWalletInterface {
    return new utils.Interface(_abi) as ThrottledWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ThrottledWallet {
    return new Contract(address, _abi, signerOrProvider) as ThrottledWallet;
  }
}
