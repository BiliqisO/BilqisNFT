import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: process.env.URL,
      //@ts-ignore
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};

export default config;
