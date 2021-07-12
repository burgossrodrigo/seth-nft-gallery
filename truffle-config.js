const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
	
	contracts_build_directory: './app/src/contracts',
	
	plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: 'VPBWF48NC149A1VJA5MDHUNJK74N1KJB2S'
  },
    sourceFetchers: ["bscscan"],
	
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
	production: true,
      timeoutBlocks: 1000,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `wss://bsc-ws-node.nariox.org:443`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  

  
  rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/f9b60e17f9254e9cb8fd8bc1bd6cc62f`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    enableTimeouts: false
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: ">=0.4.21 <0.9.0", // A version or constraint - Ex. "^0.5.0"
    }
  }
}