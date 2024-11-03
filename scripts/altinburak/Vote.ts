import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {
  const proposalIndex = parseInt(process.argv.slice(2)[0]);
  console.log("Proposal index to vote for:", proposalIndex);

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

    const walletClient = createWalletClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
    account: privateKeyToAccount(`0x${deployerPrivateKey}`),
  });

  const contractAddress = "0xF3321189517dB33AEB893f23b8923e52a33eb997"; 

  console.log("Casting vote...");

    const hash = await walletClient.writeContract({
        address: contractAddress,
        abi,
        functionName: "vote",
        args: [proposalIndex], 
    });

    console.log("Vote transaction hash:", hash);

    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log("Transaction receipt:", receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
