import { X } from '@phosphor-icons/react';
import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string[];
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, text }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" data-testid="popup">
      <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose}></div>

      <div
        className="relative bg-white p-6 rounded-lg shadow-lg sm:w-[70%] lg:w-[50%] w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2 text-lg font-bold" onClick={onClose} data-testid="close-button">
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-4">
          <h1 className="mt-4 text-center font-bold leading-relaxed md:text-[1.5em] text-[1.2em] mb-4">{title}</h1>
          <div className="flex flex-col items-center">
            {text.map((item, index) => {
              return (
                <p key={index} className="md:mt-4 mt-2 text-center text-[11px] md:text-lg">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
