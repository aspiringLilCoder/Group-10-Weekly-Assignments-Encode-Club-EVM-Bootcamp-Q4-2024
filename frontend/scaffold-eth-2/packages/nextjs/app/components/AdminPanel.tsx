import { useState } from "react";
import { parseEther } from "viem";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

function AdminPanel() {
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [date, setDate] = useState();

  const { writeContractAsync: writeLottery } = useScaffoldWriteContract("Lottery");

  const { data: ownerPool } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "ownerPool",
    args: [],
  });

  const { data: betsOpen } = useScaffoldReadContract({
    contractName: "Lottery",
    functionName: "betsOpen",
    args: [],
  });

  return (
    <div className="card w-full bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">AdminPanel</h2>
        {!betsOpen && (
          <div
            className="flex gap-2 
          mb-3"
          >
            {" "}
            <input type="datetime-local" value={date} class="input w-full" onChange={e => setDate(e.target.value)} />
            <button
              className="btn btn-active btn-neutral"
              onClick={async () => {
                await writeLottery({
                  functionName: "openBets",
                  args: [new Date(date).getTime() / 1000],
                });
              }}
            >
              Open Bets
            </button>
          </div>
        )}

        <p>Fees that can be collected: {ownerPool?.toString()}</p>

        {ownerPool > 0 && (
          <div className="flex gap-2 mb-3">
            {" "}
            <div className="relative w-full">
              <input
                type="text"
                value={withdrawalAmount}
                class="input w-full"
                onChange={e => setWithdrawalAmount(e.target.value)}
              />
              <button
                className="btn btn-ghost absolute right-0"
                onClick={() => setWithdrawalAmount(ownerPool.toString())}
              >
                MAX ({ownerPool?.toString()})
              </button>
            </div>
            <button
              className="btn btn-active btn-neutral"
              onClick={async () => {
                await writeLottery({
                  functionName: "ownerWithdraw",
                  args: [parseEther(betAmount ?? "0")],
                });
              }}
            >
              Withdraw fees
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
