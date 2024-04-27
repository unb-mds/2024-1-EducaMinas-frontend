export default function Filter(props: { options: string[]; label: string }) {
  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <select>
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
