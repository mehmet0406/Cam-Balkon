import Logo from "../images/Logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
export default function Navbar() {
    const [burger, setBurger] = useState(true);
    const ToogleBtn = () => {
        setBurger(!burger)
    };
    return (
        <div>
            <nav className="font-apple   px-4  h-16  text-black flex justify-center  fixed w-full bg-white z-30 shadow-xl" >
                <div className="container mx-auto  max-w-screen-2xl relative flex justify-between lg:justify-center">
                    <div className="flex items-center h-full gap-5 lg:absolute left-0">
                        <span><img src={Logo} alt="w-11 h-11" className="h-full w-11" /></span>
                        <span className="font-bold text-lg md:text-xl tracking-wide "> Evim Cam Balkon</span>
                    </div>
                    <div className="lg:hidden flex cursor-pointer items-center " onClick={ToogleBtn}>
                        {burger ? <GiHamburgerMenu size={25} /> : <GrClose size={25} />}
                    </div>
                    <div className=" ease-linear h-full transition-all tracking-wide items-center gap-11 xl:gap-20 text-xl hidden lg:flex">
                        <a href="#Anasayfa"><span>Ana Sayfa</span></a>
                        <a href="#Hakkimizda"><span>Hakkımızda</span></a>
                        <a href="#Hizmetlerimiz"><span>Hizmetlerimiz</span></a>
                    </div>
                </div>
            </nav>
            <div className={`fixed  bottom-0 right-0 h-full top-16 pr-10 pl-5 py-12 bg-white z-50 shadow-3xl lg:hidden  transition-all ease-linear delay-100 ${burger ? 'translate-x-[120%]' : ''}`} >
                <ul className="text-2xl flex flex-col gap-10 justify-center">
                    <li className="hover:scale-105 transition-all ease-linear ">
                        <a href="#Anasayfa"><span>-</span> Anasayfa</a>
                    </li>
                    <li className="hover:scale-105 transition-all ease-linear "><a href="#Hakkimizda"><span>-</span> Hakkımızda</a></li>
                    <li className="hover:scale-105 transition-all ease-linear "><a href="#Hizmetlerimiz"><span>-</span> Hizmetlerimiz</a></li>
                </ul>
            </div>
        </div>

    );
};