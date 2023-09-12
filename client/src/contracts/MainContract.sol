// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CertiChain {
    struct User {
        string name;
        string dob;
        string aadhaar;
        string[] certificates;
        bool userExists;
    }

    mapping(address => User) users;

    function addUserDetails(
        string memory _name,
        string memory _dob,
        string memory _aadhaar
    ) public {
        users[msg.sender].name = _name;

        users[msg.sender].dob = _dob;

        users[msg.sender].aadhaar = _aadhaar;

        users[msg.sender].userExists = true;
    }

    function addCertificates(string memory certificateTokenAddress) public {
        require(
            users[msg.sender].userExists == true,
            "User Details not available"
        );

        users[msg.sender].certificates.push(certificateTokenAddress);
    }

    function getName() public view returns (string memory) {
        return users[msg.sender].name;
    }

    function getDob() public view returns (string memory) {
        return users[msg.sender].dob;
    }

    function getAadhaar() public view returns (string memory) {
        return users[msg.sender].aadhaar;
    }

    function getCertificates() public view returns (string[] memory) {
        return users[msg.sender].certificates;
    }

    function userExists() public view returns (bool) {
        return users[msg.sender].userExists;
    }
}
