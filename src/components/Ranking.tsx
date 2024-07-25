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
    <div className="flex flex-col items-center justify-center w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[550px] sm:h-[400px] min-w-[68vw] h-[350px]">
      {data.map((item, index) => (
        <div className="flex flex-row border-t-2 w-full md:h-[70px] h-[50px] items-center justify-between" key={index}>
          <div className="flex flex-row w-[80%] gap-5 items-center">
            <div className="flex rounded-full bg-primary-blue md:w-[40px] md:h-[40px] w-[30px] h-[30px] justify-center items-center text-primary-white text-[20px] font-extrabold">
              {index + 1}
            </div>
            <div className="flex-1 font-semibold md:text-[1.6em] text-[1.1em] mt-[5px] mb-[5px]">{item.name}</div>
          </div>
          <div className="mr-[15px] text-secondary-red font-extrabold text-[20px] md:text-[27px] italic ml-5">
            {item.value}%
          </div>
        </div>
      ))}
    </div>
  );
}
