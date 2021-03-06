import NavItem from "./NavItem";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { Link } from "react-router-dom";
import ConnectWallet from "../ConnectWallet";
import DeveloperInfo from "./DeveloperInfo";
const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    return <>
        <nav className="w-full flex md:justify-around justify-between py-2 px-5">
            <div className="font-anurati text-2xl flex-initial md:flex-[0.5]">
                <Link to='/'>krypt</Link>
            </div>
            <div className="cursor-pointer text-[28px]">
                {!toggleNav && <HiMenuAlt4 onClick={() => setToggleNav(true)} />}
            </div>
            {toggleNav && <div className="flex animate-slide-in list-none flex-initial flex-col justify-between bg-glassmorphism items-center z-10 fixed top-0 p-2 right-0 md:min-w-[20vw] min-w-[70vw] h-screen">
                <ul className="flex flex-col justify-start items-center space-y-3">
                    <AiOutlineClose onClick={() => setToggleNav(false)} className="cursor-pointer text-[28px]" />
                    {['transactions'].map((item, key) => <NavItem key={item + key} path={item} />)}
                    <ConnectWallet />
                </ul>
                <DeveloperInfo />
            </div>}
        </nav>
    </>
};

export default Navbar;
