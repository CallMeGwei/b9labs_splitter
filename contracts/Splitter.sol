pragma solidity 0.5.7;

contract Splitter{
    
    address alice;
    address payable bob;
    address payable carol;
    
    event LogSplit(address indexed who, uint amountToSplit, uint splitPortion);
    
    constructor(address setAlice, address payable setBob, address payable setCarol) public {
        // not strictly necessary, but Alice, Bob, and Carol should probably be different entities.
        require((setAlice != setBob) && (setAlice != setCarol) && (setBob != setCarol));
        
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
        
        emit LogSplit(alice, msg.value, splitPortion);
    }
}