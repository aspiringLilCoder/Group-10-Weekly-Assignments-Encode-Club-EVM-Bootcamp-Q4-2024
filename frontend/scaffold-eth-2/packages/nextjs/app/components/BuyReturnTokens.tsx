import { useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount, useBalance } from "wagmi";
import externalContracts from "~~/contracts/externalContracts";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

enum Mode {
  BUY = "buy",
  RETURN = "return",
}

function BuyReturnTokens() {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  const [mode, setMode] = useState<Mode>(Mode.BUY);

  const [amount, setAmount] = useState<string | null>(null);
  const { data: purchaseRatio } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "purchaseRatio",
    args: [],
  });

  const { data: tokensBalance } = useScaffoldReadContract({
    contractName: "LotteryToken",
    functionName: "balanceOf",
    args: [address],
  });

  const { writeContractAsync: writeLottery } = useScaffoldWriteContract("Lottery");
  const { writeContractAsync: writeToken } = useScaffoldWriteContract("LotteryToken");

  const balanceToUse = mode === Mode.BUY ? balance?.formatted : formatEther(tokensBalance!);

  return (
    <div className="card w-full bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Buy/Return Tokens</h2>
        <div className="flex gap-2 mb-3">
          <button
            className={`btn flex-1 ${mode === Mode.BUY ? "bg-accent" : "bg-transparent"}`}
            onClick={() => setMode(Mode.BUY)}
          >
            Buy
          </button>
          <button
            className={`btn flex-1 ${mode === Mode.RETURN ? "bg-accent" : "bg-transparent"}`}
            onClick={() => setMode(Mode.RETURN)}
          >
            Return
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Amount"
            className="input w-full"
            value={amount || ""}
            onChange={e => setAmount(e.target.value)}
          />
          <button className="btn btn-ghost absolute right-0" onClick={() => setAmount(balanceToUse?.toString() ?? "")}>
            MAX ({balanceToUse?.toString()?.slice(0, 4)})
          </button>
        </div>
        <input type="text" disabled value={Number(amount) * Number(purchaseRatio)} className="input" />
        {mode === Mode.BUY ? (
          <button
            className="btn btn-accent"
            onClick={async () =>
              await writeLottery({
                functionName: "purchaseTokens",
                value: parseEther(amount ?? "0"),
              })
            }
          >
            Buy
          </button>
        ) : (
          <button
            className="btn btn-accent"
            onClick={async () => {
              await writeToken({
                functionName: "approve",
                args: [externalContracts[11155111].Lottery.address, parseEther(amount ?? "0")],
              });
              await writeLottery({
                functionName: "returnTokens",
                args: [parseEther(amount ?? "0")],
              });
            }}
          >
            Return
          </button>
        )}
      </div>
    </div>
  );
}

export default BuyReturnTokens;
