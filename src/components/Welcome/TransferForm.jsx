import { useContext } from "react";
import { AuthContext } from "../Auth";
import Loader from "./Loader";
const Input = ({ placeholder, name, type, value, handleChange }) => {
    return <input placeholder={placeholder}
        name={name}
        type={type}
        step="0.001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full p-2 outline-none text-sm bg-transparent border-2 border-transparent focus:border-b-white"
    />
}

const TransferForm = () => {
    const { handleChange, formData, sendTransaction, loading } = useContext(AuthContext);

    const handleSubmit = () => {
        const { addressTo, amount, keyword, message } = formData;
        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }

    return <div className="bg-glassmorphism w-full p-2 sm:w-96 mt-10">
        <Input placeholder='Address To' name='addressTo' handleChange={handleChange} type='text' />
        <Input placeholder='Amount (ETH)' name='amount' handleChange={handleChange} type='number' />
        <Input placeholder='Keyword (Gif)' name='keyword' handleChange={handleChange} type='text' />
        <Input placeholder='Message' name='message' handleChange={handleChange} type='text' />
        <button onClick={handleSubmit} className="text-semibold border-2 border-white rounded-full w-full py-2 hover:text-black hover:bg-white">{loading ? <Loader /> : 'Send Now'}</button>
    </div>;
};

export default TransferForm;
