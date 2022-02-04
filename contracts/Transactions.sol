//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    uint256 TransactionsCount;

    event Transfer(
        address sender,
        address reciever,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable reciever,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        TransactionsCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                reciever,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            reciever,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return TransactionsCount;
    }
}
