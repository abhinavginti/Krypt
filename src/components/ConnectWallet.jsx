import { useContext } from "react";
import { AuthContext } from "./Auth";
const ConnectWallet = ({ Styles }) => {
    const {user} = useContext(AuthContext);
    const Connect = () => {

    }
    return !user && <button onClick={Connect} className={`bg-[#2952e3] px-7 py-3 font-semibold hover:drop-shadow-lg drop-shadow-md rounded-full ${Styles} hover:bg-[#2546bd]`}>Connect Wallet</button>;
};

export default ConnectWallet;
