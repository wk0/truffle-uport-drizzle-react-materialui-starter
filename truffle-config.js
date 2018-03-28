const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ganache_gui: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
    },
    "rinkeby-infura": {
      provider: () => new HDWalletProvider("", `https://rinkeby.infura.io/${process.env.infuraKey}`),
      network_id: 4,
      gas: 4700000
    },
  }
};
