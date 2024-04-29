export default function Filter(props: { options: string[]; label: string }) {
  return (
    <div className="flex flex-col">
      <label className="font-bold mb-1">{props.label}</label>
      <select className="border rounded-lg p-2 bg-primary-red text-primary-white">
        {props.options.map((option, index) => (
          <option key={index} value={option} style={{ backgroundColor: 'white', color: 'black' }}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
