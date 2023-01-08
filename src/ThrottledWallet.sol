    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.6;

    import "openzeppelin-contracts/access/Ownable.sol";
    import "openzeppelin-contracts/token/ERC20/IERC20.sol";
    import "openzeppelin-contracts/security/Pausable.sol";
    import "openzeppelin-contracts/utils/math/SafeMath.sol";
    import "openzeppelin-contracts/token/ERC20/utils/SafeERC20.sol";

    /**
     * @title throttledWallet
     * @dev The throttledWallet contract has an owner address, and provides basic authorization control
     */
    contract ThrottledWallet is Ownable, Pausable {
        using SafeMath for uint256;
        using SafeERC20 for IERC20;

        mapping(address => uint256) balances;
        mapping(address => mapping(address => uint256)) allowed;
        IERC20 public bleed;
        mapping(address => mapping(address => uint)) public allowance;
        event transfer(address indexed account, uint256 amount);

        using SafeMath for uint256;

        constructor(address _bleed) {
            uint256 refillRate = 1000;
            uint256 lastTransaction = 0;
            bleed = IERC20(_bleed);
        }

        // function transferFrom(
        //     address from,
        //     address to,
        //     uint256 amount
        // ) public virtual override returns (bool) {
        //     address spender = _msgSender();
        //     _spendAllowance(from, spender, amount);
        //     _transfer(from, to, amount);
        //     return true;
        // }

        function totalSupply() public view returns (uint256 contractTotalSupply) {
            contractTotalSupply = address(this).balance;
            return contractTotalSupply;
        }

        function walletBalance() public view returns (uint256 balance) {
            balance = bleed.balanceOf(msg.sender);
            return balance;
        }

        function withdraw(uint256 amount) public {
            require(amount > 0, "Cannot withdraw 0 or negative amounts");
            require(bleed.balanceOf(msg.sender) >= amount, "Insufficient balance");
            bleed.safeTransfer(msg.sender, amount);
        }

        function pause() public onlyOwner {
            _pause();
        }

        function unpause() public onlyOwner {
            _unpause();
        }
    }
