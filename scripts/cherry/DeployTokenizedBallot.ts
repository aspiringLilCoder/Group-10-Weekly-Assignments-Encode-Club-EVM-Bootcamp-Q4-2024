import {
  createPublicClient,
  http,
  createWalletClient,
  formatEther,
  parseEther,
  getContract,
  toHex,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import {
  abi,
  bytecode,
} from "../../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  // Get proposals from command line arguments
  const proposals = process.argv.slice(2)[0].split(",");
  if (!proposals || proposals.length < 1)
    throw new Error("Proposals not provided");
  console.log("Proposals:", proposals);

  // Create public client
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  // Get the latest block number
  const blockNumber = await publicClient.getBlockNumber();
  console.log("Last block number:", blockNumber);

  // Get deployer account
  const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
  const deployer = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });
  console.log("Deployer address:", deployer.account.address);
  const balance = await publicClient.getBalance({
    address: deployer.account.address,
  });
  console.log(
    "Deployer balance:",
    formatEther(balance),
    deployer.chain.nativeCurrency.symbol
  );

  // Deploy TokenizedBallot contract
  const myTokenContractAddress = "0x85d57140a0db24d45ee2bb3379e548d1253bfa36";

  console.log("\nDeploying TokenizedBallot contract");
  const deployTxHash = await deployer.deployContract({
    abi,
    bytecode: bytecode as `0x${string}`,
    args: [
      proposals.map((prop) => toHex(prop, { size: 32 })),
      myTokenContractAddress,
      blockNumber - 1n,
    ],
  });
  console.log("Transaction hash:", deployTxHash);
  console.log("Waiting for confirmations...");
  const deployReceipt = await publicClient.waitForTransactionReceipt({
    hash: deployTxHash,
  });
  console.log(
    "TokenizedBallot contract deployed to:",
    deployReceipt.contractAddress
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
