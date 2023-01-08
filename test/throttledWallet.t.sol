// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/ThrottledWallet.sol";
import "../src/BleedToken.sol";

abstract contract HelperContract {
    BleedToken bleedtoken;
}

contract ThrottledWalletTest is Test, HelperContract {
    ThrottledWallet throttledwallet;

    function setUp() public {
        bleedtoken = new BleedToken();
        throttledwallet = new ThrottledWallet(address(bleedtoken));
    }

    function testTransfer() public {
        address addressToTransferTo = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
        assertEq(bleedtoken.transfer(addressToTransferTo, 15), true);
    }

    function testApprove() public {
        address addressToApprove = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
        assertEq(bleedtoken.approve(addressToApprove, 15), true);
    }

    function testTransferFrom() public {
        address owner = 0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496;
        address spender = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
        address receiver = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;
        bleedtoken.transfer(owner, 50);
        hoax(owner);
        bleedtoken.approve(spender, 10);
        hoax(spender);
        assertEq(bleedtoken.transferFrom(owner, receiver, 2), true);
    }
}
