import { useState } from "react";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import externalContracts from "~~/contracts/externalContracts";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

function CheckLotteryState() {
  const [betAmount, setBetAmount] = useState();
  const [withdrawalAmount, setWithdrawalAmount] = useState();
  const { address } = useAccount();

  const { data: betsOpen } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "betsOpen",
    args: [],
  });

  const { data: prizePool } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "prizePool",
    args: [],
  });

  const { data: prize } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "prize",
    args: [address],
  });

  const { data: betsClosingTime } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "betsClosingTime",
    args: [],
  });

  const { data: viewBets } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "viewBets",
    args: [],
  });

  const { writeContractAsync: writeToken } = useScaffoldWriteContract("LotteryToken");
  const { writeContractAsync: writeLottery } = useScaffoldWriteContract("Lottery");

  const userAddress = address;
  const userBets = viewBets?.filter((address: string) => address === userAddress).length || 0;
  const totalBets = viewBets?.length || 0;
  const winningChance = totalBets > 0 ? (userBets / totalBets) * 100 : 0;

  return (
    <div className="card w-full bg-primary text-primary-content mt-4">
      <div className="card-body">
        <div>
          {betsOpen ? (
            <div>
              <p>Bets are currently open!</p>
              <p>Bet Price + Fee: 2 tokens</p>
              <p>Current prize pool: {prizePool?.toString()} tokens</p>
              <p>Closing time: {new Date(Number(betsClosingTime?.toString()) * 1000).toLocaleString()} </p>
              {new Date() > new Date(Number(betsClosingTime) * 1000) && (
                <button
                  className="btn btn-active btn-neutral w-full"
                  onClick={async () => {
                    await writeLottery({
                      functionName: "closeLottery",
                      args: [],
                    });
                  }}
                >
                  The closing time has passed. Close the lottery to see if you won!
                </button>
              )}
              {new Date() < new Date(Number(betsClosingTime) * 1000) && (
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Number of bets"
                    value={betAmount}
                    className="input w-full"
                    onChange={e => setBetAmount(e.target.value)}
                  />

                  <button
                    className="btn btn-active btn-neutral"
                    onClick={async () => {
                      await writeToken({
                        functionName: "approve",
                        args: [
                          externalContracts[11155111].Lottery.address,
                          parseEther((Number(betAmount) * 2).toString() ?? "0"),
                        ],
                      });
                      await writeLottery({
                        functionName: "betMany",
                        args: [betAmount],
                      });
                    }}
                  >
                    Place bets
                  </button>
                </div>
              )}
              {userBets > 0 && (
                <p>
                  You currently have {userBets} bet(s) out of {totalBets}, which means you have a{" "}
                  {winningChance.toFixed(2)}% chance of winning!
                </p>
              )}
            </div>
          ) : (
            <div>
              {" "}
              <p>Bets are currently closed.</p>
              {prize > 0 ? (
                <div>
                  {" "}
                  <h2 className="card-title">You have won {prize.toString()} tokens!</h2>
                  <div className="flex gap-2 mb-3">
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Withdrawal Amount"
                        value={withdrawalAmount}
                        className="input w-full"
                        onChange={e => setWithdrawalAmount(e.target.value)}
                      />
                      <button
                        className="btn btn-ghost absolute right-0"
                        onClick={() => setWithdrawalAmount(prize.toString())}
                      >
                        MAX ({prize?.toString()})
                      </button>
                    </div>
                    <button
                      className="btn btn-active btn-neutral"
                      onClick={async () => {
                        await writeLottery({
                          functionName: "prizeWithdraw",
                          args: [parseEther(withdrawalAmount ?? "0")],
                        });
                      }}
                    >
                      Claim your prize
                    </button>
                  </div>
                </div>
              ) : (
                <p>Better luck next time!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckLotteryState;
