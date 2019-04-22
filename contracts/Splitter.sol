pragma solidity 0.5.7;

import "./SafeMath.sol";

contract Splitter{

    using SafeMath for uint;

    // balances will be stored as 32 digit values
    // up to 27 digits for ether and 5 digits for decimal portion
    uint numDecimals = 5;

    mapping (address => uint) public balances;
    
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

        // only Alice can split
        require(msg.sender == alice);
        
        uint amountToSplit = msg.value.mul(10 ** numDecimals);
        
        balances[bob] = balances[bob].add(amountToSplit / 2);
        balances[carol] = balances[carol].add(amountToSplit / 2);
        
        emit LogSplit(msg.value, amountToSplit / 2);
    }

    function withdraw() public{

        require( balances[msg.sender] > 0, "Nothing available to withdraw.");
        require( msg.sender == bob || msg.sender == carol );

        uint withdrawable = balances[msg.sender].div(10 ** numDecimals);
        
        // optimistically mark this as transferred, if it fails this will be reverted anyway
        balances[msg.sender] = balances[msg.sender].sub(withdrawable.mul(10 ** numDecimals));
        msg.sender.transfer(withdrawable);

        emit LogWithdrawal(msg.sender, withdrawable);

    }
}