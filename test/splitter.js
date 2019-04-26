const Splitter = artifacts.require("Splitter");
const truffleAssert = require("truffle-assertions");

const { toBN, toWei } = web3.utils;

contract("Splitter", async accounts  => {

    let instance;

    beforeEach(async () => {
        instance = await Splitter.new( {from: alice} );
    });

    // assigning variables to a few of the provided accounts in order
    const [ alice, bob, carol, nobody ] = accounts;
    const zero = "0x0000000000000000000000000000000000000000";

    it("Should revert for an address attempting to split between addresses where one is the zero address", async () => {
        await truffleAssert.reverts(instance.splitBetween( bob, zero, {from: alice} ));
        await truffleAssert.reverts(instance.splitBetween( zero, carol, {from: alice} ));
    });

    it("Should revert if any ether is sent to the contract outside of a function call.", async () => {
        await truffleAssert.reverts(web3.eth.sendTransaction( {to: instance.address, from: alice, value: toWei("1", "finney") } ));
    });
    
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

    it("Should revert for an address attempting to pause that is not the owner.", async () => {
        await truffleAssert.reverts(instance.setRunning( false, {from: nobody} ));
    });

    it("Should revert for an address attempting to transferOwnership that is not the owner.", async () => {
        await truffleAssert.reverts(instance.transferOwnership( nobody, {from: nobody} ));
    });

    it("Owner should be able to pause and unpause things.", async () => {
        let isRunningInitially = await instance.isRunning();
        assert.isTrue( isRunningInitially, "Initally, contract is paused and shouldn't be." );
        let txObject = await instance.setRunning(false, {from: alice} );
        let isRunningLater = await instance.isRunning();
        assert.isFalse( isRunningLater, "Contract running state was not updated properly." );
        let txObject2 = await instance.setRunning(true, {from: alice} );
        let isRunningFinally = await instance.isRunning();
        assert.isTrue( isRunningFinally, "Finally, contract is paused and shouldn't be." );
    });

    it("Owner should not be able to transfer ownership if contract is paused.", async () => {
        let txObject = await instance.setRunning(false, {from: alice} );
        await truffleAssert.reverts(instance.transferOwnership( bob, {from: alice} ));
    });

    it("Owner should be able to transfer ownership if contract is running.", async () => {
        let txObject = instance.transferOwnership( bob, {from: alice} );
        assert.equal( bob, await instance.owner(), "Owner should be Bob." );
    });

});