pragma solidity 0.5.7;

import "./Ownable.sol";

contract Pausable is Ownable{

    int public pauseLevel; // get the getter for free
     
    event PauseLevelChanged(address indexed whoChanged, int pauseLevel);

    constructor () internal {
        pauseLevel = 0;
        emit PauseLevelChanged(msg.sender, pauseLevel);
    }

    function setPauseLevel(int runningState) public onlyOwner {
         emit PauseLevelChanged(msg.sender, runningState);
         pauseLevel = runningState;
    }

    modifier hardPausable() {
        require(pauseLevel < 2, "Pausable, 26: Can only execute if contract is not hard-paused.");
        _;
    }

    modifier softPausable() {
        require( pauseLevel < 1, "Pausable, 31: Can only execute if contract is not paused." );
        _;
    }
}