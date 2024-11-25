## 📍 Contract Addresses: 
**MyToken:** 0x85D57140a0dB24D45ee2bB3379e548D1253BFA36 ([Etherscan Link](https://sepolia.etherscan.io/address/0x85d57140a0db24d45ee2bb3379e548d1253bfa36))
<br><br>
**TokenizedBallot:** 0xCFF30Ee654b977297d78F4Be1AAbb77A1CB7B913 ([Etherscan Link](https://sepolia.etherscan.io//address/0xCFF30Ee654b977297d78F4Be1AAbb77A1CB7B913))

---

## ✅ Todolist in order:

✅Implement the mintTokens function in `backend\src\app.service.ts`.

✅Successfully mint tokens to yourself or anyone using the `Request Tokens` button at `http://localhost:3000/`.

**The rest is repeating what we did in previous assignments, just in the `http://localhost:3000/debug` page this time:**

✅Delegate your minted tokens to yourself at `http://localhost:3000/debug` at the MyToken contract.

✅Deploy a new TokenizedBallot by running `yarn deploy –network sepolia` and make sure you’re on `frontend/scaffold-eth-2/`. (To change the proposals, edit `frontend\scaffold-eth-2\packages\hardhat\deploy\01_deploy_tokenized_ballots.ts`)

✅Go to `http://localhost:3000/debug` to your deployed TokenizedBallot contract and cast votes or query results.

✅ Lastly, send your forked repo and TokenizedBallot contract to our discord so I can add it to this readme!

**Bonus todos:**

- Store a list of recent votes in the backend and display that on frontend
- Use an oracle to fetch off-chain data
