const SafeMath = artifacts.require("SafeMath");
const Splitter = artifacts.require("Splitter");

module.exports = function(deployer, network, accounts) {

  const addressAlice = accounts[0];
  const addressBob = accounts[1];
  const addressCarol = accounts[2];

  if(network == "ropsten"){

    addressAlice = "0xD7B60E8F3dEB977AF3c14E3191E98aeB06Fa27F6";
    addressBob   = "0xe9DbF6674E73B881bA78c9B1F57AC958Ed6eec5c";
    addressCarol = "0x80dA62Bce1449f30E70C0105AC0336BE0bad2F69";

  }

  deployer.deploy(SafeMath);
  deployer.deploy(Splitter, addressAlice, addressBob, addressCarol);
  
};
