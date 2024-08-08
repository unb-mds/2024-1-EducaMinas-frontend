'use client';
import { useState } from 'react';

import { Info } from '@phosphor-icons/react';
import Popup from './Window';

export default function Subtopics(props: { title: string; text: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full text-center items-center flex flex-col gap-2 my-3 primary-gray border-t-2 ">
      <div className="flex flex-row">
        <h2 className="font-[700] text-[1.3em] pt-5 whitespace-nowrap sm:text-[1.4em]">{props.title}</h2>
        <button className="mt-4 ml-3" onClick={handleOpen}>
          <Info size={24} />
        </button>
      </div>
      <h3 className="text-[0.9em] font-[600] text-center w-[97vw] pr-[5px] pl-[5px]">{props.text}</h3>

      <Popup isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
