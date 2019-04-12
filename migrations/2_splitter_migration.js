const Splitter = artifacts.require("Splitter");

const addressAlice = "0xD7B60E8F3dEB977AF3c14E3191E98aeB06Fa27F6";
const addressBob   = "0xe9DbF6674E73B881bA78c9B1F57AC958Ed6eec5c";
const addressCarol = "0x80dA62Bce1449f30E70C0105AC0336BE0bad2F69";

module.exports = function(deployer) {
  deployer.deploy(Splitter, addressAlice, addressBob, addressCarol);
};
