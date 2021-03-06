import { useState, useEffect, createContext } from 'react'
import { ethers } from 'ethers'
import { ContractABI, ContractAddress } from '../utils/Constants';

export const AuthContext = createContext();

const { ethereum } = window;

const getEthContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(ContractAddress, ContractABI, signer);
    console.log({
        provider,
        signer,
        transactionContract
    })

    return transactionContract
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [transactionsCount, setTransactionsCount] = useState(localStorage.transactionCount || '');

    const handleChange = (e, name) => {
        setFormData(prev => ({ ...prev, [name]: e.target.value }))
    }

    const getAllTransaction = async () => {
        try {
            if (ethereum) {
                const transactionContract = getEthContract();
                const transactionArray = await transactionContract.getAllTransaction();
                // console.log(transactionArray);
                if (transactionArray.length) {
                    const newTransactionArray = transactionArray.map((trans) => ({
                        reciever: trans.reciever,
                        sender: trans.sender,
                        keyword: trans.keyword,
                        message: trans.message,
                        amount: parseInt(trans.amount._hex) / (10 ** 18),
                        timestamp: new Date(trans.timestamp.toNumber() * 1000).toLocaleString()
                    }))
                    setTransactions(newTransactionArray)
                }
            }
            else console.log('Ethereum is not present')
        } catch (error) {
            console.log(error)
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) {
                return alert("Please Install Metamask")
            }
            const accounts = await ethereum.request({ method: 'eth_accounts' })
            if (accounts.length) {
                setUser(accounts[0]);
            }
            console.log(accounts);
        } catch (error) {
            console.log(error)
            throw new Error('No Ethereum Object')
        }
    }

    const ConnectWallet = async () => {
        try {
            if (!ethereum) {
                return alert("Please Install Metamask")
            }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setUser(accounts[0]);
        } catch (error) {
            console.log(error)
            throw new Error('No Ethereum Object')
        }
    }

    const checkIfTransactionExist = async () => {
        try {
            if (ethereum) {
                const transactionContract = getEthContract()
                const count = await transactionContract.getTransactionCount();
                localStorage.transactionCount = count.toNumber();
            }
        } catch (error) {
            console.log(error)
            throw new Error('No Ethereum Object')
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please Install Metamask");
            const transactionContract = getEthContract();
            const { addressTo, amount, keyword, message } = formData;
            const parsedAmount = ethers.utils.parseEther(amount);
            setLoading(true);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: user,
                    to: addressTo,
                    gas: '0x5208', //21000 GWEI
                    value: parsedAmount._hex //0.001
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            console.log(`Loading - ${transactionHash.hash}`);
            transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setFormData({ addressTo: '', amount: '', keyword: '', message: '' })
            setLoading(false);
            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionsCount(transactionCount.toNumber());

        } catch (error) {
            console.log(error)
            setLoading(false)
            throw new Error('No Ethereum Object')
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionExist();
    }, [transactionsCount])
    return <AuthContext.Provider value={{ user, ConnectWallet, handleChange, formData, sendTransaction, loading, getAllTransaction, transactions }}>
        {children}
    </AuthContext.Provider>
}
