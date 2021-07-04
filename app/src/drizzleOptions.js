import Web3 from "web3";
import Seth from "./contracts/Seth.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("https://speedy-nodes-nyc.moralis.io/c26dd9e67932cbc6fdf23586/bsc/testnet"),
  },
  contracts: [Seth],
  events: {
  },
};

export default options;
