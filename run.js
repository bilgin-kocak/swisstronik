const axios = require('axios');

async function getStorageValue(rpcUrl, contractAddress) {
  const data = {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getStorageAt',
    params: [contractAddress, '0x0', 'latest'],
  };

  try {
    const response = await axios.post(rpcUrl, data);
    console.log(
      `Value at slot#0 for contract ${contractAddress} on ${rpcUrl} is: ${response.data.result}`
    );
  } catch (error) {
    console.error(`Failed to fetch data from ${rpcUrl}:`, error);
  }
}

// Mumbai Testnet
const mumbaiRpc = 'https://rpc-mumbai.maticvigil.com/';
const mumbaiContractAddress = '0x64D7C131e2B6CFe628Adf5Aa495685852E76d5D6';
getStorageValue(mumbaiRpc, mumbaiContractAddress);

// Swisstronik Testnet
const swisstronikRpc = 'https://json-rpc.testnet.swisstronik.com';
const swisstronikContractAddress = '0x37a3f4D99586feC325B4dd6Aa9F93755eB31c782';
getStorageValue(swisstronikRpc, swisstronikContractAddress);
