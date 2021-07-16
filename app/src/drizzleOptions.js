import Web3 from "web3";
import Seth from "./contracts/Seth.json";
import BALANCE from './contracts/BALANCE.json';

const options = {
  web3: {
    block: true,
    customProvider: new Web3("wss://modest-goodall:filter-whinny-frosty-curve-bogus-huddle@ws-nd-243-814-022.p2pify.com"),
  },
  contracts: [Seth, BALANCE],
  events: {
  },
};

export default options;
