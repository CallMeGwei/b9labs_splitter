// if (typeof web3 !== 'undefined') {
//     // Don't lose an existing provider, like Mist or Metamask
//     web3 = new Web3(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// }

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.getCoinbase(function(err, coinbase) {
    if (err) {
        console.error(err);
    } else {
        console.log("Coinbase: " + coinbase);
    }
});

// Your deployed address changes every time you deploy.
const splitterAddress = "0x018D4a4249CF4B978ae79962780809CFE7a5ECD3"; // <-- Put your own
const splitterContractFactory = web3.eth.contract( splitterCompiled.abi );
const splitterInstance = splitterContractFactory.at(splitterAddress);

// Query eth for balance
web3.eth.getBalance(splitterAddress, function(err, balance) {
    if (err) {
        console.error(err);
    } else {
        console.log("Contract balance: " + balance);
    }
});

function splitBetween(account1, account2) {
    console.log("Account1: " + account1);
    console.log("Account2:" + account2);
    web3.eth.getCoinbase(function(err, coinbase) {
        if (err) {
            console.error(err);
        } else {
            web3.eth.getAccounts(function(err, accounts) {
                if (err) {
                    console.error(err);
                } else {    
                    splitterInstance.splitBetween(
                        account1,
                        account2,
                        { from: coinbase, value: web3.toWei("1", "ether") },
                        function(err, txn) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log("splitBetween txn: " + txn);
                            }
                        });
                }
            });
        }
    });
}

function checkBalance(account1) {
    console.log("Account: " + account1);
    web3.eth.getCoinbase(function(err, coinbase) {
        if (err) {
            console.error(err);
        } else {
            web3.eth.getAccounts(function(err, accounts) {
                if (err) {
                    console.error(err);
                } else {    
                    splitterInstance.balances(
                        account1,
                        { from: coinbase },
                        function(err, txn) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log("checkBalance txn: " + txn);
                                alert("Balance is: " + txn + " wei");
                            }
                        });
                }
            });
        }
    });
}

function withdrawBalance() {
    console.log("Account: " + account1);
    web3.eth.getCoinbase(function(err, coinbase) {
        if (err) {
            console.error(err);
        } else {
            web3.eth.getAccounts(function(err, accounts) {
                if (err) {
                    console.error(err);
                } else {    
                    splitterInstance.withdraw(
                        { from: coinbase },
                        function(err, txn) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log("withdraw txn: " + txn);
                            }
                        });
                }
            });
        }
    });
}

window.onload = async function(){

    document.getElementById('addressBal').textContent = web3.eth.coinbase;
    document.getElementById('weiBal').textContent = await splitterInstance.balances(web3.eth.coinbase);

};