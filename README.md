# Week 3: 🪙TokenizedBallot

---

## 📍 Contract Address: 
**MyToken:** 0x85D57140a0dB24D45ee2bB3379e548D1253BFA36 ([Etherscan Link](https://sepolia.etherscan.io/address/0x85d57140a0db24d45ee2bb3379e548d1253bfa36))
<br><br>
**TokenizedBallot:** 
<br>
<sub>(Since delegation in MyToken must be completed before deploying TokenizedBallot, and everyone's schedules vary during the week, we decided to deploy TokenizedBallot separately to allow more flexibility in completing tasks.)</sub>
* @gleb - 0x322a8B96f45454A4772D5dc4bC73d35B24403F03 ([Etherscan Link](https://sepolia.etherscan.io/address/0x322a8b96f45454a4772d5dc4bc73d35b24403f03))
* @cherry - 0xc78d93C8373b264f52725a6a6c36A79226243588 ([Etherscan Link](https://sepolia.etherscan.io/address/0xc78d93c8373b264f52725a6a6c36a79226243588))

---

## 📋 Etherscan Transactions Screenshot:
**MyToken:**

<img src="https://github.com/user-attachments/assets/276d2e64-165b-4328-b4b8-74eac1750d96"  width="300"/>

**@cherry's TokenizedBallot:**

<img src="https://github.com/user-attachments/assets/143990ef-9aae-4552-a67b-f78df0bee3bb"  width="300"/>

**@gleb's TokenizedBallot:**

<img src="https://github.com/user-attachments/assets/5151f666-4821-473c-b0bf-bcd541de1ffa"  width="300"/>

---

## 📄Report of the MyToken Contract:
|| User | Scripts Ran | Arguments | Function Called | User Description | Tx Hash |
|--|-------|---------------------------------------------|-----------|------------------|------------------------------|---------|
| 1|@cherry|./scripts/cherry/<br>DeployMyToken.ts            |             |Contract<br>creation<br>(0x60806040)|Deployed MyToken contract to ([0x85d571...](https://sepolia.etherscan.io/address/0x85d57140a0db24d45ee2bb3379e548d1253bfa36))|[0x2ce35a...](https://sepolia.etherscan.io/tx/0x2ce35a09aa7a083f608db9cfd2e0d5e00f5009c033ca24142b2a6928a3e01764)|
| 2|@cherry|./scripts/cherry/<br>MintTokens.ts               |             |mint           |Mint 10 tokens. Planned to mint 5 tokens but accidentally minted twice.  |[0x641231...](https://sepolia.etherscan.io/tx/0x6412312052ca4f533ee1a7eda0c2690fca18e3156e70aa471c67e125dc1410c7)<br>[0xaa413a...](https://sepolia.etherscan.io/tx/0xaa413afff3756b01aca0b1226979071aaf63f3852b00b7c0e90139ba055a97a9)|
| 3|@cherry|./scripts/cherry/<br>GiveVotingTokens.ts         |"0x0cD517..."<br>"0x19c650..."<br>"0x3Da4dC..."<br>"0x369cef..."|transfer|Transfer 2 tokens to each team member.|[0x751934...](https://sepolia.etherscan.io/tx/0x751934ffb784aaa7c54662f03aebeb5e6613684ea28dc019e594560a541385d6)<br>[0xa1090b...](https://sepolia.etherscan.io/tx/0xa1090be49b7b1d9d6aa68727cf29f8a315c90d9ef95c958392bec4037f292c73)<br>[0x555440...](https://sepolia.etherscan.io/tx/0x5554409b21bc3e3a7bd566bb042f45abf57c5b3533189647f707a86d68e2b0a6)<br>[0x567b4e...](https://sepolia.etherscan.io/tx/0xb57b4ee476cd42ec087120eba5236374980a62851e3ba26d3448daf5a97b245f)|
| 4|@cherry|./scripts/cherry/<br>DelegateVoting<br>PowerToSelf.ts|             |delegate       |Delegated 2 Tokens worth of Voting power to self.|[0x913d00...](https://sepolia.etherscan.io/tx/0x913d0066acc4e43e90d2bd11019eb4f84c08666a24b32e8616482161c5d3c017)|
| 5|@gleb|./scripts/gleb/<br>DelegateVoting<br>PowerToSelf.ts  |             |delegate       |Delegated 2 votes to myself|[0xf196fc...](https://sepolia.etherscan.io/tx/0xf196fccd2c2e6f0748a145c6c858594d0e05f7abac169e8fb03aa839ebf75212)|
| 6|@gleb|./scripts/gleb/ReadVotes.ts  ||getVotes|Have 2 votes||

<br>

## 📄Report of the @cherry's TokenizedBallot Contract:
| | Scripts Ran | Arguments | Function Called | User Description | Tx Hash |
|--|---------------------------------------------|-----------|------------------|------------------------------|---------|
| 1|./scripts/cherry/<br>DeployTokenizedBallot.ts  |"Cats,<br>Dogs,<br>Capybaras"|Contract<br>creation<br>(0x60806040)|Deployed TokenizedBallot contract to ([0xc78d93...](https://sepolia.etherscan.io/address/0xc78d93c8373b264f52725a6a6c36a79226243588))|[0xe29414...](https://sepolia.etherscan.io/tx/0xe2941485e2f7a8d3fae845d925ef2610a7257e37fbdaf893cd1ee4ef0727d2fc)|
| 2|./scripts/cherry/<br>GetVotePower.ts   |"0xC2b8d3..."<br>"0x0cD517..."<br>"0x19c650"|getVotePower |Checked the voting power of addresses that delegated and addresses that did not.||
| 3|./scripts/cherry/<br>CastVote.ts           |"1"|vote|Voted 1000000000000000000n voting power on proposal “Dogs”|[0xef99bc...](https://sepolia.etherscan.io/tx/0xef99bc296c7c1f360b22717bbfabbcc15ac61796af8393af9dcf9a6a8bf80ab6)|
| 4|./scripts/cherry/<br>GetVotePower.ts   |"0xC2b8d3..."|getVotePower       |Check if my voting power decreased by 1000000000000000000n.||
| 5|./scripts/cherry/<br>GetWinningProposal.ts |  |winningProposal       |Check if the winning proposal is index 1n||
| 6|./scripts/cherry/<br>GetWinnerName.ts |  |winnerName       |Check if winner proposal is “Dogs”||

<br>

## 📄Report of the @gleb's TokenizedBallot Contract:
| | Scripts Ran | Args | Function Called | User Description | Tx Hash |
|--|----------------------------------------------------|-----------|------------------|------------------------------|---------|
| 1|./scripts/gleb/ballot/<br>DeployTokenizedBallot.ts  ||Contract<br>creation<br>(0x60806040)|Deployed TokenizedBallot contract to ([0x322a8b...](https://sepolia.etherscan.io/address/0x322a8b96f45454a4772d5dc4bc73d35b24403f03))|[0x72d62f..](https://sepolia.etherscan.io/tx/0x72d62f9d8fe16de9bb708902a62b8031e0e2d1f8d471c85e59881cedcda7dc31)|
| 2|./scripts/gleb/ballot/<br>GetVotePower.ts   ||getVotePower |Have 2 votes in the ballot contract||
| 3|./scripts/gleb/ballot/<br>GetWinnerName.ts     ||winnerName|If no votes were made the first proposal is the winner||
| 4|./scripts/gleb/ballot/<br>VoteForProposal.ts   |"2n"|vote       ||[0x81046c](https://sepolia.etherscan.io/tx/0x81046c9b0f7b3a318bbeff26014a5900f2fd5db1bcdc81a9819758282d2814b7)|
| 5|./scripts/gleb/ballot/<br>GetWinnerName.ts  |  |winnerName       |Another proposal is a winner now||
| 6|./scripts/gleb/ballot/<br>GetWinnerProposal.ts |  |winningProposal       |||

<br>

Report Draft: https://docs.google.com/document/d/1v2rhj_Qc9P356JfZFoYqWyCoiajUx841BOT7BCm-HuQ/edit?tab=t.0

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
**1. run the following**
```sh
git clone https://github.com/aspiringLilCoder/Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024.git
cd Group-10-Weekly-Assignments-Encode-Club-EVM-Bootcamp-Q4-2024
git checkout Week-3
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
