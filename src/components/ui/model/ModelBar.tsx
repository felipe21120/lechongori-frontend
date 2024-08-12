'use client';

import clsx from 'clsx';
import { IoCloseOutline } from 'react-icons/io5';
import { useUIStore } from '@/store';
import { ContentModel } from './ContentModel';

export const ModelBar: React.FC = () => {

  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);

  return (
    <div>
      
      {isSideMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
        />
      )}

     
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      
      <nav
        className={clsx(
          "fixed p-5 left-1/2 top-1/2 w-full h-full md:w-full md:h-3/4 lg:w-3/4 lg:h-4/5 rounded-none md:rounded-2xl bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full translate-y-full": !isSideMenuOpen,
            "translate-x-[-50%] translate-y-[-50%]": isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        <div className="mt-10">
          <ContentModel />
        </div>
      </nav>
    </div>
  );
};
