# Week 1: 👋 HelloWorld

---

## 📍 Contract Address: 
0x6f274797cFAF4f0E1aF3538a9F062Ca3fC382230 ([Etherscan Link](https://sepolia.etherscan.io/address/0x6f274797cfaf4f0e1af3538a9f062ca3fc382230))

---

## 📋 Etherscan Transactions Screenshot:

![image](https://github.com/user-attachments/assets/4a7b9dbf-a722-4199-87e1-ef3c14e88932)

---

## 📄Report:

|  | User         | Called Function | User's Observation | Tx Hash                  |
|--|--------------|-----------------|-------------|--------------------------|
| 1 | @cherry      | Contract creation(0x60806040) |       | [0x9f373...](https://sepolia.etherscan.io/tx/0x9f373b32a1abbe0376ae8c895b627f4c2cc07a20b86b0a7d8eee0d5e58534418)              |
| 2 | @cherry      | setText("cherry was here!")       |        | [0x79931b...](https://sepolia.etherscan.io/tx/0x79931b5a029a87dedc6d1d18c743bde2322e036c7d2833373c78889b93a82bc2)              |
| 3 | @cherry | transferOwnership(0x0cD517...)  | I transferred ownership to @gleb. | [0x2d7a24...](https://sepolia.etherscan.io/tx/0x2d7a248ea74320f67214e8d8137d9ccc39adf9e071d8f85d5e99507795271751)|
| 4 | @gleb        | transferOwnership(0x19c650...) |         | [0x866b11...](https://sepolia.etherscan.io/tx/0x866b112b6ccf9843374951885afb2964ea26aa042949514247d60bcf8d27ef48)|
| 5 | @altinburak        | Owner variable |   Owner is checked to see my wallet address      | |
| 6 | @altinburak        | setText("burak's turn")       | setText is called and the text variable is changed. | [0xc07a23...](https://sepolia.etherscan.io/tx/0xc07a236c29cabfdd1411cae25dffe578346607c24d5c89b555ac8c87bee9eb3c)              |
| 7 | @altinburak        | helloWorld()     | Seen the text value by calling helloWorld view | |
| 8 | @altinburak        | transferOwnership(“0x3Da4dC...”)       | transferOwnership is called and @mikelowrey is set as the new owner.        | [0x57c901...](https://sepolia.etherscan.io/tx/0x57c90140cbd45f80e4b57b71f468573cc4d8d2a62d99b56658f2bd06b69fc9c8)              |
| 9 | @altinburak        |  transferOwnership()     |I’ve tried to transferOwnership to test the revert but it's stucks in pending in Sepolia. Everything works fine in Remix VM environment. I’ve created an [issue in github](https://github.com/Encode-Club-Solidity-Bootcamp/Lesson-04/issues/34).|    |

--- 

## ➕ Additional:
We actually had an earlier instance of the HelloWorld contract created by @gleb with his revert/error experiments so here's the report for that and explanation of why we had to create a new contract!

📍 Contract Address: 0x6f274797cFAF4f0E1aF3538a9F062Ca3fC382230 ([Etherscan Link](https://sepolia.etherscan.io/address/0x6f274797cFAF4f0E1aF3538a9F062Ca3fC382230))

📋 Etherscan Transactions Screenshot:

<img src="https://github.com/user-attachments/assets/01d9d7b1-bc9a-4697-8225-1b374e85a5d7"  width="500"/>

📄Report:

 |  | User         | Called Function | User's Observation | Tx Hash                  |
|--|--------------|-----------------|-------------|--------------------------|
| 1 | @gleb      | Contract creation(0x60806040) |       | [0xf44ece...](https://sepolia.etherscan.io/tx/0xf44ecefa9e08d54ae0f6f6918ff5a7e7d486489dfd713a11906a078dc6de40c0)      |
| 2 | @gleb      | setText("updated text by Gleb")       |        | [0x123282...](https://sepolia.etherscan.io/tx/0x123282a0bdad2170d554df640325d90629223331bd2497d92db1a4863454e3a6)              |
| 3 | @gleb | Function call with 111 wei sent amount  |Error: In order to receive Ether transfer the contract should have either 'receive' or payable 'fallback' function  ||
| 4 | @gleb        |  |  Error: transact to IHelloWorld.nonExisting errored: Error encoding arguments: Error: invalid address (argument="address", value="0x23ssdd", code=INVALID_ARGUMENT, version=address/5.7.0) (argument=null, value="0x23ssdd", code=INVALID_ARGUMENT, version=abi/5.7.0)    | |
| 5 | @gleb | nonExisting(0x432c1c87)  | execution reverted: Transaction mined but execution failed | [0xc9cd11...](https://sepolia.etherscan.io/tx/0xc9cd11acbaa73e4e533e89cc8d1374ffcef0c8b5fe38eb213b297ff474380e8b)|
| 6 | @gleb        | transferOwnership(0x5B38Da...) |       | [0xc85223...](https://sepolia.etherscan.io/tx/0xc85223483e19f223047eb6d968444468add76d2281b5ac53e15a2f371cf2bb3a)|

**Reason for creating a new contract:** In the last transaction, ownership was accidentally transferred to @altinburak's remix address, making it unretrievable. This highlighted the risks involved with changing ownership!
