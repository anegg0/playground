/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Playground,
  PlaygroundInterface,
} from "../../contracts/Playground";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "clock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "time",
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
] as const;

const _bytecode =
  "0x60806040526040516101403803806101408339810160408190526100229161003a565b50600180546001600160a01b03191633179055610053565b60006020828403121561004c57600080fd5b5051919050565b60df806100616000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c806316ada5471460415780638da5cb5b14605c57806391ddadf414609f575b600080fd5b604960005481565b6040519081526020015b60405180910390f35b600154607b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016053565b60a742600055565b00fea2646970667358221220e23124d047553cd1d5ab71e14b6edfd6297e8ddda73adac971768f3f7a42e12d64736f6c63430008090033";

type PlaygroundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlaygroundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Playground__factory extends ContractFactory {
  constructor(...args: PlaygroundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _number: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Playground> {
    return super.deploy(_number, overrides || {}) as Promise<Playground>;
  }
  override getDeployTransaction(
    _number: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_number, overrides || {});
  }
  override attach(address: string): Playground {
    return super.attach(address) as Playground;
  }
  override connect(signer: Signer): Playground__factory {
    return super.connect(signer) as Playground__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlaygroundInterface {
    return new utils.Interface(_abi) as PlaygroundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Playground {
    return new Contract(address, _abi, signerOrProvider) as Playground;
  }
}
