    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.6;

    /*************
     * Libraries *
     *************/
    import "openzeppelin-contracts/access/Ownable.sol";
    import "openzeppelin-contracts/token/ERC20/IERC20.sol";
    import "openzeppelin-contracts/security/Pausable.sol";

contract throttledWallet is Ownable, Pausable {
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
        constructor(uint256 _maxLimit,uint256 _refillRate,uint256 _lastTransaction) {
        maxLimit=_maxLimit;
        refillRate=_refillRate;
        lastTransaction=_lastTransaction;
        }

    function totalSupply() public view returns (uint256) {
	    return totalSupply_;
    }

    function balanceOf(address tokenOwner) public view returns (uint) {
        return balances[tokenOwner];
    }

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
                token.balanceOf(address(this)) == token.balanceOf(address(this)) + amount;
                emit transfer(account, amount);
                return true;
            } else {
                return false;
            }
        }

        function walletBalance() public view returns (uint256 balance) {
            balance = token.balanceOf(msg.sender);
            return balance;
        }

        // The spend function allows the wallet to spend tokens within the rate limit
        function spend(address payable _recipient, uint256 _amount) public payable {
            require(
                block.timestamp >= lastTransaction + refillRate,
                "The maxLimit has not passed"
            );

            require(
                address(this).balance >= lastTransaction + refillRate,
                "The maxLimit has not passed"
            );
            uint balance = _recipient.balance;
            balance = balance + _amount;
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
