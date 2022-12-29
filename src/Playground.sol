// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Playground {
    uint public time;
    address payable public owner;

    event Withdrawal(uint amount, uint when);
uint number;
    constructor(uint _number) payable {

        _number = number;
        owner = payable(msg.sender);
    }

    function clock() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        time = block.timestamp;

    }
}
