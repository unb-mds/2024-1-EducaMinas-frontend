import App from '@/components/ChartBar';
import Filter from '@/components/Filter';
import Subtopics from '@/components/Subtopics';
import Topics from '@/components/Topics';

export default function Search() {
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
  const optionsMunicipios = ['Selecionar', 'Paracatu', 'Pirapora', 'Patos de Minas'];
  const optionsEtapas = ['Selecionar', 'Ensino Fundamental', 'Ensino Médio'];

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
      <div className="flex mr-auto space-x-8">
        <Filter label="Municipios" options={optionsMunicipios}/>
        <Filter label="Etapa de ensino" options={optionsEtapas} />
      </div>
      <App series={barChartSeries} categories={chartCategories} />
    </main>
  );
}
