"use client";

import React, { useState } from 'react';

const ConnectButton: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum?.request?.({
          method: 'eth_requestAccounts',
        });
        console.log('Wallet connected!', accounts?.[0]);
        setAccount(accounts?.[0]);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.log('Please install MetaMask or a compatible Web3 wallet!');
      alert('Please install MetaMask!');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {account
          ? `Connected: ${account.substring(0, 6)}...${account.substring(38)}`
          : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default ConnectButton;
