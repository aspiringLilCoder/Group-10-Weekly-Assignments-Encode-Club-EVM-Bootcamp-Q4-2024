# Week 2: 🗳️Ballot

---

## 📍 Contract Address: 

0xF3321189517dB33AEB893f23b8923e52a33eb997 ([Etherscan Link](https://sepolia.etherscan.io/address/0xf3321189517db33aeb893f23b8923e52a33eb997))

---

## 📋 Etherscan Transactions Screenshot:
![image](https://github.com/user-attachments/assets/6ae95e7d-4b70-43fe-a0eb-21ef0613d90d)

---

## 📄Report:
|| User | Scripts Ran | Arguments | Function Called | User Description | Tx Hash |
|--|-------|---------------------------------------------|-----------|------------------|------------------------------|---------|
| 1|@cherry|./scripts/cherry/<br>DeployWithViem.ts       |"YES to Pineapple on Pizza!"<br>"NO to Pineapple on Pizza!"<br>"Eh, I don't mind either way!"|Contract<br>creation<br>(0x60806040)|Deployed Ballot contract to [0xf33211...](https://sepolia.etherscan.io/address/0xf3321189517db33aeb893f23b8923e52a33eb997)) with proposals ['YES to Pineapple on Pizza!','NO to Pineapple on Pizza!',"Eh, I don't mind either way!"]|[0xe25e322...](https://sepolia.etherscan.io/tx/0xe25e322eaed07c8b2d5e625fee500475d0d252b4e5c852775490f53b421c6fef)|
| 2|@cherry|./scripts/cherry/<br>GiveVotingRights.ts     |"0xff1F2A..."|giveRightToVote|Test GiveVotingRights.ts script by giving voting rights to my alt address(0xff1F2…)                                  |[0x4c1bdf...](https://sepolia.etherscan.io/tx/0x4c1bdfe071da6d10cefd4c752e9da08c52ff22f0a3a028790dfd07e10a9d202f)|
| 3|@cherry|./scripts/cherry/<br>ReadVotersMapping.ts    |"0xff1F2A..."|voters         |Checked if my alt address (0xff1F2…) successfully has voter weight with ReadVotersMapping.ts script.                 ||
| 4|@cherry|./scripts/cherry/<br>GiveVotingRights.ts     |"0x19c650..."<br>"0x0cD517..."<br>"0x3Da4dC..."<br>"0x369cef..."|giveRightToVote|Give voting rights to gleb, altinburak, mikelowrey, and giovanni|[0xbo6c86...](https://sepolia.etherscan.io/tx/0xb06c86acc0379a6e70c88de1283616dbb02e1b344912ad37487fdc3336a8a72d)<br>[0x334fed...](https://sepolia.etherscan.io/tx/0x334fed2b739fd84202a34d65acae818a1bf6ac00e3d293ed054d2316da349067)<br>[0xb34c13](https://sepolia.etherscan.io/tx/0xb34c13f1e10f197aea2b8af19f573cd774b992e030798acaa7e6561d3fff4b28)<br>[0xcf3d4c](https://sepolia.etherscan.io/tx/0xcf3d4c2ccd3d8720adb56630da3419a98a10f0fa9cc703038aed96913e8e88a8)|
| 5|@cherry|./scripts/cherry/<br>CastVote.ts             |0xF33211... 2|vote           |Voted to proposal index 2 “Eh, I don’t mind either way!”                                                             |[0x885b8a](https://sepolia.etherscan.io/tx/0x885b8ad125748bbfad62943248783b943ab32430ee619394e7a3916f796154cb)|
| 6|@cherry|./scripts/cherry/<br>ReadProposalsMapping.ts |0xF33211... 2|proposals      |Checked if I successfully voted by checking if the vote count increased for my chosen proposal                       ||
| 7|@gleb  |./scripts/gleb/<br>Vote.ts                   |0n           |vote           |“Yes” proposal was selected                                                                                          |[0xfaf9c2](https://sepolia.etherscan.io/tx/0xfaf9c24b09b4e1eb9e555691598639279a2f4f8ec669f63e82d0d89241b3bb00)|
| 8|@gleb  |./scripts/gleb/<br>ReadWinningProposals.ts   |             |winnerName     |winnerNameResponse is of type “unknown” and needs to asserted                                                        ||
| 9|@gleb  |./scripts/gleb/<br>DelegateVote.ts           |0x19c650...  |delegate       |ContractFunctionRevertedError: The contract function "delegate" reverted with the following reason: You already voted.||

--- 

## Team members 

We refer the members by their discord username for simplicity.

| ID    |  Discord Username   |
|---------|-------------------|
| 6mzqes | @gleb       |
| alV3N1 | @mikelowrey       |
| yzw5TZ | @cherry        |
| vMwSYm  | @altinburak      |
| 64eDmh   | @Giovanni C      |

---

### ➕ Additional:

**@mikelowrey deployed their own smart contract.**

📍 Contract Address: 0x6f274797cFAF4f0E1aF3538a9F062Ca3fC382230 ([Etherscan Link](https://sepolia.etherscan.io/address/0xf4c2a7bbba3243bda85fc14b41f79700571c689d))

📋 Etherscan Transactions Screenshot:

<img src="https://github.com/user-attachments/assets/58856e8d-6157-478a-99d3-a96c11b251c5"  width="500"/>

📄Report:

|| User | Scripts Ran | Arguments | Function Called | User Description | Tx Hash |
|--|-------|---------------------------------------------|-----------|------------------|------------------------------|---------|
| 1|@mikelowrey|./scripts/michael/<br>DeployWithViem.ts|"test voting script"|Contract<br>creation<br>(0x60806040)|Deployed contract with name|[0x5fde6d...](https://sepolia.etherscan.io/tx/0x5fde6d5dd76aa88f362b518971bf711e0379fda7c6ca6f230d487d8b18be75e3)|
| 2|@mikelowrey|./scripts/michael/GiveVotingRights.ts  |"0xC2b8d3..."|giveRightToVote|Gave voting rights to team mates|[0x9fd0ad...](https://sepolia.etherscan.io/tx/0x9fd0ad43c9ceb7187534c9f3983351ccbe9216767034612357da3b9ee9015ee2)|

---

### Set up instructions for Group Members:
**1. run the following**
```sh
git clone https://github.com/aspiringLilCoder/Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024.git
cd Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024
git checkout Week-2
npm install
```
**2. create and fill in the** `.env` **file**
```env
PRIVATE_KEY="<your wallet private key should go here>"
ALCHEMY_API_KEY="********************************"
```
**3. run** `npx hardhat compile`

**4. create your scripts in the** `scripts/<your name>` **folder**

**5. run them either by:**
```sh
npx ts-node --files ./scripts/<your name>/<your script>.ts "<arg1>" "<arg2>" "<arg3>"
```
or
```sh
npx hardhat run ./scripts/<your name>/<your script>.ts 
```
**6. commit and push changes when you're done 💖**

---
