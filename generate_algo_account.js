const algosdk = require('algosdk');

const createAccount = function() {
    try {  
        const myaccount = algosdk.generateAccount();
        console.log("Account Address = " + myaccount.addr);
        let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
        console.log("Account Mnemonic = "+ account_mnemonic);
        console.log("Account created. Save off Mnemonic and address");
        console.log("Add funds to account using the TestNet Dispenser: ");
        console.log("https://dispenser.testnet.aws.algodev.network/ ");
        return myaccount;
    }
    catch (err) {
        console.log("err", err);
    }
};

createAccount();

// THIS ALSO WORKS !!!!!!

// const algosdk = require('algosdk');

// let account = algosdk.generateAccount();
// console.log("Account Address: ", account.addr);

// let mn = algosdk.secretKeyToMnemonic(account.sk);
// console.log("Account Mnemonic: ", mn);
