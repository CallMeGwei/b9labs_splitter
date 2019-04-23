pragma solidity 0.5.7;

import "./SafeMath.sol";

contract Splitter{

    using SafeMath for uint;

    // balances will be stored as 28 digit values
    // up to 27 digits for ether and 15digit for parts of wei
    uint numDecimals = 1;

    mapping (address => uint) public balances;
    
    address payable owner;
    
    event LogSetOwner(address indexed whoIsOwner);
    event LogSplit(address indexed whoDidSplit, address indexed splitToAccount1, address indexed splitToAccount2, uint amountToSplit, uint splitPortion);
    event LogWithdrawal(address indexed whoWithdrew, uint amountWithdrawn);

    constructor() public {

        // save address of contract deployer for later, just in case
        owner = msg.sender;

        emit LogSetOwner(owner);
    }
    
    function splitBetween(address splitToAccount1, address splitToAccount2) public payable {

        // Neither provided account should be unset (or 0x).
        require( splitToAccount1 != address(0) );
        require( splitToAccount2 != address(0) );

        // Not strictly necessary, but provided accounts should probably be different addresses.
        require( splitToAccount1 != splitToAccount2 );
        
        uint amountToSplit = msg.value.mul(10 ** numDecimals);
        
        balances[splitToAccount1] = balances[splitToAccount1].add(amountToSplit / 2);
        balances[splitToAccount2] = balances[splitToAccount2].add(amountToSplit / 2);
        
        emit LogSplit(msg.sender, splitToAccount1, splitToAccount2, msg.value, amountToSplit / 2);
    }

    function withdraw() public{

        require( balances[msg.sender] > 0, "Nothing available to withdraw." );

        uint withdrawable = balances[msg.sender].div(10 ** numDecimals);
        
        // optimistically mark this as transferred, if it fails this will be reverted anyway
        balances[msg.sender] = balances[msg.sender].sub(withdrawable.mul(10 ** numDecimals));
        msg.sender.transfer(withdrawable);

        emit LogWithdrawal(msg.sender, withdrawable);
    }
}