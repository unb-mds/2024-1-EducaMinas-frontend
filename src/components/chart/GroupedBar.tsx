'use client';
import Chart from 'react-apexcharts';

interface Props {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

export function GroupedBarChart({ series, categories }: Props) {
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
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -10,
            style: {
              fontSize: '14px',
              colors: ['#fff'],
            },
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['#fff'],
          },
          xaxis: { categories },
          colors,
          fill: { opacity: 1 },
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
        }}
        series={series}
      />
    </div>
  );
}
