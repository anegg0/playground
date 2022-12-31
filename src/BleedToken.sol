// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "openzeppelin-contracts/token/ERC20/ERC20.sol";
import "openzeppelin-contracts/access/Ownable.sol";

contract Bleed is ERC20, Ownable {

    constructor() ERC20("Bleed", "BLD") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

        token.balanceOf(owner);
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
