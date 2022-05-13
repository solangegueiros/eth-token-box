// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20  {

    constructor(uint256 initialSupply) ERC20("My token", "MTO") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public pure override returns (uint8) {
        return 2;
    }
}