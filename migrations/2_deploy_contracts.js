var Token = artifacts.require("Token");

const decimals = 2;

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Token);
  token = await Token.deployed();
  console.log("token.address", token.address, "\n\n");  
};
