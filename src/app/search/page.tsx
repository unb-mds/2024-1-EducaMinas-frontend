'use client';
import FilterSearch from '@/components/FilterSearch';
import Ranking from '@/components/Ranking';
import Subtopics from '@/components/Subtopics';
import Topics from '@/components/Topics';
import {
  cities,
  enrollmentCategories,
  enrollmentLevel,
  enrollmentSeries,
  indicatorCategories,
  indicatorIndicators,
  indicatorLevel,
  indicatorSector,
  indicatorSeries,
  rankingLevel,
  rankingOrder,
  rankingSeries,
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
  const [enrollmentData, setEnrollmentData] = useState<Enrollment | null>(null);
  const [indicatorsData, setIndicatorsData] = useState<Indicator | null>(null);
  const [rankingData, setRankingData] = useState<RankingItem[] | null>(null);

  useEffect(() => {
    async function fetchEnrollmentData() {
      try {
        const response = await enrollmentService.get(enrollmentFilters);
        setEnrollmentData(response);
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
        setIndicatorsData(response);
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
        setRankingData(response);
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
          <FilterSearch
            label="Município"
            options={cities}
            search={true}
            onSelect={(option) => setEnrollmentFilters({ ...enrollmentFilters, city: option.value })}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={enrollmentLevel}
            onSelect={(option) => setEnrollmentFilters({ ...enrollmentFilters, level: option.value })}
          />
        </div>
        <div className="flex items-center">
          {loading ? (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] bg-primary-white"></div>
          ) : (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] bg-primary-white items-center">
              <StackedChart
                series={enrollmentData?.series || enrollmentSeries}
                categories={enrollmentData?.categories || enrollmentCategories}
              />
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
        <div id="second-filters" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
          <FilterSearch
            label="Município"
            options={cities}
            search={true}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, city: option.value })}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={indicatorLevel}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, level: option.value })}
          />
          <FilterSearch
            search={false}
            label="Rede de ensino"
            options={indicatorSector}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, sector: option.value })}
          />
          <FilterSearch
            search={false}
            label="Indicadores"
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
                series={indicatorsData?.series || indicatorSeries}
                categories={indicatorsData?.categories.map((item) => item.toString()) || indicatorCategories}
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

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
          <FilterSearch
            label="Ano"
            options={rankingYears}
            search={false}
            onSelect={(option) => setRankingFilters({ ...rankingFilters, year: option.value })}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={rankingLevel}
            onSelect={(option) => setRankingFilters({ ...rankingFilters, level: option.value })}
          />
          <FilterSearch
            label="Critério"
            options={rankingOrder}
            search={false}
            onSelect={(option) => setRankingFilters({ ...rankingFilters, order: option.value })}
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          {loading ? (
            <div className="w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[550px] sm:h-[400px] min-w-[68vw] h-[350px] bg-primary-white"></div>
          ) : (
            <div className="w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[550px] sm:h-[400px] min-w-[68vw] h-[350px] bg-primary-white items-center">
              <Ranking order={rankingFilters.order} data={rankingData || rankingSeries} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
