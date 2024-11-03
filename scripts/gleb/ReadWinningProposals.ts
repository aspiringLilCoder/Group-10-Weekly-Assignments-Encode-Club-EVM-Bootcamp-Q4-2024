import * as dotenv from "dotenv";
dotenv.config();

import { createPublicClient, hexToString, http } from "viem";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import { CONTRACT_ADDRESS, providerApiKey } from "./constants";

async function main() {
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  ////////////////

  const winningProposalResponse = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "winningProposal",
    args: [],
  });

  console.log("winningProposal response:", winningProposalResponse);

  const winnerNameResponse = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "winnerName",
    args: [],
  });

  console.log("Transaction winnerNameResponse:", hexToString(winnerNameResponse as `0x${string}`, { size: 32 }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});