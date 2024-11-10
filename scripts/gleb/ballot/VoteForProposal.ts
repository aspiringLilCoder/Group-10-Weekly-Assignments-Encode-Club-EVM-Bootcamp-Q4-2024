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

  // Read all proposals
  const proposals = await publicClient.readContract({
    address: contractAddress,
    abi: abi,
    functionName: "proposals",
    args: [0n],
  }) as [string, bigint];

  console.log("Proposals:", proposals[0]);

  // Vote for proposal 0 with 1 vote
  const delegateTx = await deployer.writeContract({
    address: contractAddress,
    abi: abi,
    functionName: "vote",
    args: [0n, 1n],
  });

  console.log("Transaction hash:", delegateTx);
  console.log("Waiting for confirmations...");
  const receipt = await publicClient.waitForTransactionReceipt({ hash: delegateTx });
  console.log("Transaction confirmed", receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
