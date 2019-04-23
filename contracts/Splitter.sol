pragma solidity 0.5.7;

import "./SafeMath.sol";

contract Splitter{

    using SafeMath for uint;

    mapping (address => uint) public balances;
    
    address payable owner;
    
    event LogSetOwner(address indexed whoIsOwner);
    event LogSplit(address indexed whoDidSplit, uint amountToSplit, address indexed splitToAccount1, address indexed splitToAccount2);
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
        
        // add half of the sent amount to each provided account
        balances[splitToAccount1] = balances[splitToAccount1].add(msg.value / 2);
        balances[splitToAccount2] = balances[splitToAccount2].add(msg.value / 2);

        // if there is a remainder (an odd wei), add it to the account of the sender.
        balances[msg.sender] = balances[msg.sender].add(msg.value % 2);
        
        emit LogSplit(msg.sender, msg.value, splitToAccount1, splitToAccount2);
    }

    function withdraw() public{

        require( balances[msg.sender] > 0, "Nothing available to withdraw." );
      
        uint withdrawable = balances[msg.sender];

        // optimistically mark this as transferred, if it fails this will be reverted anyway
        balances[msg.sender] = 0;
        msg.sender.transfer(withdrawable);

        emit LogWithdrawal(msg.sender, withdrawable);
    }
}