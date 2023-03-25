require("@nomicfoundation/hardhat-toolbox");



module.exports={
  solidity: '0.8.2',
  networks:{
    goerli:{
      url:'8Af-B8oBaHhtQutV71K_0GkZmBApDaT5',
      accounts:['c76e17c2e5b3e72ba147702e922a86dcf5fa07b4918c1498a8d066e8aa837ea3']
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/22b7fcaf26124152bc7436c894fd92be`,
      accounts:['c76e17c2e5b3e72ba147702e922a86dcf5fa07b4918c1498a8d066e8aa837ea3']
    },
  }
}