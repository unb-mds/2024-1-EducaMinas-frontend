'use client';
import { useMemo } from 'react';

interface Props {
  data: { name: string; value: number }[];
  order: string;
  searchCity: string;
  searchIndex: number;
}

type RankingData = {
  index: number;
  name: string;
  value: number;
}[];

export default function Ranking({ data, order, searchCity, searchIndex }: Props) {
  const tratedData = useMemo(() => {
    const orderData = data.sort((a, b) => {
      return order === 'menor' ? a.value - b.value : b.value - a.value;
    });
    const indexData: RankingData = orderData.map((item, index) => {
      return { ...item, index: index + 1 };
    });
    if (searchCity !== 'Todos') {
      const index = indexData.findIndex((item) => item.name.toLowerCase() === searchCity.toLowerCase());
      if (index < 4) {
        return indexData.slice(0, 10);
      } else if (index > indexData.length - 6) {
        return indexData.slice(indexData.length - 10, indexData.length);
      } else return indexData.slice(index - 4, index + 6);
    }
    if (searchIndex !== 0) {
      const index = searchIndex - 1;
      if (index < 4) {
        return indexData.slice(0, 10);
      } else if (index > indexData.length - 6) {
        return indexData.slice(indexData.length - 10, indexData.length);
      } else return indexData.slice(index - 4, index + 6);
    }
    return indexData.slice(0, 10);
  }, [data, order, searchCity, searchIndex]);

  const getItemClass = (item: RankingData[number]) => {
    if (searchCity && item.name.toLowerCase() === searchCity.toLowerCase()) {
      return 'bg-primary-blue text-primary-white rounded-lg';
    }
    if (searchIndex && item.index === searchIndex) {
      return 'bg-primary-blue text-primary-white rounded-lg';
    }
    return '';
  };

  const getBadgeClass = (index: number) => {
    switch (index) {
      case 1:
        return 'bg-yellow-500';
      case 2:
        return 'bg-gray-400';
      case 3:
        return 'bg-orange-400';
      default:
        return 'bg-primary-blue';
    }
  };

  return (
    <div
      data-testid="ranking"
      className="flex flex-col items-center justify-center w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[550px] sm:h-[400px] min-w-[68vw] h-[350px]"
    >
      {tratedData.map((item, index) => {
        const itemClass = getItemClass(item);
        return (
          <div
            className={`flex flex-row border-t-2 w-full md:h-[70px] h-[50px] items-center justify-between ${itemClass}`}
            key={index}
          >
            <div
              className={`ml-2 flex rounded-full ${getBadgeClass(item.index)} md:w-[40px] md:h-[40px] sm:text-[18px] lg:text-[22px] w-[25px] h-[25px] justify-center items-center text-primary-white text-[13px] font-extrabold`}
            >
              {item.index}
            </div>
            <div className="flex-1 font-semibold md:text-[1.6em] sm:text-[1.3em] text-[1.05em] mt-[5px] mb-[5px] ml-3">
              {item.name}
            </div>
            <div
              className={`mr-[15px] font-extrabold text-[13px] md:text-[27px] sm:text-[18px] italic ml-5 ${
                itemClass.includes('text-primary-white') ? 'text-primary-white' : 'text-secondary-red'
              }`}
            >
              {item.value}%
            </div>
          </div>
        );
      })}
    </div>
  );
}
