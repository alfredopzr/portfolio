import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { Box, Button, Typography, TextField, CircularProgress } from '@mui/material';

const Web3App = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [isTransferring, setIsTransferring] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await provider.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          updateBalance(accounts[0]);
        }
      }
    };
    checkConnection();
  }, []);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await provider.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        updateBalance(accounts[0]);
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to connect wallet');
    }
    setIsConnecting(false);
  };

  const updateBalance = async (address) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const balance = await provider.getBalance(address);
    setBalance(ethers.formatEther(balance));
  };

  const transferTokens = async () => {
    if (!ethers.isAddress(recipient)) {
      alert('Invalid recipient address');
      return;
    }

    setIsTransferring(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.parseEther(amount)
      });
      await tx.wait();
      alert('Transfer successful!');
      updateBalance(account);
    } catch (error) {
      console.error(error);
      alert('Transfer failed');
    }
    setIsTransferring(false);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', mt: 4 }}>
      {!account ? (
        <Button 
          variant="contained" 
          onClick={connectWallet} 
          disabled={isConnecting}
        >
          {isConnecting ? <CircularProgress size={24} /> : 'Connect MetaMask'}
        </Button>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Balance: {balance} ETH
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>Transfer Tokens</Typography>
            <TextField 
              label="Recipient Address" 
              fullWidth 
              margin="normal"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <TextField 
              label="Amount (ETH)" 
              fullWidth 
              margin="normal"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button 
              variant="contained" 
              onClick={transferTokens} 
              disabled={isTransferring || !recipient || !amount}
              sx={{ mt: 2 }}
            >
              {isTransferring ? <CircularProgress size={24} /> : 'Transfer'}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Web3App;
