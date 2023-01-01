// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/BleedToken.sol";

contract TokenTest is Test {
    Bleed t;

    function setUp() public {
        t = new Bleed();
    }

    function testName() public {
        assertEq(t.name(), "Bleed");
    }
}
