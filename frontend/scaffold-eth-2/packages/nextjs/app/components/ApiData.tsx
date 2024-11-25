import RequestTokens from "./RequestToken";
import { useState } from "react";

function ApiData(params: { address: `0x${string}` }) {
  const [amount, setAmount] = useState(100);
  return (
    <div className="card w-full bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Mint Tokens:</h2>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <RequestTokens address={params.address} amount={amount} />
      </div>
    </div>
  );
}

export default ApiData;
