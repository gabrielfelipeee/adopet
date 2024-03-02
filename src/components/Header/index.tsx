import { Link } from "react-router-dom";
import { HomeIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import logo from '../../assets/logo-white.svg';

import Layout from "./Layout";

const Header = () => {
    return (
        <Layout>
            <nav className="flex gap-10 pt-8 items-center relative z-500">
                <div>
                    <img
                        src={logo}
                        alt="Logo do adopet"
                        className="hidden md:block w-[124px] ml-10"
                    />
                </div>
                <Link to='/' className="block">
                    <HomeIcon className="h-8 text-white" />
                </Link>
                <Link to='/mensagem'>
                    <EnvelopeIcon className="h-8 text-white" />
                </Link>

            </nav>
        </Layout>
    )
}
export default Header;