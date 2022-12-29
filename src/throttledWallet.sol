    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.6;

    /*************
     * Libraries *
     *************/
    import "@openzeppelin/contracts/access/Ownable.sol";
    import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

    // This contract is a rate-limited wallet
    contract throttledWallet is Ownable {
        /*************
         * Variables *
         *************/

        // // The address of the token that the wallet custodies
        // IERC20 token;
        // The amount of time that must pass between transactions
        uint256 public maxLimit;
        // The average amount of tokens that can be sent per block
        uint256 public refillRate;
        // The timestamp of the last transaction
        uint256 public lastTransaction;
        // Instance of ERC20 token;
        IERC20 token;

        event transfer(address indexed account, uint256 amount);

        // The constructor sets the token, maxLimit and refillRate

        modifier checkAllowance(uint256 amount) {
            require(token.allowance(msg.sender, address(this)) >= amount, "Error");
            _;
        }

        modifier checkBalance(uint256 amount) {
            require(token.balanceOf(msg.sender) >= amount, "Error");
            _;
        }

        // The deposit function allows the wallet to receive tokens from any address
        function deposit(address account, uint256 amount)
            public
            payable
            returns (bool success)
        {
            if (token.allowance(msg.sender, address(this)) >= amount) {
                token.balanceOf(address(this)) ==
                    token.balanceOf(address(this)) + amount;
                emit transfer(account, amount);
                return true;
            } else {
                return false;
            }
        }

        function walletBalance() public view returns (uint256 balance) {
            balance = token.balanceOf(owner);
            return balance;
        }

        // The spend function allows the wallet to spend tokens within the rate limit
        function spend(address payable recipient, uint256 amount) external {
            require(
                block.timestamp >= lastTransaction + refillRate,
                "The maxLimit has not passed"
            );

            require(
                address(this).balance >= lastTransaction + refillRate,
                "The maxLimit has not passed"
            );
            // recipient.send{value: msg.value}(_x);
            // Update the timestamp of the last transaction
            lastTransaction = block.timestamp;
        }

        function pause() public onlyOwner {
            _pause();
        }

        function unpause() public onlyOwner {
            _unpause();
        }
    }
