'use client';
import Chart from 'react-apexcharts';

interface Props {
  series: { name: string; data: number[] }[];
  categories: string[];
}

export function StackedChart({ series, categories }: Props) {
  const colors = ['#FF204E', '#40679E'];

  return (
    <div>
      <Chart
        type="bar"
        width={1150}
        height={600}
        options={{
          chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%',
            fontFamily: 'Helvetica',
            foreColor: '#000000',
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 800,
              animateGradually: {
                enabled: true,
                delay: 200,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350,
              },
            },
          },
          xaxis: { categories },
          legend: {
            position: 'right',
            fontFamily: 'Helvetica',
            fontWeight: 600,
            fontSize: '14px',
            offsetY: 50,
            onItemClick: {
              toggleDataSeries: false,
            },
            markers: {
              width: 15,
              height: 15,
              radius: 5,
              offsetY: 3,
            },
          },
          dataLabels: {
            style: {
              colors: ['#FFFFFF'],
            },
          },
          colors,
          fill: { opacity: 1 },
        }}
        series={series}
      />
    </div>
  );
}
