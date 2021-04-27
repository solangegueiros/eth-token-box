var Token = artifacts.require("Token");

const decimals = 2;
const initialSupply = 100 * 10 ** decimals;

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Token, initialSupply);
  token = await Token.deployed();
  console.log("token.address", token.address, "\n\n");  
};
