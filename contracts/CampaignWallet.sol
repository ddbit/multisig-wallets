pragma solidity >=0.8 <0.9.0;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CampaignWallet{

    //the erc20 asset used to fund the wallet, ie. usdc
    address public asset;

    //the min target to be hit
    uint256 public target;

    //the max target to be hit
    uint256 public maxCap;

    //the deadline to reach the target
    uint256 public deadline;


    function deposit(uint256 _amount) public returns (bool){
        require(IERC20(asset).allowance(msg.sender, address(this)) >= _amount);
        return false;
    }


}