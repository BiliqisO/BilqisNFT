// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint  tokenId;
    // string  tokenURI;
    constructor(string memory _tokenURI) ERC721("ProofOfLove", "PoF") {
        tokenId = 1;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        
    }
    
}