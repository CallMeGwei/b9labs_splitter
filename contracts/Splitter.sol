pragma solidity 0.5.7;

import "./SafeMath.sol";
import "./Ownable.sol";

contract Splitter is Ownable{

    using SafeMath for uint;

    mapping (address => uint) public balances;
    
    event LogSplit(address indexed whoDidSplit, uint amountToSplit, address indexed splitToAccount1, address indexed splitToAccount2);
    event LogWithdrawal(address indexed whoWithdrew, uint amountWithdrawn);
    
    function splitBetween(address splitToAccount1, address splitToAccount2) public payable {

        // Neither provided account should be unset (or 0x).
        require( splitToAccount1 != address(0) );
        require( splitToAccount2 != address(0) );

        // Not strictly necessary, but provided accounts should probably be different addresses.
        require( splitToAccount1 != splitToAccount2 );

        // amount to be distributed to each of the supplied accounts
        uint half = msg.value / 2;
        
        // add half of the sent amount to each provided account
        balances[splitToAccount1] = balances[splitToAccount1].add(half);
        balances[splitToAccount2] = balances[splitToAccount2].add(half);

        // if there is a remainder (an odd wei), add it to the account of the sender.
        balances[msg.sender] = balances[msg.sender].add(msg.value % 2);
        
        emit LogSplit(msg.sender, msg.value, splitToAccount1, splitToAccount2);
    }

    function withdraw() public{

        uint balance = balances[msg.sender];

        require( balance > 0, "Nothing available to withdraw." );

        // optimistically mark this as transferred, if it fails this will be reverted anyway
        balances[msg.sender] = 0;
        msg.sender.transfer(balance);

        emit LogWithdrawal(msg.sender, balance);
    }
}