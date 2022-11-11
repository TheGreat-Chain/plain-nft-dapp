/**
 * File : IWhitelist.sol
 * 
 * @dev Interface for Whitelist.sol
 * 
 * Making an interface instead of inheriting a contract has advantages :
 * - Cleaner architecture (e.g : Dependency inversion principle)
 * - Saves gas as we can isolate a part of the whole contract
 * 
 */

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IWhitelist {
    function whitelistedAddresses(address) external view returns (bool);
}