'use client';
import FilterSearch from '@/components/FilterSearch';
import Ranking from '@/components/Ranking';
import Subtopics from '@/components/Subtopics';
import Topics from '@/components/Topics';
import Popup from '@/components/Window';
import { Info } from '@phosphor-icons/react';
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
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const GroupedBarChart = dynamic(() => import('@/components/chart/GroupedBar').then((mod) => mod.GroupedBarChart), {
  ssr: false,
});
const StackedChart = dynamic(() => import('@/components/chart/StackedColumn').then((mod) => mod.StackedChart), {
  ssr: false,
});

export default function Search() {
  const [cityG1, setCityG1] = useState<string>(listaMunicipios[0]);
  const [levelG1, setLevelG1] = useState<string>(optionsEtapas[0]);
  const [cityG2, setCityG2] = useState<string>(listaMunicipios[0]);
  const [levelG2, setLevelG2] = useState<string>(optionsEtapasGraf2[0]);
  const [indicators, setIndicators] = useState<string>(indicadoresGraf2[0]);
  const [rede, setRede] = useState<string>(redeGraf2[0]);
  const [rankYear, setRankYear] = useState<string>(anos[0]);
  const [levelRank, setLevelRank] = useState<string>(optionsEtapas[0]);
  const [rankOrder, setRankOrder] = useState(rank[0]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    enrollmentService.get({ city: cityG1, level: levelG1 });
  }, [cityG1, levelG1]);

  useEffect(() => {
    indicatorsService.get({ city: cityG2, level: levelG2, indicator: indicators, sector: rede });
  }, [cityG2, levelG2, indicators, rede]);

  useEffect(() => {
    rankingService.get({ year: rankYear, level: levelRank, order: rankOrder });
  }, [rankYear, levelRank, rankOrder]);

  return (
    <main id="main" className="flex flex-col items-center mx-[100px]">
      <Topics
        title="Desigualdade Racial"
        text="Investigue a relação entre pretos/pardos e brancos em diferentes aspectos relacionados à educação no estado de Minas Gerais"
      />

      <Subtopics
        title="Matrículas por rede de ensino"
        text="O gráfico representa o número total de matrículas em porcentagem, apenas entre brancos e pretos/pardos, ignorando ‘Outra’ e ‘Não disp.’ na rede de ensino pública e privada nos últimos 4 anos"
      />

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="flex space-x-8 ml-8 my-5 items-center">
          <FilterSearch
            label="Município"
            options={listaMunicipios}
            search={true}
            onSelect={(option: string) => setCityG1(option)}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={optionsEtapas}
            onSelect={(option: string) => setLevelG1(option)}
          />
        </div>
        <div className="flex items-center">
          <StackedChart series={barChartSeries} categories={chartCategories} />
          <button onClick={() => setIsPopupOpen(true)} className="ml-2 p-2 text-black-500">
            <Info size={24} />
          </button>
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
      </div>

      <Subtopics
        title="Percentual de Reprovações"
        text="O índice indica a proporção de alunos que, ao final do ano letivo, nao alcançou os critérios mínimos para a conclusão da etapa de ensino"
      />

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div id="second-filters" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-8 my-5">
          <FilterSearch
            label="Município"
            options={listaMunicipios}
            search={true}
            onSelect={(option: string) => setCityG2(option)}
          />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={optionsEtapasGraf2}
            onSelect={(option: string) => setLevelG2(option)}
          />
          <FilterSearch
            search={false}
            label="Rede de ensino"
            options={redeGraf2}
            onSelect={(option: string) => setRede(option)}
          />
          <FilterSearch
            search={false}
            label="Indicadores"
            options={indicadoresGraf2}
            onSelect={(option: string) => setIndicators(option)}
          />
        </div>
        <div className="flex items-center">
          <GroupedBarChart series={groupedBarChartSeries} categories={groupedBarChartCategories} />
          <button onClick={() => setIsPopupOpen(true)} className="ml-2 p-2 text-black-500">
            <Info size={24} />
          </button>
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
      </div>

      <Subtopics
        title="Ranking de municípios"
        text="Municípios classificados pelo módulo da diferença percentual de reprovações entre pretos/pardos e brancos em todas as etapas de ensino."
      />

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
          <FilterSearch label="Ano" options={anos} search={false} onSelect={(option: string) => setRankYear(option)} />
          <FilterSearch
            search={false}
            label="Etapa de ensino"
            options={optionsEtapasGraf2}
            onSelect={(option: string) => setLevelRank(option)}
          />
          <FilterSearch
            label="Critério"
            options={rank}
            search={false}
            onSelect={(option: string) => setRankOrder(option)}
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Ranking order={rankOrder} data={rankingdata} />
          <button onClick={() => setIsPopupOpen(true)} className="p-2 text-black-500">
            <Info size={24} />
          </button>
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
      </div>
    </main>
  );
}
