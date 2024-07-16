'use client';
import FilterSearch from '@/components/FilterSearch';
import Ranking from '@/components/Ranking';
import Subtopics from '@/components/Subtopics';
import Topics from '@/components/Topics';
import { GroupedBarChart } from '@/components/chart/GroupedBar';
import { StackedChart } from '@/components/chart/StackedColumn';
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
} from '@/data/filtersData';
import { indicatorsService } from '@/services/IndicatorsService';
import { rankingService } from '@/services/RankingService';
import { enrollmentService } from '@/services/EnrollmentService';
import { useEffect, useState } from 'react';

export default function Search() {
  const [cityG1, setCityG1] = useState<string>(listaMunicipios[0]);
  const [levelG1, setLevelG1] = useState<string>(optionsEtapas[0]);
  const [cityG2, setCityG2] = useState<string>(listaMunicipios[0]);
  const [levelG2, setLevelG2] = useState<string>(optionsEtapasGraf2[0]);
  const [indicators, setIndicators] = useState<string>(indicadoresGraf2[0]);
  const [rankYear, setRankYear] = useState<string>(anos[0]);
  const [levelRank, setLevelRank] = useState<string>(optionsEtapas[0]);
  const [rankOrder, setRankOrder] = useState(rank[0]);

  useEffect(() => {
    enrollmentService.get({ city: cityG1, level: levelG1 });
  }, [cityG1, levelG1]);

  useEffect(() => {
    indicatorsService.get({ city: cityG2, level: levelG2, indicator: indicators });
  }, [cityG2, levelG2, indicators]);

  useEffect(() => {
    rankingService.get({ year: rankYear, level: levelRank, order: rankOrder });
  }, [rankYear, levelRank, rankOrder]);

  return (
    <main className="flex flex-col items-center mx-[100px]">
      <Topics
        title="Desigualdade Racial"
        text="Investigue a relação entre pretos/pardos e brancos em diferentes aspectos relacionados à educação no estado de Minas Gerais"
      />

      <Subtopics
        title="Matrículas por rede de ensino"
        text="O gráfico representa o número total de matrículas em porcentagem, apenas entre brancos e pretos/pardos, ignorando ‘Outra’ e ‘Não disp.’ na rede de ensino pública e privada nos últimos 4 anos"
      />

      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="flex space-x-8 ml-8 my-5">
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
        <StackedChart series={barChartSeries} categories={chartCategories} />
      </div>
      <Subtopics
        title="Percentual de Reprovações"
        text="O índice indica a proporção de alunos que, ao final do ano letivo, nao alcançou os critérios mínimos para a conclusão da etapa de ensino"
      />
      <div className="flex flex-col mt-3 primary-gray mb-3">
        <div className="flex space-x-8 ml-8 my-5">
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
            label="Indicadores"
            options={indicadoresGraf2}
            onSelect={(option: string) => setIndicators(option)}
          />
        </div>
        <GroupedBarChart series={groupedBarChartSeries} categories={groupedBarChartCategories} />
      </div>
      <Subtopics
        title="Ranking de municípios"
        text="Municípios classificados pelo módulo da diferença percentual de reprovações entre pretos/pardos e brancos em todas as etapas de ensino."
      />
      <div className="flex flex-col mt-3 primary-gray mb-3 w-[70%]">
        <div className="flex space-x-8  my-5">
          <FilterSearch label="Ano" options={anos} search={false} onSelect={(option: string) => setRankYear(option)} />
          <FilterSearch
            search={false}
            label="Etapa de Ensino"
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
        <Ranking order={rankOrder} data={rankingdata} />
      </div>
    </main>
  );
}
