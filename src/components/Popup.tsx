import { X } from '@phosphor-icons/react';
import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  title: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, text, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" data-testid="popup">
      <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose}></div>

      <div
        className="relative bg-white p-6 rounded-md shadow-lg w-[60vw] md:h-[50vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2 text-lg font-bold" onClick={onClose} data-testid="close-button">
          <X size={24} />
        </button>

        <div className="flex flex-col items-center">
          <h1 className="mt-4 text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-x">{title}</h1>
          <p className="mt-4 text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
