import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
const EtheriumCard = () => {
    return <div className="bg-glassmorphism p-3 flex flex-col justify-between sm:w-72 h-40 w-full">
        <div className='flex flex-row justify-between items-start'>
            <div className='rounded-full w-10 h-10 border-2 border-white flex justify-center items-center'>
                <SiEthereum />
            </div>
            <BsInfoCircle size={17} />
        </div>
        <div>
            <p className='text-sm'><span className='text-semibold'>Address:</span></p>
            <p className='text-semibold text-2xl'>Ethereum</p>
        </div>
    </div>;
};

export default EtheriumCard;
