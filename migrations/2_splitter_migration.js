const Splitter = artifacts.require("Splitter");
const Ownable = artifacts.require("Ownable");

module.exports = function(deployer) {
  
  deployer.deploy(Ownable);
  deployer.link(Ownable, Splitter);
  deployer.deploy(Splitter);
  
};
