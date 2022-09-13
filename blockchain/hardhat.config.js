require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    /* mumbai: {
       // Infura
       // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
       url: "https://rpc-mumbai.matic.today",
       accounts: [privateKey]
     },
     matic: {
       // Infura
       // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
       url: "https://rpc-mainnet.maticvigil.com",
       accounts: [privateKey]
     }*/
    rinkeby: {
      // Infura
      chainId: 4,
      url: "https://rinkeby.infura.io/v3/0f723202c51b47f5be67431d2766be83",
      accounts: ["ef61d0fcf38c8fb3dfa0bd02c7b6dab95eaf06dbd8674ec6038c150338c68e15"]
    }

  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
