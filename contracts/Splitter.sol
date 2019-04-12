pragma solidity 0.5.7;

contract Splitter{
    
    address alice;
    address payable bob;
    address payable carol;
    
    event LogSetAddresses(address indexed whoCanSplit, address indexed whoGetsOneHalf, address indexed whoGetsOtherHalf);
    event LogSplit(uint amountToSplit, uint splitPortion);

    constructor(address setAlice, address payable setBob, address payable setCarol) public {
        // Niether Alice, Bob, nor Carol should be unset (or 0x).
        require(setAlice != address(0));
        require(setBob != address(0));
        require(setCarol != address(0));

        // not strictly necessary, but Alice, Bob, and Carol should probably be different entities.
        require(setAlice != setBob);
        require(setAlice != setCarol);
        require(setBob != setCarol);
        
        alice = setAlice;
        bob = setBob;
        carol = setCarol;
    }
    
    function splitBetween() public payable {
        require(msg.sender == alice);
        
        uint splitPortion = msg.value / 2;
        assert(splitPortion > 0);
        
        bob.transfer(splitPortion);
        carol.transfer(splitPortion);
        
        emit LogSplit(msg.value, splitPortion);
    }
}