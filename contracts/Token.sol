//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Token {
    string public name = "Atang Motloli Token";
    string public symbol = "AMT";
    uint256 public totalSupply = 1000000;
    address public owner;
    // Map the balances by address. 
    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    // Return the account of balances.
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
