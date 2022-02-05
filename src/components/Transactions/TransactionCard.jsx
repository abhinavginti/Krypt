import { shortenAddress } from "../../utils/shortenAddress";
import fetchGiffy from "../../hooks/fetchGiffy";
const TransactionCard = ({ transaction }) => {
    const { reciever, sender, keyword, amount, message, timestamp } = transaction;
    return <div className="flex p-2 my-2 bg-glassmorphism">
        <img className="w-[25vw] h-[25vw] md:w-52 md:h-52 rounded-full border-white border" src={fetchGiffy(keyword)} alt='' title={keyword} />
        <div className="flex flex-col w-full justify-center px-3 items-end space-y-2 w-75 text-sm">
            <a href={`https://ropsten.etherscan.io/address/${sender}`} target='_blank' rel='noreferrer'>
                <p><span className="font-semibold">From: </span><span>{shortenAddress(sender)}</span></p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/${reciever}`} target='_blank' rel='noreferrer'>
                <p><span className="font-semibold">To: </span><span>{shortenAddress(reciever)}</span></p>
            </a>
            <p><span className="font-semibold">Amount: </span><span>{amount} ETH</span></p>
            <p><span className="font-semibold">Message: </span><span>{message}</span></p>
        </div>
    </div>;
};

export default TransactionCard;
