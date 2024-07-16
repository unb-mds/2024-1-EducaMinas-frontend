import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { useState } from 'react';

interface FilterProps {
  options: string[];
  label: string;
  search: boolean;
  onSelect: (option: string) => void;
}

export default function FilterSearch({ options, label, search, onSelect }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(options[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-64">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div
        className="w-full p-2 border border-primary-blue rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span>{selectedOption || 'Selecione'}</span>
          {isOpen && <CaretUp className="w-4 h-4 ml-2 text-gray-500" />}
          {!isOpen && <CaretDown className="w-4 h-4 ml-2 text-gray-500" />}
        </div>
      </div>
      {isOpen && search && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <input
            type="text"
            className="w-full p-2 border-b border-gray-300 focus:outline-none"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-48 overflow-auto">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isOpen && !search && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="max-h-48 overflow-auto">
            {options.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
