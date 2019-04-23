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
        let gasUsed = (new BN(transaction.receipt.gasUsed));
        let gasPrice = (new BN((await web3.eth.getTransaction(transaction.tx)).gasPrice));
        let gasCost = gasUsed.mul(gasPrice); // The gas that was used to process the splitBetween transaction.

        assert.strictEqual(
            aliceAfterSplitBalance.toString(), // ethreum address balance after split
            (aliceInitalBalance.sub(new BN(web3.utils.toWei("1", "finney"))).sub(gasCost)).toString(), // should equal inital balance minus transfered amount minus gs costs for transfer
            "Alice's balance did not go down by 1 finney plus gas."
        );
    });

    it("Bob and Carol should have equal in-contract balances of .5 finney right after the first 1 finney split.", async () => {
        let instance = await Splitter.deployed();
        let bobContractBalance = new BN(await instance.balances(bob));
        let carolContractBalance = new BN(await instance.balances(carol));
        assert.strictEqual(bobContractBalance.toString(), web3.utils.toWei(".5", "finney"), "Bob's balance is wrong.");
        assert.strictEqual(carolContractBalance.toString(), web3.utils.toWei(".5", "finney"), "Carol's balance is wrong.");
    });

    it("Bob should be able to withdraw his ether contract balance, his on-chain balance should increase, and his contract balance should go to zero.", async () => {
        let instance = await Splitter.deployed();
        let bobInitialBalance = new BN(await web3.eth.getBalance(bob));
        let bobInitialContractBalance = new BN(await instance.balances(bob));
        let transaction = await instance.withdraw( {from: bob} );
        let bobNewContractBalance = new BN(await instance.balances(bob));
        let bobNewBalance = new BN(await web3.eth.getBalance(bob));
        let gasUsed = new BN(transaction.receipt.gasUsed);
        let gasPrice = new BN((await web3.eth.getTransaction(transaction.tx)).gasPrice);
        let gasCost = gasUsed.mul(gasPrice); // The gas that was used to process the splitBetween transaction.

        assert.strictEqual(bobNewBalance.toString(), (bobInitialBalance.add(bobInitialContractBalance).sub(gasCost)).toString(), "Bob's new balance is not equal to initial balance, plus withdraw, minus gas.");
        assert.strictEqual(bobNewContractBalance.toString(), "0", "Bob's withdrawal wasn't complete.");
    });

    it("Should revert for an address attempting withdrawal that has a zero in-contract balance.", async () => {
        let instance = await Splitter.deployed();
        await truffleAssert.reverts(instance.withdraw( {from: nobody} ));
    });

});