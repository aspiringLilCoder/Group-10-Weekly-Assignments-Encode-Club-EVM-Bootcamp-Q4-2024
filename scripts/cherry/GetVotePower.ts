import * as dotenv from "dotenv";
import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  const addressOfVoter = process.argv.slice(2)[0];

  if (!/^0x[a-fA-F0-9]{40}$/.test(addressOfVoter))
    throw new Error("Invalid address");
  console.log("Address of voter:", addressOfVoter);

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

  const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
  const deployer = createWalletClient({
    account,
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  // Get vote power
  const getVotePower = await publicClient.readContract({
    address: contractAddress,
    abi: abi,
    functionName: "getVotePower",
    args: [addressOfVoter],
  });

  console.log("Vote power:", getVotePower);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
