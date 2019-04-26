pragma solidity 0.5.7;

import "./Ownable.sol";

contract Pausable is Ownable{

    bool private _isRunning;

    event RunningStatusChanged(address indexed whoChanged, bool isRunning);

    constructor () internal {
        _isRunning = true;
        emit RunningStatusChanged(msg.sender, true);
    }

    function isRunning() public view returns (bool) {
        return _isRunning;
    }

    function setRunning(bool runningState) public onlyOwner {
         emit RunningStatusChanged(msg.sender, runningState);
         _isRunning = runningState;
    }

    modifier onlyIfRunning() {
        require(_isRunning, "Pausable, 26: Can only execute if contract is not paused.");
        _;
    }
}