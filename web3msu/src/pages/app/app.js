import "./app.css";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { BigNumber, Contract, providers, utils } from "ethers";
import React, { useEffect, useRef, useState } from "react";

export const Web3App = () => {
      // Create a BigNumber `0`
  const zero = BigNumber.from(0);
  // walletConnected keeps track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  
  
  //web3 stuff ========================================================
    // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Goerli network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{
        chainId: "0x89",
        rpcUrls: ["https://polygon-rpc.com/"],
        chainName: "Matic Mainnet",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        blockExplorerUrls: ["https://explorer.matic.network"]
    }]
});
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  
    /*
        connectWallet: Connects the MetaMask wallet
      */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);

    } catch (err) {
      console.error(err);
    }
  };
  
    // useEffects are used to react to changes in state of the website
  // The array at the end of function call represents what state changes will trigger this effect
  // In this case, whenever the value of `walletConnected` changes - this effect will be called
  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    
    }
  }, [walletConnected]);



    return (<>
    <br/>
    <br/>
    <br/>
    <div className="web3app">
    <div className="title"> Web3 Association DAO<br/> Login</div>
    <div className="middle"/>
    <div className="center"> 
    <div onClick={connectWallet} className="connectWeb3">Connect to Polygon</div></div>
    </div>
    </>)
}