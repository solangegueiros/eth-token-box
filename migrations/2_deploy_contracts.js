var Token = artifacts.require("Token");

const initialSupply = 100 * 2^10

module.exports = function(deployer) {
  deployer.deploy(Token, initialSupply);
};
