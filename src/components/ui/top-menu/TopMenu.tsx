'use client';

import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { usePathname } from 'next/navigation';
import { Product } from '@/interface';


interface Props {
    product?: Product;
}

export const TopMenu = ({ product }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isPreCotizacionPage = pathname === '/pre-cotizacion';
    const CotizacionPage = pathname === '/cotizacion';
    // const isContactoPage = product && pathname === `/product/${product.productSlug}`;

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

            {isPreCotizacionPage ? (
                <div className="flex items-center">
                    <Link href="/">
                        <button
                            className="m-3 px-5 py-1 rounded-2xl transition-all bg-red-500 text-white font-light text-sm md:text-base lg:text-base">
                            Volver al inicio
                        </button>
                    </Link>
                </div>
            ) : CotizacionPage ? (
                <div className="flex items-center">
                    <Link href="/pre-cotizacion">
                        <button
                            className="m-3 px-5 py-1 rounded-2xl transition-all bg-red-500 text-white font-light text-sm md:text-base lg:text-base">
                            Volver atras
                        </button>
                    </Link>
                </div>
            ) : (
                <>
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
                        <Link href="/pre-cotizacion"
                            className="m-2 p-2 mr-6 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-base"
                        >
                            Cotizaciones
                        </Link>
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
                            <Link href="/pre-cotizacion"
                                className="m-2 p-2 mr-6 rounded-md transition-all hover:bg-gray-100 font-light text-sm md:text-base lg:text-base"
                            >
                                Cotizaciones
                            </Link>
                            <Link href="/auth/login">
                                <button
                                    className="m-3 px-5 py-1 rounded-2xl transition-all bg-red-500 text-white font-light text-sm md:text-base lg:text-lg">
                                    Iniciar Sesión
                                </button>
                            </Link>
                        </div>
                    )}
                </>
            )}
        </nav>
    );
};
