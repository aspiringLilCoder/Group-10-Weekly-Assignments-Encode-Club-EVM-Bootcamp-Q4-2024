import { createPublicClient, http, createWalletClient, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/MyERC20Votes.sol/MyToken.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
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

  // Mint tokens to deployers account
  const MINT_VALUE = parseEther("5");

  const mintTx = await deployer.writeContract({
    address: contractAddress,
    abi: abi,
    functionName: "mint",
    args: [deployer.account.address, MINT_VALUE],
  });

  console.log("Transaction hash:", mintTx);
  console.log("Waiting for confirmations...");
  await publicClient.waitForTransactionReceipt({ hash: mintTx });
  console.log("Transaction confirmed");

  console.log(
    `Minted ${MINT_VALUE.toString()} decimal units to account ${
      deployer.account.address
    }\n`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
