'use client';
import Filter from '@/components/Filter';
import Ranking from '@/components/Ranking';
import Subtopics from '@/components/Subtopics';
import Topics from '@/components/Topics';
import { StackedChart } from '@/components/chart/StackedColumn';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Search() {
  const [municipios, setMunicipios] = useState<string[]>([]);

  const barChartSeries = [
    {
      name: 'Pretos/Pardos',
      data: [10, 19, 33, 50, 23, 44, 14, 90],
    },
    {
      name: 'Brancos',
      data: [32, 41, 12, 85, 98, 30, 54, 75],
    },
  ];

  const chartCategories = [
    '2020 Pública',
    '2020 Privada',
    '2021 Pública',
    '2021 Privada',
    '2022 Pública',
    '2022 Privada',
    '2023 Pública',
    '2023 Privada',
  ];

  const rankingdata = [
    { name: 'Patos de Minas', value: 10 },
    { name: 'Curvelo', value: 12 },
    { name: 'Buritizeiro', value: 5 },
    { name: 'Belo horizonte', value: 8 },
    { name: 'Alagoas', value: 8 },
    { name: 'Juiz de Fora', value: 3 },
    { name: 'João Pinheiro', value: 1 },
  ];
  const anos = ['2020', '2021', '2022'];
  const rank = ['menor', 'maior'];
  useEffect(() => {
    axios
      .get<any[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios?orderBy=name`)
      .then((res) => {
        console.log('Dados recebidos:', res.data);
        const municipiosName: string[] = ['Todos'];
        res.data.map((mun: any) => {
          municipiosName.push(mun.nome);
          return null;
        });
        setMunicipios(municipiosName);
        setSelectedOptionFromFilter(municipiosName[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const optionsEtapas = ['Todas', 'Educação Infantil', 'Ensino Fundamental', 'Ensino Médio'];
  const [selectedOptionFromFilter, setSelectedOptionFromFilter] = useState('');
  const handleSelectOptionFromFilter = (selectedOption: string) => {
    setSelectedOptionFromFilter(selectedOption);
  };

  return (
    <main className="flex flex-col items-center mx-[125px]">
      <Topics
        title="Desigualdade Racial"
        text="Investigue a relação entre pretos/pardos e brancos em diferentes aspectos relacionados à educação no estado de Minas Gerais"
      />

      <Subtopics
        title="Matrículas por rede de ensino"
        text="O gráfico representa o número total de matrículas em porcentagem, apenas entre brancos e pretos/pardos, ignorando ‘Outra’ e ‘Não disp.’ na rede de ensino pública e privada nos últimos 4 anos"
      />

      <div className="flex flex-col mt-3 border-b-2 primary-gray mb-3">
        <div className="flex space-x-8 ml-8 mb-">
          <Filter label="Município" options={municipios} onSelectOption={handleSelectOptionFromFilter} />
          <Filter label="Etapa de ensino" options={optionsEtapas} onSelectOption={handleSelectOptionFromFilter} />
        </div>
        <StackedChart series={barChartSeries} categories={chartCategories} />
      </div>
      <Subtopics
        title="Percentual de Reprovações"
        text="O índice indica a proporção de alunos que, ao final do ano letivo, nao alcançou os critérios mínimos para a conclusão da etapa de ensino"
      />
      <div className="w-[100%] flex pt-10">
        <div className="w-[100%]"></div>
        <div className="w-[100%]">
          <div className="flex ">
            <div className="w-[80%] mb-3">
              <Subtopics
                title="Ranking de municípios"
                text="Municípios classificados pelo módulo da diferença percentual de reprovações entre pretos/pardos e brancos em todas as etapas de ensino."
              />
            </div>
            <div className="flex w-[40%] items-center flex space-x-8">
              <Filter label="Ano" options={anos} onSelectOption={handleSelectOptionFromFilter} />
              <Filter label="Critério" options={rank} onSelectOption={handleSelectOptionFromFilter} />
            </div>
          </div>
          <Ranking order="menor" data={rankingdata} />
        </div>
      </div>
    </main>
  );
}
