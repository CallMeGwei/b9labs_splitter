pragma solidity 0.5.7;

import "./Ownable.sol";
import "./Pausable.sol";

contract OwnablePausable is Ownable, Pausable{

    function renounceOwnership() public onlyOwner onlyIfRunning {
        super.renounceOwnership();
    }

    function transferOwnership(address newOwner) public onlyOwner onlyIfRunning {
        super.transferOwnership(newOwner);
    }

}