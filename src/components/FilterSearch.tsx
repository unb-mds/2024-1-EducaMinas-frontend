'use client';
import { CaretDown, CaretUp, Check } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';

interface options {
  value: string;
  name: string;
}

interface FilterProps {
  options: options[];
  label: string;
  search: boolean;
  onSelect: (option: options) => void;
  className?: string;
  selected?: string;
  placeHolder?: string;
}

export default function FilterSearch({
  options,
  label,
  search,
  onSelect,
  className,
  selected,
  placeHolder,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<options | null>(
    options.find((option) => option.value === selected) || options[0],
  );
  const [searchTerm, setSearchTerm] = useState('');
  const filteredOptions = options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected) {
      const newSelectedOption = options.find((option) => option.value === selected);
      if (newSelectedOption) {
        setSelectedOption(newSelectedOption);
      }
    }
  }, [selected, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: options) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div
      ref={dropdownRef}
      data-testid={`filter-${label.replace(/\s+/g, '-')}`}
      className={`relative w-full max-w-xs ${className}`}
    >
      <label className="block mb-2 text-sm font-medium text-gray-700 whitespace-nowrap">{label}</label>
      <div
        className="w-full p-2 border border-primary-blue rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">{selectedOption?.name || 'Selecione'}</span>
          {isOpen ? (
            <CaretUp className="w-4 h-4 ml-2 text-gray-500" />
          ) : (
            <CaretDown className="w-4 h-4 ml-2 text-gray-500" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {search && (
            <input
              type="text"
              className="w-full p-2 border-b border-gray-300 focus:outline-none"
              placeholder={placeHolder || 'Buscar...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          <ul className="max-h-48 overflow-auto">
            {(search ? filteredOptions : options).map((option) => (
              <li
                key={option.value}
                className={`p-2 flex justify-between cursor-pointer ${
                  selectedOption?.value === option.value
                    ? 'bg-primary-blue text-white'
                    : 'hover:bg-gray-300 hover:text-black'
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <span className="whitespace-nowrap overflow-hidden md:text-[1em] sm:text-[0.9em] text-[0.7em] mr-0">
                  {option.name}
                </span>
                {selectedOption?.value === option.value && (
                  <Check color="#ffffff" weight="bold" className="mt-[2px]" size={15} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
