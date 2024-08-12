'use client';

import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

export const TopMenu = () => {
    const openSideMenu = useUIStore(state => state.openSideMenu);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex px-6 justify-between items-center w-full h-14">
            <div className="flex items-center">
                <div className="relative w-24 h-24">
                    <Image
                        src='/images/lechongori.jpg'
                        alt='Logo'
                        width={100}
                        height={100}
                    />
                </div>
                <span>|</span>
                <span className={`${titleFont.className} text-sm md:text-base lg:text-lg antialiased font-bold ml-2`}>
                    Lechongori
                </span>
            </div>


            <div className="hidden md:flex items-center">
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-base"
                    href="#informacion"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("informacion-section")?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }}
                >
                    Información
                </Link>
                <span>|</span>
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-base"
                    href="#productos"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("product-section")?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }}
                >
                    Productos
                </Link>
                <span>|</span>
                <button onClick={openSideMenu}
                    className="m-2 p-2 mr-6 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-base"
                >
                    Cotizaciones
                </button>
                <Link href="/auth/login">
                    <button
                        className="m-3 px-5 py-1 rounded-2xl transition-all bg-red-500 text-white font-light text-sm md:text-base lg:text-base">
                        Iniciar Sesión
                    </button>
                </Link>
            </div>


            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    <CiMenuBurger /> 
                </button>
            </div>


            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center absolute top-14 left-0 w-full bg-white shadow-lg">
                    <Link
                        className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-lg"
                        href="#informacion"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("informacion-section")?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                            toggleMenu(); 
                        }}
                    >
                        Información
                    </Link>
                    <Link
                        className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-lg"
                        href="#productos"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("product-section")?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                            toggleMenu(); 
                        }}
                    >
                        Productos
                    </Link>
                    <button onClick={() => { openSideMenu(); toggleMenu(); }}
                        className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-lg"
                    >
                        Cotizaciones
                    </button>
                    <Link href="/auth/login">
                        <button
                            className="m-3 px-5 py-1 rounded-2xl transition-all bg-red-500 text-white font-light text-sm md:text-base lg:text-lg">
                            Iniciar Sesión
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};
