'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5'; 

export const AdminMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:items-center lg:justify-center w-full h-14 px-4">
      <div className="hidden md:flex items-center gap-10 md:gap-20">
        <Link className="m-1 p-1 md:m-1 md:p-1 lg:m-2 lg:p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin">Home</Link>
        <Link className="m-1 p-1 md:m-1 md:p-1 lg:m-2 lg:p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin/historial">Historial de ventas</Link>

        <div className="relative w-16 h-16 md:w-24 md:h-14 lg:h-24">
          <Image
            src='/images/lechongori.jpg'
            alt='Logo'
            width={120}
            height={120}
          />
        </div>

        <Link className="m-1 p-1 md:m-1 md:p-1 lg:m-2 lg:p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin/agregar-venta">Agregar venta</Link>
        <Link className="m-1 p-1 md:m-1 md:p-1 lg:m-2 lg:p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin/inventario">Inventario</Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>


      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white shadow-lg z-20">
          <div className="flex flex-col items-center p-4">
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin" onClick={toggleMenu}>Home</Link>
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin/historial" onClick={toggleMenu}>Historial de ventas</Link>
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin/agregar-venta" onClick={toggleMenu}>Agregar venta</Link>
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-light" href="/admin/inventario" onClick={toggleMenu}>Inventario</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
