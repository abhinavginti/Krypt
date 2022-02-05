import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth";
import TransactionCard from "./TransactionCard";
const Transactions = () => {
    const { getAllTransaction, transactions } = useContext(AuthContext)
    useEffect(() => {
        getAllTransaction();
    }, [])
    return transactions.length ? <div>
        <div className="flex lg:flex-row flex-col p-3 sm:space-x-2 justify-center">
            {transactions.map((trans, index) => <TransactionCard transaction={trans} key={trans.reciever + index} />)}
        </div>
    </div> : 'Loading Transactions...';
};

export default Transactions;
