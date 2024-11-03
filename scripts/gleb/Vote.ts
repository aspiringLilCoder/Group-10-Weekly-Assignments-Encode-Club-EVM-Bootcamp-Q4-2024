import * as dotenv from "dotenv";
dotenv.config();

import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import { sepolia } from "viem/chains";
import { CONTRACT_ADDRESS, providerApiKey, userPrivateKey } from "./constants";

async function main() {
  const addressOfVoter = process.argv.slice(2)[0];
  console.log("Address of voter:", addressOfVoter);

  /////////////////

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const user = createWalletClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
    account: privateKeyToAccount(`0x${userPrivateKey}`),
  });

  ////////////////

  if (!/^0x[a-fA-F0-9]{40}$/.test(addressOfVoter))
    throw new Error("Invalid address");

  const hash = await user.writeContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "vote",
    args: [0n],
  });
  console.log("Transaction hash:", hash);
  console.log("Waiting for confirmations...");
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("Transaction confirmed");
  console.log("🚀 ~ main ~ receipt:", receipt)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});