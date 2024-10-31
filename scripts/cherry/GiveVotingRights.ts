import { createPublicClient, http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  const addressOfToBeVoter = process.argv.slice(2)[0];
  console.log("Address of to be voter:", addressOfToBeVoter);

  /////////////////

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const chairperson = createWalletClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
    account: privateKeyToAccount(`0x${deployerPrivateKey}`),
  });

  ////////////////

  if (!/^0x[a-fA-F0-9]{40}$/.test(addressOfToBeVoter))
    throw new Error("Invalid address");

  const hash = await chairperson.writeContract({
    address: "0xF3321189517dB33AEB893f23b8923e52a33eb997",
    abi,
    functionName: "giveRightToVote",
    args: [addressOfToBeVoter],
  });
  console.log("Transaction hash:", hash);
  console.log("Waiting for confirmations...");
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("Transaction confirmed");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
