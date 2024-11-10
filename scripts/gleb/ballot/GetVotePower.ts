import * as dotenv from "dotenv";
import {
  createPublicClient,
  createWalletClient,
  http
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
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

  const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
  const deployer = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  // Check my vote power
  const readReceipt = await publicClient.readContract({
    address: contractAddress,
    abi: abi,
    functionName: "getVotePower",
    args: [deployer.account.address],
  });

  console.log("Read successfully:", readReceipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
