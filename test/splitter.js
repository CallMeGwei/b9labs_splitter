const Splitter = artifacts.require("Splitter");
const truffleAssert = require("truffle-assertions");

const { toBN, toWei } = web3.utils;

let instance;

beforeEach(async () => {
    instance = await Splitter.new();
});

contract("Splitter", async accounts  => {

    // assigning variables to a few of the provided accounts in order
    const [ alice, bob, carol, nobody ] = accounts;
    
    it("Alice's account should be debited by one finney.", async () => {
        let aliceInitalBalance = new toBN(await web3.eth.getBalance(alice));  // Alice's ethereum balance.
        let txObject = await instance.splitBetween( bob, carol, {from: alice, value: toWei("1", "finney")} ); // Alice sends 1 finney to the contract.
        let aliceAfterSplitBalance = new toBN(await web3.eth.getBalance(alice)); // Alice's ethereum balance.
        let gasUsed = (new toBN(txObject.receipt.gasUsed));
        let gasPrice = (new toBN((await web3.eth.getTransaction(txObject.tx)).gasPrice));
        let gasCost = gasUsed.mul(gasPrice); // The gas that was used to process the splitBetween transaction.

        assert.strictEqual(
            aliceAfterSplitBalance.toString(), // ethreum address balance after split
            (aliceInitalBalance.sub(new toBN(toWei("1", "finney"))).sub(gasCost)).toString(), // should equal inital balance minus transfered amount minus gs costs for transfer
            "Alice's balance did not go down by 1 finney plus gas."
        );
    });

    it("Bob and Carol should have equal in-contract balances of .5 finney right after the first 1 finney split.", async () => {
        let txObject = await instance.splitBetween( bob, carol, {from: alice, value: toWei("1", "finney")} ); // Alice sends 1 finney to the contract.
        let bobContractBalance = new toBN(await instance.balances(bob));
        let carolContractBalance = new toBN(await instance.balances(carol));
        assert.strictEqual(bobContractBalance.toString(), toWei(".5", "finney"), "Bob's balance is wrong.");
        assert.strictEqual(carolContractBalance.toString(), toWei(".5", "finney"), "Carol's balance is wrong.");
    });

    it("Bob should be able to withdraw his ether contract balance, his on-chain balance should increase, and his contract balance should go to zero.", async () => {
        let txObject = await instance.splitBetween( bob, carol, {from: alice, value: toWei("1", "finney")} ); // Alice sends 1 finney to the contract.
        let bobInitialBalance = new toBN(await web3.eth.getBalance(bob));
        let bobInitialContractBalance = new toBN(await instance.balances(bob));
        let transaction = await instance.withdraw( {from: bob} );
        let bobNewContractBalance = new toBN(await instance.balances(bob));
        let bobNewBalance = new toBN(await web3.eth.getBalance(bob));
        let gasUsed = new toBN(transaction.receipt.gasUsed);
        let gasPrice = new toBN((await web3.eth.getTransaction(transaction.tx)).gasPrice);
        let gasCost = gasUsed.mul(gasPrice); // The gas that was used to process the splitBetween transaction.

        assert.strictEqual(bobNewBalance.toString(), (bobInitialBalance.add(bobInitialContractBalance).sub(gasCost)).toString(), "Bob's new balance is not equal to initial balance, plus withdraw, minus gas.");
        assert.strictEqual(bobNewContractBalance.toString(), "0", "Bob's withdrawal wasn't complete.");
    });

    it("Should revert for an address attempting withdrawal that has a zero in-contract balance.", async () => {
        await truffleAssert.reverts(instance.withdraw( {from: nobody} ));
    });

});