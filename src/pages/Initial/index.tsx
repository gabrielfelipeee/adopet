import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.svg';
import catDog from '../../assets/cat-dog.svg';

import Paragraph from './Paragraph';
import useWindowWidth from '../../hooks/useWindowWidth';


const Initial = () => {
    const { isMobile } = useWindowWidth();

    return (
        <div
            className="ly-mobile-initial flex flex-col justify-center items-center bg-primary w-full text-gray-light -mt-[65px] -mb-[55px] relative z-10 md:ly-desktop"
        >
            <img
                src={logo}
                alt="Logo do Adopet"
                className="w-[180px] -mt-40 mb-4 md:w-[260px] md:-mt-24 lg:-mt-96"
            />
            <h2 className="text-2xl font-500 my-4">Boas-vindas</h2>
            <Paragraph isMobile={isMobile} />
            <div className="flex flex-col items-center justify-center gap-5">
                <Link
                    to='/login'
                    className="btn"
                >
                    Já tenho conta
                </Link>
                <Link
                    to='/cadastrar'
                    className="btn"
                >
                    Quero me cadastrar
                </Link>
            </div>
            <img
                src={catDog}
                className="w-[200px] lg:w-[346px] lg:bottom-8 absolute bottom-11"
            />
        </div>
    )
}
export default Initial;