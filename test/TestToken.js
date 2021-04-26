const Token = artifacts.require("./Token.sol");

const name = 'My token';
const symbol = 'MTO';
const decimals = 2;
const totalSupply = 1000 * 10 ** decimals;
const amount = 100 * 10 ** decimals;

contract("Token", accounts => {

  let token;

  beforeEach('test', async () => {
    token = await Token.new(totalSupply);
  });
  
  describe('Constructor', () => {

    it("has symbol", async () => {
      const response = await token.symbol();
      assert.equal(response, symbol, 'wrong symbol');
    });

    it("has initial supply", async () => {
      const response = await token.totalSupply();
      assert.equal(response, totalSupply, 'initial supply error');
    });
  });

  describe('Transfer', () => {
    it('check balance after transfer', async () => {
      var balance2before = await token.balanceOf(accounts[2]);
      await token.transfer(accounts[2], amount, { from: accounts[0] })
      var balance2after = await token.balanceOf(accounts[2]);
      assert.equal(Number(balance2before + amount), Number(balance2after));
    });
  });

});