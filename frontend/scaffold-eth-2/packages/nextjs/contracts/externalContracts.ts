// import { abi as MyTokenAbi } from "../app/assets/MyToken.json";
// import { Abi } from "viem";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */

// 11155111: {
//   MyToken: {
//     address: "0x85D57140a0dB24D45ee2bB3379e548D1253BFA36",
//     abi: MyTokenAbi as Abi,
//   },
// },

const externalContracts = {} as const;

export default externalContracts satisfies GenericContractsDeclaration;
