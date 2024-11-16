import * as dotenv from "dotenv";
import {
  createPublicClient,
  hexToString,
  http
} from "viem";
import { sepolia } from "viem/chains";
import { abi } from "../../../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
import { contractAddress } from "./constants";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  // Create public cient and wallet client
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  // Check winnerName
  const readReceipt = await publicClient.readContract({
    address: contractAddress,
    abi: abi,
    functionName: "winnerName",
  });

  console.log("Read successfully:", hexToString(readReceipt as `0x${string}`));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
