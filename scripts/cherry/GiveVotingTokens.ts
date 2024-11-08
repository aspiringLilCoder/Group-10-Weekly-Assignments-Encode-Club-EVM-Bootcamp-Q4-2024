import {
  createPublicClient,
  http,
  createWalletClient,
  hexToString,
  parseEther,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/MyERC20Votes.sol/MyToken.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  const addressOfToBeVoter = process.argv.slice(2)[0];

  if (!/^0x[a-fA-F0-9]{40}$/.test(addressOfToBeVoter))
    throw new Error("Invalid address");
  console.log("Address of to be voter:", addressOfToBeVoter);

  // Contract address
  const contractAddress = "0x85d57140a0db24d45ee2bb3379e548d1253bfa36";
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  // Create public cient and wallet client
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(providerApiKey),
  });

  const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
  const deployer = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  // Transfer voting tokens to someone
  const transferTx = await deployer.writeContract({
    address: contractAddress,
    abi: abi,
    functionName: "transfer",
    args: [addressOfToBeVoter, parseEther("2")],
  });

  console.log("Transaction hash:", transferTx);
  console.log("Waiting for confirmations...");
  await publicClient.waitForTransactionReceipt({ hash: transferTx });
  console.log("Transaction confirmed");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
