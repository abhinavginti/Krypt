import ConnectWallet from "../ConnectWallet";
import EtheriumCard from "./EtheriumCard";
import TransferForm from "./TransferForm";
const Welcome = () => {
    return <>
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start md:p-20 py-12 px-4">
                <div className="flex justify-start flex-col md:mr-10 flex-1">
                    <h1 className="text-3xl sm:text-5xl mb-4">
                        Send Crypto <br /> across the World
                    </h1>
                    <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
                    <ConnectWallet Styles='my-10' />
                </div>
                <div className="flex justify-center items-center flex-1 flex-col w-full md:mt-0 mt-5">
                    <EtheriumCard />
                    <TransferForm />
                </div>
            </div>
        </div>
    </>;
};

export default Welcome;
