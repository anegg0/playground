    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.6;

    /**
     *
     * Libraries *
     *
     */
    import "openzeppelin-contracts/access/Ownable.sol";
    import "openzeppelin-contracts/token/ERC20/IERC20.sol";
    import "openzeppelin-contracts/security/Pausable.sol";
    import "openzeppelin-contracts/utils/math/SafeMath.sol";

    /**
     * @title throttledWallet
     * @dev The throttledWallet contract has an owner address, and provides basic authorization control
     */
    contract ThrottledWallet is Ownable, Pausable {
        // The average amount of tokens that can be sent per block
        uint256 public refillRate;
        // The timestamp of the last transaction
        uint256 public lastTransaction;
        uint256 public lastTransaction;
        // Instance of ERC20 token;
        IERC20 public token;

        uint256 public _refillRate;
        /**
         * @dev maps addresses to a mapping
         */
        mapping(address => uint256) balances;
        /**
         * @dev maps addresses to a mapping
         */
        mapping(address => mapping(address => uint256)) allowed;

        event transfer(address indexed account, uint256 amount);

        using SafeMath for uint256;

        /**
         * @dev The constructor sets the token, maxLimit and refillRate
         */
        constructor() public {
            refillRate = 1000;
            lastTransaction = 0;
        }

        function totalSupply() public view returns (uint256 contractTotalSupply) {
            contractTotalSupply = address(this).balance;
            return contractTotalSupply;
        }

        function balanceOfTokenOwner(
            address tokenOwner
        ) public view returns (uint256) {
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
        function deposit(
            address account,
            uint256 amount
        ) public payable returns (bool success) {
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
            balance = token.balanceOf(msg.sender);
            return balance;
        }

        // The spend function allows the wallet to spend tokens within the rate limit

        function Withdraw(uint256 _amount) public {
            require(balances[msg.sender] >= _amount, "Insufficient Balance");
            require(
                block.timestamp >= lastTransaction + refillRate,
                "The maxLimit has not passed"
            );
            balances[msg.sender] -= _amount;
            (bool sent, ) = msg.sender.call{value: _amount}("");
            require(sent, "Failed to send Ether");
            lastTransaction = block.timestamp;
        }

        function add(uint256 a, uint256 b) internal pure returns (uint256) {
            uint256 c = a + b;
            assert(c >= a);
            return c;
        }

        function pause() public onlyOwner {
            _pause();
        }

        function unpause() public onlyOwner {
            _unpause();
        }
    }
