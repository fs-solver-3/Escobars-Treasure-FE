import Web3 from "web3";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import contractABI from "./abi.json";
import { configNetwork, CONTRACT_ADDRESS, INFURA_KEY } from "./constants";
import store from "../store/reducers";
import { login, logout } from "../store/actions";

let contract: any;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_KEY,
    },
  },
};

const web3modal = new Web3Modal({
  network: configNetwork,
  cacheProvider: false, // optional
  providerOptions, // required
  disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
});

/** @return connecting to web3 via modal */
async function connectWeb3() {
  try {
    const connection = await web3modal.connect();
    const web3 = new Web3(connection);
    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    console.log("chainId", chainId);

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    const address = accounts[0];
    console.log("signer", address);

    if (address) {
      store.dispatch(login({ address }, chainId));
    } else {
      throw new Error("No account found");
    }
    return address;
  } catch (err) {
    console.error(err);
    return false;
  }
}

/** @return if browser is running MetaMask. */
function getMetaMaskInstalled() {
  return typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
}

/** @return whether MetaMask connected successfuly. */
async function connectMetamask() {
  try {
    // @ts-ignore
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (err) {
    console.error(err);
    return false;
  }
}

/** @return the first `userAddress` from the list of connected addresses. */
async function getUserAddress() {
  try {
    // @ts-ignore
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    return accounts[0] || "";
  } catch (err) {
    console.error(err);
    return false;
  }
}

/** Connects to the contract at `CONTRACT_ADDRESS`. */
async function loadContract() {
  if (typeof contract === "undefined") {
    // @ts-ignore
    window.web3 = new Web3(window.ethereum);
    contract = await new window.web3.eth.Contract(
      contractABI,
      CONTRACT_ADDRESS
    );
  }
}

async function getCurrentIndex() {
  try {
    return (await contract.methods.getCurrentIndex().call()) - 1;
  } catch (err) {
    return -1;
  }
}

async function hasSaleStarted() {
  try {
    return await contract.methods.hasSaleStarted().call();
  } catch (err) {
    console.log("Fail");
  }
}

const mintNFT = async (
  address: string,
  mintAmount: Number,
  mintTotalPrice: string
) => {
  if (typeof contract === "undefined") {
    // @ts-ignore
    window.web3 = new Web3(window.ethereum);
    const contract = await new window.web3.eth.Contract(
      contractABI,
      CONTRACT_ADDRESS
    );
    const mintWei = window.web3.utils.toWei(mintTotalPrice, "ether");
    console.log(address, mintAmount, mintWei);
    try {
      const transaction: any = await contract.methods
        .PresaleNFTs(address, mintAmount)
        .send({
          from: address,
          value: mintWei,
          gasLimit: 200000,
        });
      console.log("transaction", transaction);
      return transaction;
    } catch (err) {
      console.log(err);
      return err;
    }
    // }
  }
};
const getSoldAmount = async () => {
  if (typeof contract === "undefined") {
    // @ts-ignore
    window.web3 = new Web3(window.ethereum);
    const contract = await new window.web3.eth.Contract(
      contractABI,
      CONTRACT_ADDRESS
    );
    try {
      const soldAmount: Number = await contract.methods.getLastTokenId().call();
      return soldAmount;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

async function purchaseToad(numBought: number, totalAmount: number) {
  const connection = await web3modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
  const price = ethers.utils.parseUnits(`${totalAmount}`, "ether");

  let transaction = await contract.mintToad(numBought, {
    value: price,
  });

  return transaction;
}

export {
  connectWeb3,
  getCurrentIndex,
  getUserAddress,
  getMetaMaskInstalled,
  connectMetamask,
  purchaseToad,
  hasSaleStarted,
  loadContract,
  mintNFT,
  getSoldAmount,
};
