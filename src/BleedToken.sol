// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "openzeppelin-contracts/token/ERC20/ERC20.sol";
import "openzeppelin-contracts/access/Ownable.sol";

contract BleedToken is ERC20, Ownable {
    constructor() ERC20("Bleed", "BLD") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }
}
