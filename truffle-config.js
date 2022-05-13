const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const mnemonic = process.env.MNEMONIC
const infuraKey = process.env.INFURA_KEY

module.exports = {
  networks: {
    develop: {
      port: 8545,
      network_id: "1337",
    },
    goerli: {
      //https://twitter.com/Mudit__Gupta/status/1378979226590670852
      provider: () => new HDWalletProvider({
        mnemonic: { phrase: mnemonic },
        //https://twitter.com/Mudit__Gupta/status/1378979226590670852
        //providerOrUrl: 'https://rpc.goerli.mudit.blog/',
        providerOrUrl: 'https://goerli-rpc.mudit.blog/',  //Only for students
      }),
      network_id: 5,
      skipDryRun: true,
    },
    kovan: {
      provider: () => new HDWalletProvider({
        mnemonic: { phrase: mnemonic },
        providerOrUrl: `https://kovan.infura.io/v3/` + infuraKey,
      }),
      network_id: 42,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },     
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",
    }
  }
}