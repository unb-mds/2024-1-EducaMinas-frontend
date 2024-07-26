'use client';
import { BookBookmark, House, List, MagnifyingGlass, X } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [navBar, setNavBar] = useState(false);

  const handleNavLinkClick = () => {
    setNavBar(false);
  };

  return (
    <header className="w-full h-[100px] bg-primary-red z-50 relative">
      <div className="w-full h-full px-[35px] mx-auto flex justify-between items-center">
        <div className="flex items-center w-[30%]">
          <div className="mx-2">
            <Link href="/">
              <Image src={'/logo.png'} alt="logo" width={50} height={50} />
            </Link>
          </div>
          <div className="text-primary-white font-extrabold hidden md:block">
            <h1 className="text-xl md:text-2xl">EDUCA</h1>
            <h1 className="text-xl md:text-2xl">MINAS</h1>
          </div>
        </div>
        <div className={`md:hidden flex items-center z-[60]  ${navBar ? 'fixed top-12 right-12' : 'relative'}`}>
          <button onClick={() => setNavBar(!navBar)} className="text-primary-white">
            {navBar ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-1/3 bg-primary-red transition-transform transform duration-300
            ${navBar ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:w-[50%] md:flex md:justify-between md:items-center z-50`}
        >
          <div className="flex flex-col w-full h-full md:h-auto mt-20 ml-10">
            <ul className="w-full flex flex-col md:flex-row justify-center md:justify-between text-primary-white font-extrabold mt-16 md:mt-0">
              <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg ">
                <Link href="/" onClick={handleNavLinkClick}>
                  <button className="flex justify-center border-b-2 border-transparent transition duration-500 hover:border-primary-white py-2 md:py-0">
                    <House size={20} className="mr-1" />
                    Início
                  </button>
                </Link>
              </li>
              <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
                <Link href="/search" onClick={handleNavLinkClick}>
                  <button className="flex justify-center border-b-2 border-transparent transition duration-500 hover:border-primary-white py-2 md:py-0">
                    <MagnifyingGlass size={20} className="mr-1" />
                    Pesquisa
                  </button>
                </Link>
              </li>
              <li className="w-full md:w-[30%] flex justify-left ml-2 text-lg">
                <Link href="/about" onClick={handleNavLinkClick}>
                  <button className="flex justify-center border-b-2 border-transparent transition duration-500 hover:border-primary-white py-2 md:py-0">
                    <BookBookmark size={20} className="mr-1" />
                    Sobre
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {navBar && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={() => setNavBar(false)} />
      )}
    </header>
  );
}
