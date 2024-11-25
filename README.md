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
