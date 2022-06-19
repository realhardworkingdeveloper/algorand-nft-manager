# Algorand NFT Mint Example

### Ingredients
- Algorand SDK 
- PureStake API
- dotenv


### 1.`generate_algo_account.js` creates a fundable account on Algorand

- Generates account 
- Generates mnemnonic 
- Generates account address



### 2. `generate_nft.js` creates a single Algorand NFT/ASA via Javascript SDK / PureStake

- Generates the NFT / ASA


### How to use the files: 

1. Go to purestake.com and get an account and API key. We use the PureStake API to interact with the Algorand chain but you can use whatever you like.
2. Generate your account `node generate_algo_account.js`
3. Add your API key to `generate_nft.js `
4. Add your mnemonic `generate_nft.js` 
5. Mint NFT `node generate_nft.js`
