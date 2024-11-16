import * as dotenv from "dotenv";
import {
  createPublicClient,
  createWalletClient,
  hexToString,
  http,
} from "viem";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

async function main() {
  // Contract address
  const contractAddress = "0xc78d93C8373b264f52725a6a6c36A79226243588";
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  // Create public cient and wallet client
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  // Get vote power
  const getWinnerName = await publicClient.readContract({
    address: contractAddress,
    abi: abi,
    functionName: "winnerName",
    args: [],
  });

  console.log("Winner name hex:", getWinnerName);
  console.log(
    "Winner name string:",
    hexToString(getWinnerName as `0x${string}`, { size: 32 })
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
