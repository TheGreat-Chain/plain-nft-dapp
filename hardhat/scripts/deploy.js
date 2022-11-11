const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
 
  const singerzzContract = await ethers.getContractFactory("Singerzz");
  const deployedSingerzzContract = await singerzzContract.deploy(metadataURL, whitelistContract);
  console.log("S!ngerzz Contract Address : ", deployedSingerzzContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });