pragma solidity 0.5.7;

contract Splitter{

    uint bobBalance;
    uint carolBalance;
    
    address payable alice;
    address payable bob;
    address payable carol;
    
    event LogSetAddresses(address indexed whoCanSplit, address indexed whoGetsOneHalf, address indexed whoGetsOtherHalf);
    event LogSplit(uint amountToSplit, uint splitPortion);
    event LogWithdrawal(address indexed whoWithdrew, uint amountWithdrawn);

    constructor(address payable setAlice, address payable setBob, address payable setCarol) public {
        // Niether Alice, Bob, nor Carol should be unset (or 0x).
        require(setAlice != address(0));
        require(setBob != address(0));
        require(setCarol != address(0));

        // Not strictly necessary, but Alice, Bob, and Carol should probably be different entities.
        require(setAlice != setBob);
        require(setAlice != setCarol);
        require(setBob != setCarol);
        
        // save the addresses for later
        alice = setAlice;
        bob = setBob;
        carol = setCarol;

        emit LogSetAddresses(alice, bob, carol);
    }
    
    function splitBetween() public payable {
        require(msg.sender == alice);
        
        uint splitPortion = msg.value / 2;
        assert(splitPortion > 0);
        
        bobBalance += splitPortion;
        carolBalance += splitPortion;
        
        emit LogSplit(msg.value, splitPortion);
    }

    function withdraw() public{
        if (msg.sender == bob){
            uint bobBalanceBeforeWithdraw = bobBalance;

            bob.transfer(bobBalance);
            bobBalance = 0;

            emit LogWithdrawal(bob, bobBalanceBeforeWithdraw);

        } else if (msg.sender == carol){
            uint carolBalanceBeforeWithdraw = carolBalance;

            carol.transfer(carolBalance);
            carolBalance = 0;

            emit LogWithdrawal(carol, carolBalanceBeforeWithdraw);
            
        } else {
            revert();
        }
    }
}