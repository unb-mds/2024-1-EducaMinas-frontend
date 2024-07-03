interface FilterProps {
  options: string[];
  label: string;
  onSelectOption: (option: string) => void;
}

export default function Filter({ options, label, onSelectOption }: FilterProps) {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    onSelectOption(option);
  };
  return (
    <div className="flex flex-col">
      <label className="font-bold mb-1">{label}</label>
      <select
        className="appearance-none focus:outline-none focus:ring-0 border rounded-lg p-2 bg-primary-red text-primary-white min-w-40"
        onChange={handleSelect}
      >
        {options.map((option, index) => (
          <option key={index} value={option} style={{ backgroundColor: 'white', color: 'black' }}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
