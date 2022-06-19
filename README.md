# Algorand NFT Mint Example

### Dependencies:
- Algorand SDK 
- PureStake API
- dotenv

### Files:

#### 1.`generate_algo_account.js` creates a fundable account on Algorand

- Generates account 
- Generates mnemnonic 
- Generates account address



#### 2. `generate_nft.js` creates a single Algorand NFT/ASA via Javascript SDK / PureStake

- Generates the NFT / ASA



#### 3. `generate_nft.js` asset creation template


### How to use the files: 
- clone repo => run `npm install`
1. Go to purestake.com for an account and API key.This example uses the PureStake API to interact with the Algorand chain.
2. Generate your account `node generate_algo_account.js`
3. Add your API key to `generate_nft.js `
4. Add your mnemonic `generate_nft.js` 
5. Add your NFT related metadata URL
6. Mint NFT `node generate_nft.js`

### Successful Ouput:
- If all goes well the follwing will output in to the terminal
`
PPSWJDI6HOBJGSGV3L5GXUXMCLNIX4P53JNUGJEJBA5LEXLXNS67MIQ2IE
Transaction : G6T2EYO6AKFXQQR2NQ2UDMFNYSRB4YUNWW7SUKFMJZ4XQKOVOS3A
Transaction confirmed in round 22305958
`