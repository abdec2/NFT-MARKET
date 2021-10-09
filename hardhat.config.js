require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privatekey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    }, 
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/a966a4569761414caecf14ee3453d6fd`, 
      accounts: [privatekey]
    }, 
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/a966a4569761414caecf14ee3453d6fd`, 
      accounts: [privatekey]
    }
  },
  solidity: "0.8.4",
};
