import { Link } from "react-router-dom";
import { HomeIcon, EnvelopeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import logo from '../../assets/logo-white.svg';

import Layout from "./Layout";
import useHeader from "../../hooks/useHeader";


const Header = () => {
    const {
        showHome,
        displayMenu,
        setDisplayMenu,
        logout,
        toggleMenu
    } = useHeader();

    return (
        <Layout>
            {
                showHome && <nav className="flex gap-10 pt-8 items-center">
                    <div>
                        <img
                            src={logo}
                            alt="Logo do adopet"
                            className="hidden md:block w-[124px] ml-10"
                        />
                    </div>
                    <Link to='/'>
                        <HomeIcon className="h-8 text-white transition hover:-translate-y-1 hover:transition" />
                    </Link>
                    <Link to='/mensagem'>
                        <EnvelopeIcon className="h-8 text-white transition hover:-translate-y-1 hover:transition" />
                    </Link>


                    <div
                        className="text-primary fixed right-10 top-8 flex flex-col items-center justify-center"
                    >
                        <UserCircleIcon
                            className="h-10 cursor-pointer"
                            onClick={toggleMenu}
                        />

                        <div
                            className="font-600 text-gray-dark bg-gray-light  p-1 text-center w-20 rounded-tl-3xl rounded-br-3xl fixed top-[60px] right-20"
                            style={{ display: displayMenu }}
                        >
                            <Link
                                to='/perfil'
                                className="cursor-pointer hover:underline"
                                onClick={() => setDisplayMenu("none")}
                            >
                                Perfil
                            </Link>
                            <div
                                className="cursor-pointer hover:underline"
                                onClick={logout}
                            >
                                Sair
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </Layout>
    )
}
export default Header;

/*
                        <Link
                            to='/perfil'
                            className="text-primary fixed right-10"
                        >
                            <UserCircleIcon className="h-10" />
                        </Link>

*/