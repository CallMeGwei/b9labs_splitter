const Splitter = artifacts.require("Splitter");
const truffleAssert = require("truffle-assertions");

const BN = web3.utils.toBN;

contract("Splitter", async accounts  => {

    // assigning variables to a few of the provided accounts in order
    const [ alice, bob, carol, nobody ] = accounts;
    
    // why is this test failing? because Alice's account is losing more value than I assume she should... but why is that?
    it("Alice's account should be debited by one finney.", async () => {
        let instance = await Splitter.deployed();
        let aliceInitalBalance = new BN(await web3.eth.getBalance(alice));  // Alice's ethereum balance.
        let transaction = await instance.splitBetween( bob, carol, {from: alice, value: web3.utils.toWei("1", "finney")} ); // Alice sends 1 finney to the contract.
        let aliceAfterSplitBalance = new BN(await web3.eth.getBalance(alice)); // Alice's ethereum balance.
        let gasCost = new BN(transaction.receipt.gasUsed); // The gas that was used to process the splitBetween transaction.

        console.log("\nInital Balance: " + aliceInitalBalance);
        console.log("\nGas Used: " + gasCost);
        console.log("\nOne Finney: " + new BN(web3.utils.toWei("1", "finney")))
        console.log("\nInital Balance minus 1 Finney minus gas: "+ aliceInitalBalance.sub(new BN(web3.utils.toWei("1", "finney"))).sub(gasCost) +"\n");
        console.log("\nAfter Split Balance: "+ aliceAfterSplitBalance +"\n");

        assert.strictEqual(
            aliceAfterSplitBalance, 
            aliceInitalBalance.sub(new BN(web3.utils.toWei("1", "finney"))).sub(gasCost),
            "Alice's balance did not go down by 1 finney plus gas."
        );
    });

    it("Bob and Carol should have equal in-contract balances of .5 finney right after the first 1 finney split.", async () => {
        let instance = await Splitter.deployed();
        let bobContractBalance = await instance.balances(bob);
        let carolContractBalance = await instance.balances(carol);
        assert.equal(bobContractBalance.toString(), web3.utils.toWei(".5", "finney"), "Bob's balance is wrong.");
        assert.equal(carolContractBalance.toString(), web3.utils.toWei(".5", "finney"), "Carol's balance is wrong.");
    });

    it("Bob should be able to withdraw his ether contract balance, his on-chain balance should increase, and his contract balance should go to zero.", async () => {
        let instance = await Splitter.deployed();
        let bobInitialBalance = await web3.eth.getBalance(bob);
        let transaction = await instance.withdraw( {from: bob} );
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