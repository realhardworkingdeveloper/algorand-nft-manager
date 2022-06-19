require('dotenv').config();
const algosdk = require('algosdk');
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
// purestake api key
const token = {
    'X-API-key': process.env.APIKEY,
}
// algo client V2
let algodClient = new algosdk.Algodv2(token, baseServer, port);

// Place your neumonic here 
var mnemonic1 = process.env.MNEMONIC;
var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic1);


// Wait for confirmation

// Function Borrowed from Algorand Inc.
const waitForConfirmation = async function (algodClient, txId) {
    let lastround = (await algodClient.status().do())['last-round'];
     while (true) {
        const pendingInfo = await algodClient.pendingTransactionInformation(txId).do();
        if (pendingInfo['confirmed-round'] !== null && pendingInfo['confirmed-round'] > 0) {
          //Got the completed Transaction
          console.log('Transaction confirmed in round ' + pendingInfo['confirmed-round']);
          break;
        }
        lastround++;
        await algodClient.statusAfterBlock(lastround).do();
     }
 };


 // Transaction to generate NFT Asset

(async() => {

    //Get the relevant params from the algod
    let params = await algodClient.getTransactionParams().do();

    // let amount = Math.floor(Math.random() * 1000);

    console.log(recoveredAccount.addr);


    const creator = recoveredAccount.addr;
    const defaultFrozen = false;    
    const unitName = "MARIOART"; 
    const assetName = "MARIOTESTNFT";
    const url = process.env.JSONURI;
    const managerAddr = undefined; 
    const reserveAddr = undefined;  
    const freezeAddr = undefined;
    const clawbackAddr = undefined;
    const metadata = undefined;
    const total = 1;                // NFTs have totalIssuance of exactly 1
    const decimals = 0;             // NFTs have decimals of exactly 0
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
            from:creator,
            total,
            decimals,
            assetName,
            unitName,
            assetURL: url,
            assetMetadataHash: metadata,
            defaultFrozen,
            freeze: freezeAddr,
            manager: managerAddr,
            clawback: clawbackAddr,
            reserve: reserveAddr,
            suggestedParams: params,
        });

        let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);
        let sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();
        console.log("Transaction : " + sendTx.txId);
        
        waitForConfirmation(algodClient, sendTx.txId)

})().catch(e => {
    console.log(e);

});


