require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privatekey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    }, 
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`, 
      accounts: [privatekey]
    }, 
    mainnet:{
      url: `https://polygon-rpc.com/`, 
      accounts: [privatekey]
    }
  },
  solidity: "0.8.4",
};
