//https://eth-ropsten.alchemyapi.io/v2/FKeIk-s_ASeX8zLcIId8EqyyxTJfjmn5

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FKeIk-s_ASeX8zLcIId8EqyyxTJfjmn5',
      accounts: ['c058d4a402bf7100c538566269604c21a34f2ded7697f24dec4e4a19b2cba960']
    }
  }
}