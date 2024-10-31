import { createPublicClient, http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  const addressesOfToBeVoters = process.argv.slice(2);
  console.log("Addresses of to be voters:", addressesOfToBeVoters);

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

  addressesOfToBeVoters.forEach(async (address) => {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address))
      throw new Error("Invalid address");

    const hash = await chairperson.writeContract({
      address: "0xF3321189517dB33AEB893f23b8923e52a33eb997",
      abi,
      functionName: "giveRightToVote",
      args: [address],
    });
    console.log("Transaction hash:", hash);
    console.log("Waiting for confirmations...");
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log("Transaction confirmed");
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
