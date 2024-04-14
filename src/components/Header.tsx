'use client';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { House, MagnifyingGlass, BookBookmark } from '@phosphor-icons/react';
export default function Header() {
  return (
    <header className="w-full h-[100px] bg-primary-red">
      <div className="w-full h-full px-[35px] mx-auto flex justify-between items-center">
        <div className="flex w-[30%]">
          <div className="mx-2">
            <Image src={Logo} alt="logo" width={50} height={50} />
          </div>
          <div className="text-primary-white font-extrabold">
            <h1>EDUCA</h1>
            <h1>MINAS</h1>
          </div>
        </div>
        <div className="w-[50%]">
          <ul className="w-full flex justify-between text-primary-white font-extrabold">
            <li className="w-[30%] flex justify-center">
              <button className=" flex justify-center border-b-2 border-transparent transition duration-500 hover:border-primary-white">
                <House size={20} className="mr-1" />
                Início
              </button>
            </li>
            <li className="w-[30%] flex justify-center">
              <button className=" flex justify-center border-b-2 border-transparent transition duration-500 hover:border-primary-white">
                <MagnifyingGlass size={20} className="mr-1" />
                Pesquisa
              </button>
            </li>
            <li className="w-[30%] flex justify-center">
              <button className=" flex justify-center border-b-2 border-transparent transition duration-500 hover:border-primary-white">
                <BookBookmark size={20} className="mr-1" />
                Sobre
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
