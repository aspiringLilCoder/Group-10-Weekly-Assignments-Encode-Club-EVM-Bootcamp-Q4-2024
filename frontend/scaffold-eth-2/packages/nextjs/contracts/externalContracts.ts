import { abi as LotteryAbi } from "../app/assets/Lottery.json";
import { abi as LotteryTokenAbi } from "../app/assets/Token.json";
import { Abi } from "viem";
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

const externalContracts = {
  11155111: {
    Lottery: {
      address: "0x250B72f4fB36729513fE68D2b77B16aBa12f2F72",
      abi: LotteryAbi as Abi,
    },
    LotteryToken: {
      address: "0x9753B6B09baD918F42dA8E86948CaD7C7EE229A1",
      abi: LotteryTokenAbi as Abi,
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
