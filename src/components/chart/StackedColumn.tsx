'use client';
import Chart from 'react-apexcharts';

interface Props {
  series: { name: string; data: number[] }[];
  categories: string[];
}

export function StackedChart({ series, categories }: Props) {
  const colors = ['#FF204E', '#40679E'];

  return (
    <div className="lg:w-[1150px] lg:h-[600px] md:w-[740px] md:h-[450px] sm:w-[650px] sm:h-[400px] min-w-[345px] h-[350px]">
      <Chart
        type="bar"
        width="100%"
        height="100%"
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
          responsive: [
            {
              breakpoint: 1030,
              options: {
                legend: {
                  position: 'bottom',
                  fontSize: '12px',
                  offsetX: -10,
                  offsetY: 0,
                },
                dataLabels: {
                  style: {
                    fontSize: '10px',
                  },
                },
              },
            },
          ],
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
