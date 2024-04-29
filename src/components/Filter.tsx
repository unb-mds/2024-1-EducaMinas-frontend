import { useEffect, useState } from 'react';

export default function Filter(props: { options: string[]; label: string }) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setSelectedOption(option);
  };
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  return (
    <div className="flex flex-col">
      <label className="font-bold mb-1">{props.label}</label>
      <select className="border rounded-lg p-2 bg-primary-red text-primary-white" onChange={handleSelect}>
        {props.options.map((option, index) => (
          <option key={index} value={option} style={{ backgroundColor: 'white', color: 'black' }}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
