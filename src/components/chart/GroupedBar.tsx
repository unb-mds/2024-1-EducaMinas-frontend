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
    <div className="lg:w-[1150px] lg:h-[600px] md:w-[745px] md:h-[500px] sm:w-[635px] sm:h-[450px] min-w-[350px] h-[350px]">
      <Chart
        type="bar"
        width="100%"
        height="100%"
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
          responsive: [
            {
              breakpoint: 1000,
              options: {
                plotOptions: {
                  bar: {
                    horizontal: false,
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                legend: {
                  position: 'bottom',
                  fontSize: '12px',
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
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
