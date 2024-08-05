import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" data-testid="popup">
      <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose}></div>

      <div
        className="relative bg-white p-6 rounded-md shadow-lg w-[300px] max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2 text-lg font-bold" onClick={onClose}>
          &times;
        </button>

        <div className="flex flex-col items-center">
          <p className="mt-4 text-center leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
