const TransferForm = () => {
    const Input = ({ placeholder, name, handleChange, type, value }) => {
        return <input placeholder={placeholder}
            name={name}
            type={type}
            step="0.001"
            value={value}
            onChange={() => handleChange(e, name)}
            className="my-2 w-full p-2 outline-none text-sm bg-transparent border-2 border-transparent border-b-white"
        />
    }
    return <div className="bg-glassmorphism w-full p-2 sm:w-96 mt-10">
        <Input placeholder='Address To' name='addressTo' handleChange={() => { }} type='text' />
        <Input placeholder='Amount (ETH)' name='amount' handleChange={() => { }} type='number' />
        <Input placeholder='Keyword (Gif)' name='keyword' handleChange={() => { }} type='text' />
        <Input placeholder='Message' name='message' handleChange={() => { }} type='text' />
        <button className="text-semibold border-2 border-white rounded-full w-full py-2 mt-4 hover:text-black hover:bg-white">Send Now</button>
    </div>;
};

export default TransferForm;
