import { Link } from "react-router-dom";
import { HomeIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import logo from '../../assets/logo-white.svg';

const Header = () => {
    return (
        <>
            <nav className="flex gap-10 pt-8 items-center z-50 relative">
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
        </>
    )
}
export default Header;