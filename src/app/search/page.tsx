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
  });
  const [rankingFilters, setRankingFilters] = useState<RankingFilter>({
    year: rankingYears[0].value,
    level: rankingLevel[0].value,
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
  const [rankingCityFilter, setRankingCityFilter] = useState<{ value: string; name: string }[]>([
    {
      value: '0',
      name: 'Todos',
    },
  ]);
  const [rankingSearch, setRankingSearch] = useState({
    city: { name: rankingCityFilter[0].name, value: rankingCityFilter[0].value },
    index: rankingIndexFilter[0].value,
    order: rankingOrder[0].value,
  });
  function getIndicatorSubtitle(indicator: string): { title: string; subtitle: string } {
    switch (indicator) {
      case 'taxa_de_reprovacao':
        return {
          title: 'Indicador: reprovação',
          subtitle:
            'O gráfico apresenta o índice de reprovação entre estudantes de escolas públicas e privadas ao longo dos últimos quatro anos. Esse índice reflete a porcentagem de alunos que, ao término do ano letivo, não atingiram os critérios mínimos necessários para avançar na etapa de ensino correspondente.',
        };
      case 'taxa_de_aprovacao':
        return {
          title: 'Indicador: aprovação',
          subtitle:
            'O gráfico apresenta o índice de aprovação entre estudantes de escolas públicas e privadas ao longo dos últimos quatro anos. Esse índice reflete a porcentagem de alunos que, ao final do ano letivo, alcançou os critérios mínimos para a conclusão satisfatória da etapa de ensino.',
        };
      case 'taxa_de_abandono':
        return {
          title: 'Indicador: abandono',
          subtitle:
            'O gráfico apresenta o índice de abandono escolar entre estudantes de escolas públicas e privadas ao longo dos últimos quatro anos. Esse índice reflete a porcentagem de alunos que deixou de frequentar a escola após a data de referência do Censo Escolar.',
        };
      default:
        return {
          title: 'Indicadores',
          subtitle:
            'O gráfico apresenta a porcentagem do indicador selecionado nos ultimos 4 anos para estudantes de escolas públicas e privadas',
        };
    }
  }
  const indicadorInformation: { title: string; subtitle: string } = getIndicatorSubtitle(indicatorFilters.indicator);

  useEffect(() => {
    async function fetchEnrollmentData() {
      try {
        const response = await enrollmentService.get(enrollmentFilters);
        if (response) setEnrollmentData(response);
      } catch (error) {
        console.error(error);
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
        console.error(error);
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
          handleRankingCityFilter(response);
        }
      } catch (error) {
        console.error(error);
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

  const handleRankingCityFilter = (data: RankingItem[]) => {
    const allOption = { value: '0', name: 'Todos' };

    const filterOptions = data
      .map((item, index) => {
        return { value: (index + 1).toString(), name: item.name };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    const minasGeraisIndex = filterOptions.findIndex((option) => option.name === 'Minas Gerais');

    if (minasGeraisIndex !== -1) {
      const [minasGeraisOption] = filterOptions.splice(minasGeraisIndex, 1);
      filterOptions.unshift(minasGeraisOption);
    }

    filterOptions.unshift(allOption);
    setRankingCityFilter(filterOptions);
  };

  return (
    <main id="main" className="flex flex-col items-center mx-[100px]">
      <Topics
        title="Desigualdade Racial"
        text="Investigue a relação entre pretos/pardos e brancos em diferentes aspectos relacionados à educação no estado de Minas Gerais."
      />

      <div className=" md:items-center flex md:space-x-4 mt-3">
        <Subtopics
          title="Ranking da desigualdade"
          text="O ranking classifica os municípios com base na desigualdade racial na educação. O valor atribuído a cada município reflete a diferença absoluta proporcional entre brancos e pretos/pardos matriculados em ecolas públicas e privadas. Quanto menor o valor, menor é a desigualdade racial do município nesse aspecto."
          Popuptitle="Ranking da desigualdade"
          Popuptext={[
            'Para cada município, em um ano e etapa de ensino específicos, o valor é determinado somando as matrículas de alunos brancos e pretos/pardos nas redes pública e privada.Em seguida, calcula-se a diferença absoluta entre a porcentagem de determinada raça na rede pública e a mesma porcentagem na rede privada.',
            'Municípios que somam menos de 10 matrículas em uma das redes de ensino são desconsiderados.',
            'Como é utilizada a diferença absoluta, a desigualdade racial não favorece nenhuma das raças específicas.',
            'Utilize os filtros para explorar diferentes Anos e Etapas de Ensino.',
            'Navegue pelo ranking usando os filtros "Critério", "Posição" e "Município".',
            'Este ranking não inclui dados de outras classificações étnico-raciais.',
            'Fonte: INEP - Censo Escolar da Educação Básica.',
            '* O cálculo do índice é responsabilidade dos desenvolvedores desta aplicação, apenas os percentuais dos indicadores são extraídos da fonte.',
          ]}
        />
      </div>

      <div className="flex flex-col mt-3 gap-4 primary-gray mb-3 justify-center items-center mb-[20em] md:mb-[20em] lg:mb-[10em]">
        <div className="flex flex-row flex-wrap lg:gap-4 gap-2 my-1 w-full lg:w-[80%] justify-center">
          <FilterSearch
            search={false}
            label="Etapa de Ensino"
            className="sm:w-[60em] w-[45vw]"
            options={rankingLevel}
            onSelect={(option) => setRankingFilters({ ...rankingFilters, level: option.value })}
          />
          <FilterSearch
            label="Ano"
            options={rankingYears}
            search={false}
            className="sm:w-[60em] w-[20vw]"
            onSelect={(option) => setRankingFilters({ ...rankingFilters, year: option.value })}
          />
          <FilterSearch
            label="Critério"
            options={rankingOrder}
            search={false}
            className="sm:w-[60em] w-[45vw]"
            onSelect={(option) => setRankingSearch({ ...rankingSearch, order: option.value })}
          />
          <FilterSearch
            label="Posição"
            options={rankingIndexFilter}
            search={true}
            placeHolder={`Buscar... (${rankingIndexFilter.length - 1})`}
            className="sm:w-[60em] w-[20vw]"
            selected={rankingSearch.index}
            onSelect={(option) =>
              setRankingSearch({
                ...rankingSearch,
                index: option.value,
                city: { name: rankingCityFilter[0].name, value: rankingCityFilter[0].value },
              })
            }
          />
          <FilterSearch
            label="Município"
            className="w-full"
            options={rankingCityFilter}
            search={true}
            placeHolder={`Buscar... (${rankingIndexFilter.length - 1})`}
            selected={rankingSearch.city.value}
            onSelect={(option) =>
              setRankingSearch({
                ...rankingSearch,
                city: { value: option.value, name: option.name },
                index: rankingIndexFilter[0].value,
              })
            }
          />
        </div>
        <div className="flex items-center justify-center">
          {loading ? (
            <div className="w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[550px] sm:h-[400px] min-w-[68vw] h-[350px] bg-primary-white"></div>
          ) : (
            <div className="w-full lg:max-w-[700px] lg:h-[600px] md:max-w-[600px] md:h-[450px] sm:max-w-[100%] sm:h-[400px] min-w-[68vw] h-[350px] bg-primary-white items-center">
              <Ranking
                order={rankingSearch.order}
                data={rankingData}
                searchCity={rankingSearch.city.name}
                searchIndex={Number(rankingSearch.index)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-4">
        <Subtopics
          title="Matrículas por Rede de Ensino"
          text="O gráfico apresenta o número total de matrículas em porcentagem, entre brancos e pretos/pardos nas redes de ensino pública e privada nos últimos 4 anos."
          Popuptitle="Matrículas por Rede de Ensino"
          Popuptext={[
            'Cada coluna do gráfico relaciona os valores brutos de matrículas entre pretos/pardos e brancos em determinado ano e rede de ensino, totalizando 100%.',
            'Altere os filtros para explorar diferentes Municípios e Etapas de Ensino.',
            'Este gráfico não inclui dados de outras classificações étnico-raciais.',
            'Para visualizar o número de matrículas, passe o mouse sobre a coluna.',
            'Fonte: INEP - Censo Escolar da Educação Básica',
          ]}
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
            label="Etapa de Ensino"
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
          title={indicadorInformation.title}
          text={indicadorInformation.subtitle}
          Popuptitle="Indicadores"
          Popuptext={[
            'Cada par de séries no gráfico exibe a porcentagem do indicador selecionado no filtro "Indicador", comparando as redes pública e privada em determinado ano, município e etapa de ensino.',
            'Ao alterar o filtro "Indicador", uma descrição detalhada será exibida abaixo do título do gráfico.',
            'Alterne entre os filtros para explorar diferentes Municípios, Etapas de Ensino e Indicadores.',
            'Para visualizar o percentual específico de um indicador, passe o mouse sobre a série correspondente.',
            'Fonte: INEP - Censo Escolar da Educação Básica',
          ]}
        />
      </div>

      <div className="flex flex-col mt-3 primary-gray">
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
            label="Etapa de Ensino"
            className="sm:w-full w-[80vw]"
            options={indicatorLevel}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, level: option.value })}
          />
          <FilterSearch
            search={false}
            label="Indicador"
            className="sm:w-full w-[80vw]"
            options={indicatorIndicators}
            onSelect={(option) => setIndicatorFilters({ ...indicatorFilters, indicator: option.value })}
          />
        </div>
        <div className="flex items-center mb-[5em]">
          {loading ? (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] bg-primary-white"></div>
          ) : (
            <div className="w-[88.23vw] lg:h-[650px] md:h-[550px] sm:h-[500px] h-[380px] items-center justify-center pb-[10px]">
              <GroupedBarChart
                series={indicatorsData.series}
                categories={indicatorsData.categories.map((item) => item.toString())}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
