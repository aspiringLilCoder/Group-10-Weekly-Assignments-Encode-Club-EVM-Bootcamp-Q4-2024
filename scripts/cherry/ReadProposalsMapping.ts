import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

if (!providerApiKey) {
  throw new Error("ALCHEMY_API_KEY is not set in the environment variables");
}

async function main() {
  const parameters = process.argv.slice(2);

  if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");

  const contractAddress = parameters[0] as `0x${string}`;
  const proposalIndex = parameters[1];

  if (!contractAddress) throw new Error("Contract address not provided");

  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  if (isNaN(Number(proposalIndex))) throw new Error("Invalid proposal index");

  console.log("Index of proposal to be checked:", proposalIndex);

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  console.log("Reading proposal mapping:");

  try {
    const proposal = (await publicClient.readContract({
      address: contractAddress,
      abi,
      functionName: "proposals",
      args: [BigInt(proposalIndex)],
    })) as any[];

    const name = proposal[0];
    const voteCount = proposal[1];

    console.log(`Proposal Name: ${name}`);
    console.log(`Vote Count: ${voteCount}`);
  } catch (error) {
    console.error("Error reading contract:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
