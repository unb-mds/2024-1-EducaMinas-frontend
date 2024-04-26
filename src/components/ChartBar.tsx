'use client';
import React, { Component } from 'react';
import BarChart from 'react-apexcharts';

class App extends Component {
  constructor(props: {
    categories: any;
    series: [{ name: string; data: number[] }];
  }) {
    super(props);

    this.state = {
      options: {
        chart: { type: 'bar', height: 100, stacked: true, stackType: '100%' },
        xaxis: {
          categories: this.props.categories || [1, 2, 3],
          labels: {
            rotate: -45,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        fill: {
          opacity: 1,
          colors: ['#FF204E', '#40679E'],
        },
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50,
          markers: {
            fillColors: ['#FF204E', '#40679E'],
          },
          onItemClick: {
            toggleDataSeries: false,
          },
        },
      },
      series: this.props.series,
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <BarChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1100"
              height="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
