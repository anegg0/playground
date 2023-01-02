// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/BleedToken.sol";

contract BleedTokenTest is Test {
    Bleed bleed;

    function setUp() public {
        bleed = new Bleed();
    }

    function testName() public {
        assertEq(bleed.name(), "Bleed");
    }

    function testApprove() public {
        address addressToApprove = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
        assertEq(bleed.approve(addressToApprove, 1), true);
    }
}
