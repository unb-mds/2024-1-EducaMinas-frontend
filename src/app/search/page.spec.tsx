import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Search from './page';

vi.mock('@/components/chart/StackedColumn', () => ({
  StackedChart: () => <div data-testid="stacked-chart">Stacked Chart</div>,
}));

vi.mock('@/components/chart/GroupedBar', () => ({
  GroupedBarChart: () => <div data-testid="grouped-bar-chart">Grouped Bar Chart</div>,
}));

describe('Search Page', () => {
  test('should render text components', () => {
    render(<Search />);
    expect(screen.getByText('Desigualdade Racial')).toBeInTheDocument();
    expect(screen.getByText('Matrículas por rede de ensino')).toBeInTheDocument();
    expect(screen.getByText('Percentual de Reprovações')).toBeInTheDocument();
    expect(screen.getByText('Ranking de municípios')).toBeInTheDocument();
  });

  test('should render "Município" filter', () => {
    render(<Search />);
    const filterMun = screen.getAllByTestId('filter-Município');
    expect(filterMun.length).toEqual(2);
  });

  test('should render "Etapa de ensino" filter', () => {
    render(<Search />);
    const filterMun = screen.getAllByTestId('filter-Etapa-de-ensino');
    expect(filterMun.length).toEqual(3);
  });

  test('should render "Ano" filter', () => {
    render(<Search />);
    expect(screen.getByTestId('filter-Ano')).toBeInTheDocument();
  });

  test('should render "Rede de ensino" filter', () => {
    render(<Search />);
    expect(screen.getByTestId('filter-Rede-de-ensino')).toBeInTheDocument();
  });

  test('should render "Indicadores" filter', () => {
    render(<Search />);
    expect(screen.getByTestId('filter-Indicadores')).toBeInTheDocument();
  });

  test('should render "Critério" filter', () => {
    render(<Search />);
    expect(screen.getByTestId('filter-Critério')).toBeInTheDocument();
  });

  test('should render stacked chart', () => {
    render(<Search />);
    expect(screen.getByTestId('stacked-chart')).toBeInTheDocument();
  });

  test('should render grouped chart', () => {
    render(<Search />);
    expect(screen.getByTestId('grouped-bar-chart')).toBeInTheDocument();
  });

  test('should render ranking component', () => {
    render(<Search />);
    expect(screen.getByTestId('ranking')).toBeInTheDocument();
  });
});
