import { Link } from "react-router-dom";
import { HomeIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <>
            <nav className="ly-mobile-page">
                <img src={logo} alt="Logo do adopet" />
                <Link to='/'>
                    <HomeIcon className="h-5" />
                </Link>
                <Link to='/mensagem'>
                    <EnvelopeIcon className="h-5" />
                </Link>
            </nav>
        </>
    )
}
export default Header;