'use client';
import FilterSearch from '@/components/FilterSearch';
import Ranking from '@/components/Ranking';
import Subtopics from '@/components/Subtopics';
import Topics from '@/components/Topics';
import {
  cities,
  enrollmentCategoriesStatic,
  enrollmentLevel,
  enrollmentSeriesStatic,
  indicatorCategoriesStatic,
  indicatorIndicators,
  indicatorLevel,
  indicatorSector,
  indicatorSeriesStatic,
  rankingIndexStatic,
  rankingLevel,
  rankingOrder,
  rankingSeriesStatic,
  rankingYears,
} from '@/data/filtersData';
import { EnrollmentFilter, enrollmentService } from '@/services/EnrollmentService';
import { IndicatorFilter, indicatorsService } from '@/services/IndicatorsService';
import { RankingFilter, rankingService } from '@/services/RankingService';
import { Enrollment } from '@/types/Enrollment';
import { Indicator } from '@/types/Indicator';
import { RankingItem } from '@/types/Ranking';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const GroupedBarChart = dynamic(() => import('@/components/chart/GroupedBar').then((mod) => mod.GroupedBarChart), {
  ssr: false,
});
const StackedChart = dynamic(() => import('@/components/chart/StackedColumn').then((mod) => mod.StackedChart), {
  ssr: false,
});

export default function Search() {
  const [loading, setLoading] = useState(true);
  const [enrollmentFilters, setEnrollmentFilters] = useState<EnrollmentFilter>({
    city: cities[0].value,
    level: enrollmentLevel[0].value,
  });
  const [indicatorFilters, setIndicatorFilters] = useState<IndicatorFilter>({
    level: indicatorLevel[0].value,
    city: cities[0].value,
    indicator: indicatorIndicators[0].value,
    sector: indicatorSector[0].value,
  });
  const [rankingFilters, setRankingFilters] = useState<RankingFilter>({
    year: rankingYears[0].value,
    level: rankingLevel[0].value,
    order: rankingOrder[0].value,
  });
  const [enrollmentData, setEnrollmentData] = useState<Enrollment>({
    categories: enrollmentCategoriesStatic,
    series: enrollmentSeriesStatic,
  });
  const [indicatorsData, setIndicatorsData] = useState<Indicator>({
    categories: indicatorCategoriesStatic.map((item) => Number(item)),
    series: indicatorSeriesStatic,
  });
  const [rankingData, setRankingData] = useState<RankingItem[]>(rankingSeriesStatic);
  const [rankingIndexFilter, setRankingIndexFilter] = useState<{ value: string; name: string }[]>(rankingIndexStatic);
  const [rankingSearch, setRankingSearch] = useState({
    city: { name: cities[0].name, value: cities[0].value },
    index: rankingIndexFilter[0].value,
  });

  useEffect(() => {
    async function fetchEnrollmentData() {
      try {
        const response = await enrollmentService.get(enrollmentFilters);
        if (response) setEnrollmentData(response);
      } catch (error) {
        console.error('Error when fetching registration data:', error);
      }
    }

    fetchEnrollmentData();
  }, [enrollmentFilters]);

  useEffect(() => {
    async function fetchIndicatorsData() {
      try {
        const response = await indicatorsService.get(indicatorFilters);
        if (response) setIndicatorsData(response);
      } catch (error) {
        console.error('Error when searching for indicator: ', error);
      }
    }

    fetchIndicatorsData();
  }, [indicatorFilters]);

  useEffect(() => {
    async function fetchRankingData() {
      try {
        const response = await rankingService.get(rankingFilters);
        if (response) {
          setRankingData(response);
          handleRankingIndexFilter(response);
        }
      } catch (error) {
        console.error('Error when searching for ranking: ', error);
      }
    }
    fetchRankingData();
  }, [rankingFilters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  const handleRankingIndexFilter = (data: RankingItem[]) => {
    const filterOptions = [
      { value: '0', name: 'Todas' },
      ...data.map((_, index) => {
        return { value: (index + 1).toString(), name: (index + 1).toString() };
      }),
    ];
    setRankingIndexFilter(filterOptions);
  };

  return (
    <main id="main" className="flex flex-col items-center mx-[100px]">
      <Topics
        title="Desigualdade Racial"
        text="Investigue a relação entre pretos/pardos e brancos em diferentes aspectos relacionados à educação no estado de Minas Gerais"
      />

      <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-4 mt-8">
        <Subtopics
          title="Matrículas por rede de ensino"
          text="O gráfico representa o número total de matrículas em porcentagem, apenas entre brancos e pretos/pardos, ignorando ‘Outra’ e ‘Não disp.’ na rede de ensino pública e privada nos últimos 4 anos"
          Popuptitle="Destinado ao título"
          Popuptext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula felis non orci congue, nec aliquet odio euismod. Fusce nec consequat massa, sed tempor lorem. Sed consequat nisi vitae augue laoreet, id fring só pra mostrar que mudou"
        />
      </div>

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="flex flex-row flex-wrap gap-5 justify-center my-5">
          <FilterSearch
            label="Município"
            className="sm:w-[60em] w-full"
            options={cities}
            search={true}
            onSelect={(option) => setEnrollmentFilters({ ...enrollmentFilters, city: option.value })}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            className="sm:w-[60em] w-full"
            options={enrollmentLevel}
            onSelect={(option) => setEnrollmentFilters({ ...enrollmentFilters, level: option.value })}
          />
        </div>
        <div className="flex items-center">
          {loading ? (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] bg-primary-white"></div>
          ) : (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] bg-primary-white items-center">
              <StackedChart series={enrollmentData.series} categories={enrollmentData.categories} />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-8">
        <Subtopics
          title="Percentual de Reprovações"
          text="O índice indica a proporção de alunos que, ao final do ano letivo, nao alcançou os critérios mínimos para a conclusão da etapa de ensino"
          Popuptitle=" Espaço destinado ao titulo"
          Popuptext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula felis non orci congue, nec aliquet odio euismod. Fusce nec consequat massa, sed tempor lorem. Sed consequat nisi vitae augue laoreet, id fring"
        />
      </div>

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div id="second-filters" className="gap-4 my-1 w-full flex flex-row flex-wrap justify-center">
          <FilterSearch
            label="Município"
            options={cities}
            className="sm:w-full w-[80vw]"
            search={true}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, city: option.value })}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            className="sm:w-full w-[80vw]"
            options={indicatorLevel}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, level: option.value })}
          />
          <FilterSearch
            search={false}
            label="Rede de ensino"
            className="sm:w-full w-[9.5em]"
            options={indicatorSector}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, sector: option.value })}
          />
          <FilterSearch
            search={false}
            label="Indicadores"
            className="sm:w-full w-[9.5em]"
            options={indicatorIndicators}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, indicator: option.value })}
          />
        </div>
        <div className="flex items-center">
          {loading ? (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] bg-primary-white"></div>
          ) : (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] items-center">
              <GroupedBarChart
                series={indicatorsData.series}
                categories={indicatorsData.categories.map((item) => item.toString())}
              />
            </div>
          )}
        </div>
      </div>

      <div className=" md:items-center flex md:space-x-4 mt-8">
        <Subtopics
          title="Ranking de municípios"
          text="Municípios classificados pelo módulo da diferença percentual de reprovações entre pretos/pardos e brancos em todas as etapas de ensino."
          Popuptitle=" Espaço pro título"
          Popuptext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula felis non orci congue, nec aliquet odio euismod. Fusce nec consequat massa, sed tempor lorem. Sed consequat nisi vitae augue laoreet, id fring"
        />
      </div>

      <div className="flex flex-col mt-3 gap-4 primary-gray mb-3 justify-center items-center">
        <div className="flex flex-row flex-wrap gap-4 my-1 lg:w-[90%] justify-center">
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            className="sm:w-[60em] w-[44vw]"
            options={rankingLevel}
            onSelect={(option) => setRankingFilters({ ...rankingFilters, level: option.value })}
          />
          <FilterSearch
            label="Ano"
            options={rankingYears}
            search={false}
            className="sm:w-[60em] w-[19vw]"
            onSelect={(option) => setRankingFilters({ ...rankingFilters, year: option.value })}
          />
          <FilterSearch
            label="Critério"
            options={rankingOrder}
            search={false}
            className="sm:w-[60em] w-[44vw]"
            onSelect={(option) => setRankingFilters({ ...rankingFilters, order: option.value })}
          />
          <FilterSearch
            label="Posição"
            options={rankingIndexFilter}
            search={true}
            placeHolder={`Buscar... (${rankingIndexFilter.length - 1})`}
            className="sm:w-[60em] w-[19vw]"
            selected={rankingSearch.index}
            onSelect={(option) =>
              setRankingSearch({ index: option.value, city: { name: cities[0].name, value: cities[0].value } })
            }
          />
          <FilterSearch
            label="Município"
            className="w-full"
            options={cities}
            search={true}
            selected={rankingSearch.city.value}
            onSelect={(option) =>
              setRankingSearch({ city: { value: option.value, name: option.name }, index: rankingIndexFilter[0].value })
            }
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          {loading ? (
            <div className="w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[550px] sm:h-[400px] min-w-[68vw] h-[350px] bg-primary-white"></div>
          ) : (
            <div className="w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[550px] sm:h-[400px] min-w-[68vw] h-[350px] bg-primary-white items-center">
              <Ranking
                order={rankingFilters.order}
                data={rankingData}
                searchCity={rankingSearch.city.name}
                searchIndex={Number(rankingSearch.index)}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
