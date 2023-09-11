import { ethers } from "hardhat";

async function main() {
  const TokenURI: any = "ipfs://QmdH6LKJtPkhH3DvCjofAAidZqbenFWKhD93DvcoRi5Swu";

  const Nft = await ethers.deployContract("NFT", [TokenURI]);

  await Nft.waitForDeployment();

  console.log(` deployed to ${Nft.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
