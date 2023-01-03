// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/ThrottledWallet.sol";
import "../src/BleedToken.sol";

abstract contract HelperContract {
    BleedToken bleedtoken;

    // constructor() ERC20("Bleed", "BLD") {
    //     _mint(msg.sender, 100 * 10 ** decimals());
    // }
}

contract ThrottledWalletTest is Test, HelperContract {
    ThrottledWallet throttledwallet;

    // constructor() {
    //     refillRate = 1000;
    //     lastTransaction = 0;
    // }

    function setUp() public {
        bleedtoken = new BleedToken();
        throttledwallet = new ThrottledWallet();
    }

    function testDeposit() public {
        address account = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
        uint256 amount = 1;
        assertEq(throttledwallet.deposit(account, amount), true);
    }
}
