import { createPublicClient, http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

async function main() {
  const addressToCheck = process.argv.slice(2)[0];
  console.log("Address to be checked:", addressToCheck);

  /////////////////

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  ////////////////

  if (!/^0x[a-fA-F0-9]{40}$/.test(addressToCheck))
    throw new Error("Invalid address");

  console.log("Reading voter mapping:");
  const voterStruct = await publicClient.readContract({
    address: "0xF3321189517dB33AEB893f23b8923e52a33eb997",
    abi,
    functionName: "voters",
    args: [addressToCheck],
  });
  console.log(voterStruct);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
