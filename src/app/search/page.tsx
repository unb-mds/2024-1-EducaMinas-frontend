'use client';
import FilterSearch from '@/components/FilterSearch';
import Ranking from '@/components/Ranking';
import Subtopics from '@/components/Subtopics';
import Topics from '@/components/Topics';
import {
  anos,
  barChartSeries,
  chartCategories,
  groupedBarChartCategories,
  groupedBarChartSeries,
  indicadoresGraf2,
  listaMunicipios,
  optionsEtapas,
  optionsEtapasGraf2,
  rank,
  rankingdata,
  redeGraf2,
} from '@/data/filtersData';
import { enrollmentService } from '@/services/EnrollmentService';
import { indicatorsService } from '@/services/IndicatorsService';
import { rankingService } from '@/services/RankingService';
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
  const [cityG1, setCityG1] = useState<string>(listaMunicipios[0].value);
  const [levelG1, setLevelG1] = useState<string>(optionsEtapas[0].value);
  const [cityG2, setCityG2] = useState<string>(listaMunicipios[0].value);
  const [levelG2, setLevelG2] = useState<string>(optionsEtapasGraf2[0].value);
  const [indicators, setIndicators] = useState<string>(indicadoresGraf2[0].value);
  const [rede, setRede] = useState<string>(redeGraf2[0].value);
  const [rankYear, setRankYear] = useState<string>(anos[0].value);
  const [levelRank, setLevelRank] = useState<string>(optionsEtapas[0].value);
  const [rankOrder, setRankOrder] = useState(rank[0].value);

  const [enrollmentData, setEnrollmentData] = useState<Enrollment | null>(null);
  const [indicatorsData, setIndicatorsData] = useState<Indicator | null>(null);
  const [rankingData, setRankingData] = useState<RankingItem[] | null>(null);

  useEffect(() => {
    async function fetchEnrollmentData() {
      try {
        const response = await enrollmentService.get({ city: cityG1, level: levelG1 });
        setEnrollmentData(response);
      } catch (error) {
        console.error('Erro ao buscar dados de matrícula:', error);
      }
    }

    fetchEnrollmentData();
  }, [cityG1, levelG1]);

  useEffect(() => {
    async function fetchIndicatorsData() {
      try {
        const response = await indicatorsService.get({
          city: cityG2,
          level: levelG2,
          indicator: indicators,
          sector: rede,
        });
        setIndicatorsData(response);
      } catch (error) {
        console.error('Erro ao buscar indicador: ', error);
      }
    }

    fetchIndicatorsData();
  }, [cityG2, levelG2, indicators, rede]);

  useEffect(() => {
    async function fetchRankingData() {
      try {
        const response = await rankingService.get({ year: rankYear, level: levelRank, order: rankOrder });
        setRankingData(response);
      } catch (error) {
        console.error('Erro ao buscar ranking: ', error);
      }
    }

    fetchRankingData();
  }, [rankYear, levelRank, rankOrder]);

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
          Popuptext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula felis non orci congue, nec aliquet odio euismod. Fusce nec consequat massa, sed tempor lorem. Sed consequat nisi vitae augue laoreet, id fring só pra mostrar que mudou"
          Popuptitle="Destinado ao título"
        />
      </div>

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="flex space-x-8 ml-8 my-5 items-center">
          <FilterSearch
            label="Município"
            options={listaMunicipios}
            search={true}
            onSelect={(option) => setCityG1(option.value)}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={optionsEtapas}
            onSelect={(option) => setLevelG1(option.value)}
          />
        </div>
        <div className="flex items-center">
          <StackedChart
            series={enrollmentData?.series || barChartSeries}
            categories={enrollmentData?.categories || chartCategories}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-8">
        <Subtopics
          title="Percentual de Reprovações"
          text="O índice indica a proporção de alunos que, ao final do ano letivo, nao alcançou os critérios mínimos para a conclusão da etapa de ensino"
          Popuptext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula felis non orci congue, nec aliquet odio euismod. Fusce nec consequat massa, sed tempor lorem. Sed consequat nisi vitae augue laoreet, id fring"
          Popuptitle=" Espaço destinado ao titulo"
        />
      </div>

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div id="second-filters" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-8 my-5">
          <FilterSearch
            label="Município"
            options={listaMunicipios}
            search={true}
            onSelect={(option) => setCityG2(option.value)}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={optionsEtapasGraf2}
            onSelect={(option) => setLevelG2(option.value)}
          />
          <FilterSearch
            search={false}
            label="Rede de ensino"
            options={redeGraf2}
            onSelect={(option) => setRede(option.value)}
          />
          <FilterSearch
            search={false}
            label="Indicadores"
            options={indicadoresGraf2}
            onSelect={(option) => setIndicators(option.value)}
          />
        </div>
        <div className="flex items-center">
          <GroupedBarChart
            series={indicatorsData?.series || groupedBarChartSeries}
            categories={indicatorsData?.categories.map((item) => item.toString()) || groupedBarChartCategories}
          />
        </div>
      </div>

      <div className=" md:items-center flex md:space-x-4 mt-8">
        <Subtopics
          title="Ranking de municípios"
          text="Municípios classificados pelo módulo da diferença percentual de reprovações entre pretos/pardos e brancos em todas as etapas de ensino."
          Popuptext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula felis non orci congue, nec aliquet odio euismod. Fusce nec consequat massa, sed tempor lorem. Sed consequat nisi vitae augue laoreet, id fring"
          Popuptitle=" Espaço pro título"
        />
      </div>

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
          <FilterSearch label="Ano" options={anos} search={false} onSelect={(option) => setRankYear(option.value)} />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={optionsEtapasGraf2}
            onSelect={(option) => setLevelRank(option.value)}
          />
          <FilterSearch
            label="Critério"
            options={rank}
            search={false}
            onSelect={(option) => setRankOrder(option.value)}
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Ranking order={rankOrder} data={rankingData || rankingdata} />
        </div>
      </div>
    </main>
  );
}
