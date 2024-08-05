import { titleFont } from '@/config/fonts'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

export const TopMenu = () => {
    return (
        <nav className="flex px-6 justify-between items-center w-full">

            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src='/images/logo.jpg'
                    alt='Logo'
                    width={20}
                    height={20}
                />
                <span className={ `${ titleFont.className } antialiased font-bold` } >Lechongori</span>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <div className="flex items-center">

                    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/informacion">Información</Link>
                    <span>|</span>
                    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/products">Productos</Link>
                    <span>|</span>
                    <Link className="m-2 p-2 mr-6 rounded-md transition-all hover:bg-gray-100" href="/category/kids">Cotizaciones</Link>

                    <button
                        // onClick={ openSideMenu }
                        className="m-3 px-5 py-1 rounded-2xl transition-all bg-red-500 text-white text-base"> {/* CAMBIAR EL COLOR */}
                        Iniciar Sesión
                    </button>



                </div>


            </div>


            {/* Search, Cart, Menu */}



        </nav>
    );
}
