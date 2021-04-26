# Ethereum Truffle Token Box

Truffle box configured to create an ERC20 token using Open Zeppelin smart contracts library and deploy on Görli Ethereum testnet network.

#### Updated 2021
- Open Zeppelin smart contracts 4.0.0 
- Solidity 0.8.4

#### Tutorials

- English:
[Using Truffle Sol token box](https://ethereum.solange.dev/#/en/truffle/box-token)
- Español: 
[Usando Truffle Sol token box](https://ethereum.solange.dev/#/es/truffle/box-token)
- Português:
[Usando Truffle Sol token box](https://ethereum.solange.dev/#/pt/truffle/box-token)

## Requirements

There are a few technical requirements before we start. 
To use `Truffle boxes`, you need to have installed in your computer:

- Git
- a POSIX compliant shell
- cURL
- Node.js and NPM
- a code editor

**Truffle framework**

Once you have those requirements installed, you only need one command to install `Truffle`.
It is better to do it globally:

```shell
npm install -g truffle
```

## Installation

1. Create a new folder. 
For example, create the folder `mytoken`.
Navigate to the folder in the terminal.

```shell
mkdir mytoken
cd mytoken
```

2. Run the unbox command. 
This also takes care of installing the necessary dependencies and it can take some time.

```shell
truffle unbox solangegueiros/eth-token-box
```

## Compile

Compile the smart contract. 

```shell
truffle compile
```

## Test

This Truffle box also comes with the file `TestToken.js` which include some examples for testing the smart contract. 
You can check it out in the `test` folder.

There are many other tests which can be done to check an ERC20 token.

Run this command on terminal:

```shell
truffle test
```

## Deploy on Görli - Ethereum testnet network

[Görli Testnet](https://goerli.net/)

### Setup an account & get R-BTC

1. Create a wallet

The easy way to setup an account is using a web3 wallet injected in the browser.
Some options are:
- [Metamask](https://metamask.io/)
- [Nifty](https://www.poa.network/for-users/nifty-wallet)

Select the Goerli Network in the web wallet.

2. Update `.secret` file

After create your wallet, update your mnemonic in the file `.secret`, located in the folder project, and save it.

3. Get some ETHs - Faucets
- [goerli-faucet.slock.it](https://goerli-faucet.slock.it/)
- [faucet.goerli.mudit.blog](https://faucet.goerli.mudit.blog/)

### Connect to Görli

Run the Truffle development console 

```shell
truffle console --network goerli
```

### Test the connection to Görli network

Run this commands in the Truffle console:

#### Block number
Shows the last block number.

```javascript
(await web3.eth.getBlockNumber()).toString()
```
#### Network ID

To get the network ID, run this command:

```javascript
(await web3.eth.net.getId()).toString()
```

> The Görli network ID is 5.

Exit the Truffle console:

```shell
.exit
```

### Deploy /  migrate the smart contract. 

```shell
truffle migrate --network goerli
```

The migrate process in a real blockchain takes more time, because Truffle creates some transactions which need to be mined on the blockchain.

