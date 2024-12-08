import { formatEther } from "viem";
import { useAccount, useBalance } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

function AccountDetails() {
  const { address, chain } = useAccount();
  const { data: balance } = useBalance({ address });

  const { data: tokensBalance } = useScaffoldReadContract({
    contractName: "LotteryToken",
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <div className="card w-full bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">AccountDetails</h2>
        {address && (
          <div className="flex flex-col">
            <div>
              <span>Your account address is: </span>
              <span>{address}</span>
            </div>
            <div>
              <span>Connected to the network: </span>
              <span>{chain?.name}</span>
            </div>
            {balance && (
              <div>
                <span>Eth balance: </span>
                <span>{formatEther(balance.value)}</span>
              </div>
            )}
            {typeof tokensBalance !== "undefined" && (
              <div>
                <span>Lottery tokens balance: </span>
                <span>{formatEther(tokensBalance ?? 0n)}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountDetails;
