# b9labs_project_splitter

This truffle project deploys a smart contract to Ropsten testnet. \
The contract takes three Ethereum addresses as arguments when deployed.

The Ethereum addresses are saved as Alice, Bob, and Carol internally.

Alice can later call a function of the smart contract called splitBetween, \
wherein ether sent along with the call is divided in to two equal parts \
and one part it given to Bob and the other part is given to Carol.

The project uses Node.js, truffle, truffle-hdwallet-provider, and infura.io.
