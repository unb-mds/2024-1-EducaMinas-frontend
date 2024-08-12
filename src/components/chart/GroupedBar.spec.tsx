import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { GroupedBarChart } from './GroupedBar';

vi.mock('react-apexcharts', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-chart">Mock Chart</div>,
  };
});

describe('GroupedBar Component', () => {
  const groupedBarChartCategories = ['2017', '2018', '2019', '2020', '2021', '2022'];
  const groupedBarChartSeries = [
    {
      name: 'Pretos/Pardos',
      data: [10, 19, 33, 50, 23, 44],
    },
    {
      name: 'Brancos',
      data: [32, 41, 12, 85, 98, 30],
    },
  ];
  test('Should render GroupedBar Component', () => {
    render(<GroupedBarChart series={groupedBarChartSeries} categories={groupedBarChartCategories} />);
    expect(screen.getByTestId('grouped-bar-chart')).toBeInTheDocument();
  });
});
