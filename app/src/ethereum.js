import { ethers, Contract } from 'ethers';
import BALANCE from './contracts/BALANCE.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const balance = new Contract(
          BALANCE.networks[window.ethereum.networkVersion].address,
          BALANCE.abi,
          signer
        );
	

        resolve({balance});
      }
      resolve({balance: undefined});
    });
  });
  

export default getBlockchain;
