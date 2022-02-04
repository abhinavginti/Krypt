import { useContext } from "react";
import { AuthContext } from "./Auth";
const ConnectWallet = ({ Styles }) => {
    const { user, ConnectWallet } = useContext(AuthContext);
    return !user && <button onClick={ConnectWallet} className={`bg-[#2952e3] px-7 py-3 font-semibold hover:drop-shadow-lg drop-shadow-md rounded-full ${Styles} hover:bg-[#2546bd]`}>Connect Wallet</button>;
};

export default ConnectWallet;
