const Splitter = artifacts.require("Splitter");

contract("Splitter", async accounts  => {
    
    it("Alice's account should be debited by one ether.", async () => {
        let instance = await Splitter.deployed();
        let aliceInitalBalance = await web3.eth.getBalance(accounts[0]);
        await instance.splitBetween( {from: accounts[0], value: web3.utils.toWei("2", "ether")} );
        let aliceAfterSplitBalance = await web3.eth.getBalance(accounts[0]);
        assert.isBelow(parseInt(aliceAfterSplitBalance), parseInt(aliceInitalBalance - web3.utils.toWei("2", "ether")), "Alice balance did not go down by one ether plus gas.");
    });
});