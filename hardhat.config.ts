import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tdly from '@tenderly/hardhat-tenderly'
import * as dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: {
        mnemonic: `${process.env.SEED}`,
      },
      chainId: 80001,
      gasPrice: 2000000000,
      gas: 10000000,
      gasMultiplier: 2,
    }
  },

  tenderly: {
    username: '',
    project: 'project',
    privateVerification: true,
  },
}

export default config;

tdly.setup({
  automaticVerifications: false,
})