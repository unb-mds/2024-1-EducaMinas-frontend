'use client';
interface Props {
  data: { name: string; value: number }[];
  order: string;
}

export default function Ranking({ data, order }: Props) {
  if (order === 'menor') {
    data.sort((a, b) => a.value - b.value);
  } else {
    data.sort((a, b) => b.value - a.value);
  }
  return (
    <div>
      {data.map((item, index) => (
        <div className="flex flex-row border-t-2 w-full h-[70px] items-center justify-between" key={index}>
          <div className="flex flex-row w-[80%] gap-5">
            <div className=" flex rounded-full bg-primary-blue w-[40px] h-[40px] justify-center items-center text-primary-white text-[20px] font-extrabold ">
              {index + 1}
            </div>
            <div className="font-semibold text-[24px] italic">{item.name}</div>
          </div>
          <div className="mr-[15px] text-secondary-red font-extrabold text-[24px] italic">{item.value}%</div>
        </div>
      ))}
    </div>
  );
}
