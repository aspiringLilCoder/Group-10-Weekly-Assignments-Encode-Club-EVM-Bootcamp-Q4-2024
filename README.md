## Week 4: 🌐 Voting dApp

---

## 👀 Submissions:

* @gleb:
  * GitHub branch with implementation: https://github.com/aspiringLilCoder/Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024/tree/Week-4-gleb

* @cherry:
  * GitHub branch with implementation: https://github.com/aspiringLilCoder/Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024/tree/Week-4-Cherry
  * Deployed TokenizedBallot Etherscan link: https://sepolia.etherscan.io//address/0xCFF30Ee654b977297d78F4Be1AAbb77A1CB7B913

--- 

## 🧑‍💻Team members:

We refer the members by their discord username for simplicity.

| ID    |  Discord Username   |
|---------|-------------------|
| 6mzqes | @gleb       |
| alV3N1 | @mikelowrey       |
| yzw5TZ | @cherry        |
| vMwSYm  | @altinburak      |
| 64eDmh   | @Giovanni C      |

---

### Set up instructions for Group Members:
### 1. FORK the repo and run the following
```sh
git clone https://github.com/<your github username>/Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024.git
cd Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024
git checkout Week-4
```
### 2. create and fill in the following '*.env*' file in the '*backend*', '*frontend/packages/hardhat*', and '*frontend/packages/nextjs*' folders
```env
PRIVATE_KEY="<your wallet private key should go here>"
DEPLOYER_PRIVATE_KEY="<your wallet private key should go here>"
ALCHEMY_API_KEY="********************************"
ETHERSCAN_API_KEY="********************************"
TOKEN_ADDRESS="0x85D57140a0dB24D45ee2bB3379e548D1253BFA36"
```
### 3. start the frontend

* **first terminal:**
```sh
cd frontend/scaffold-eth-2/
yarn install
yarn chain
```

* **second terminal:**
```sh
cd frontend/scaffold-eth-2/
yarn start
```
* Access frontend through `http://localhost:3000/`.
* Access the MyToken and to-be-deployed contracts through `http://localhost:3000/debug`.

### 3. start the backend
* **open a third terminal:**
```sh
cd backend/
npm install
npm run start
```
* Access api interface through `http://localhost:3001/api`.

### 3. commit changes!

---

## ✅ Todolist in order:
❌Implement the mintTokens function in `backend\src\app.service.ts`.

❌Successfully mint tokens to yourself or anyone using the `Request Tokens` button at `http://localhost:3000/`.

**The rest is repeating what we did in previous assignments, just in the `http://localhost:3000/debug` page this time:**

❌Delegate your minted tokens to yourself at `http://localhost:3000/debug` at the MyToken contract.

❌Deploy a new TokenizedBallot by running `yarn deploy –network sepolia` and make sure you’re on `frontend/scaffold-eth-2/`. (To change the proposals, edit `frontend\scaffold-eth-2\packages\hardhat\deploy\01_deploy_tokenized_ballots.ts`)

❌Go to `http://localhost:3000/debug` to your deployed TokenizedBallot contract and cast votes or query results.

❌ Lastly, send your forked repo and TokenizedBallot contract to our discord so I can add it to this readme!

**Bonus todos:**
* Store a list of recent votes in the backend and display that on frontend
* Use an oracle to fetch off-chain data

