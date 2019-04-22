const Splitter = artifacts.require("Splitter");
const truffleAssert = require("truffle-assertions");

const numDecimals = 5;

contract("Splitter", async accounts  => {

    const alice  = accounts[0];
    const bob    = accounts[1];
    const carol  = accounts[2];
    const nobody = accounts[3];
    
    it("Alice's account should be debited by one ether.", async () => {
        let instance = await Splitter.deployed();
        let aliceInitalBalance = await web3.eth.getBalance(alice);
        await instance.splitBetween( {from: alice, value: web3.utils.toWei("1", "ether")} );
        let aliceAfterSplitBalance = await web3.eth.getBalance(alice);
        assert.isBelow(parseInt(aliceAfterSplitBalance), parseInt(aliceInitalBalance - web3.utils.toWei("1", "ether")), "Alice balance did not go down by one ether plus gas.");
    });

    it("Bob and Carol should have equal in-contract balances of .5 ether right after the first 1 ether split.", async () => {
        let instance = await Splitter.deployed();
        let bobContractBalance = await instance.balances(bob);
        let carolContractBalance = await instance.balances(carol);
        assert.equal(bobContractBalance.toString(), web3.utils.toWei(".5", "ether") * 10 ** numDecimals, "Bob's balance is wrong.");
        assert.equal(carolContractBalance.toString(), web3.utils.toWei(".5", "ether") * 10 ** numDecimals, "Carol's balance is wrong.");
    });

    it("Bob should be able to withdraw his ether contract balance, his on-chain balance should increase, and his contract balance should go to zero.", async () => {
        let instance = await Splitter.deployed();
        let bobInitialBalance = await web3.eth.getBalance(bob);
        await instance.withdraw( {from: bob} );
        let bobNewContractBalance = await instance.balances(bob);
        let bobNewBalance = await web3.eth.getBalance(bob);
        assert.isAbove(parseInt(bobNewBalance), parseInt(bobInitialBalance), "Bob's new balance isn't greater than the initial balance.");
        assert.equal(parseInt(bobNewContractBalance), 0, "Bob's withdrawal wasn't complete.");
    });

    it("Should revert for an address attempting withdrawal that has a zero in-contract balance.", async () => {
        let instance = await Splitter.deployed();
        await truffleAssert.reverts(instance.withdraw( {from: nobody} ));
    });

});