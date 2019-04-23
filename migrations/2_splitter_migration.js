const SafeMath = artifacts.require("SafeMath");
const Splitter = artifacts.require("Splitter");

module.exports = function(deployer, network, accounts) {
  
  deployer.deploy(SafeMath);
  deployer.deploy(Splitter);
  
};
