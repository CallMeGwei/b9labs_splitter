pragma solidity 0.5.7;

import "./SafeMath.sol";
import "./OwnablePausable.sol";

contract Splitter is OwnablePausable{

    using SafeMath for uint;

    mapping (address => uint) public balances;
    
    event LogSplit(address indexed whoDidSplit, uint amountToSplit, address indexed splitToAccount1, address indexed splitToAccount2);
    event LogWithdrawal(address indexed whoWithdrew, uint amountWithdrawn);
    
    function splitBetween(address splitToAccount1, address splitToAccount2) public payable onlyIfRunning {

        // some value must have been sent to split
        require ( msg.value > 0, "Splitter, 19: Some ether must be sent to be split." );

        // Neither provided account should be unset (or 0x).
        require( splitToAccount1 != address(0), "Splitter, 22: Cannot split to the zero address.");
        require( splitToAccount2 != address(0), "Splitter, 23: Cannot split to the zero address.");

        // Not strictly necessary, but provided accounts should probably be different addresses.
        require( splitToAccount1 != splitToAccount2, "Splitter, 26: Accounts to be split between must be different." );

        // amount to be distributed to each of the supplied accounts
        uint half = msg.value / 2;
        
        // add half of the sent amount to each provided account
        balances[splitToAccount1] = balances[splitToAccount1].add(half);
        balances[splitToAccount2] = balances[splitToAccount2].add(half);

        // if there is a remainder (an odd wei), add it to the account of the sender.
        balances[msg.sender] = balances[msg.sender].add(msg.value % 2);
        
        emit LogSplit(msg.sender, msg.value, splitToAccount1, splitToAccount2);
    }

    function withdraw() public onlyIfRunning {

        uint balance = balances[msg.sender];

        require( balance > 0, "Splitter, 45: Nothing available to withdraw." );

        // optimistically mark this as transferred, if it fails this will be reverted anyway
        balances[msg.sender] = 0;
        emit LogWithdrawal(msg.sender, balance);

        msg.sender.transfer(balance);
    }
}