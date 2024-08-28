import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Search from './page';

vi.mock('@/components/chart/StackedColumn', () => ({
  StackedChart: () => <div data-testid="stacked-chart">Stacked Chart</div>,
}));

vi.mock('@/components/chart/GroupedBar', () => ({
  GroupedBarChart: () => <div data-testid="grouped-bar-chart">Grouped Bar</div>,
}));

vi.mock('@/components/Ranking', () => ({
  default: () => <div data-testid="ranking">Ranking</div>,
}));

describe('Search Page', () => {
  test('should render text components', () => {
    render(<Search />);
    expect(screen.getByText('Desigualdade Racial')).toBeInTheDocument();
    expect(screen.getByText('Matrículas por Rede de Ensino')).toBeInTheDocument();
    expect(screen.getByText('Indicador: aprovação')).toBeInTheDocument();
    expect(screen.getByText('Ranking da desigualdade')).toBeInTheDocument();
  });

  test('should render "Município" filter', () => {
    render(<Search />);
    const filterMun = screen.getAllByTestId('filter-Município');
    expect(filterMun.length).toEqual(3);
  });

  test('should render "Etapa de ensino" filter', () => {
    render(<Search />);
    const filterEtapa = screen.getAllByTestId('filter-Etapa-de-Ensino');
    expect(filterEtapa.length).toEqual(3);
  });

  test('should render "Ano" filter', () => {
    render(<Search />);
    expect(screen.getByTestId('filter-Ano')).toBeInTheDocument();
  });

  test('should render "Indicadores" filter', () => {
    render(<Search />);
    expect(screen.getByTestId('filter-Indicador')).toBeInTheDocument();
  });

  test('should render "Critério" filter', () => {
    render(<Search />);
    expect(screen.getByTestId('filter-Critério')).toBeInTheDocument();
  });

  test('should render enrollment chart', async () => {
    render(<Search />);

    await waitFor(() => {
      expect(screen.getByTestId('stacked-chart')).toBeInTheDocument();
    });
  });

  test('should render indicators chart', async () => {
    render(<Search />);

    await waitFor(() => {
      expect(screen.getByTestId('grouped-bar-chart')).toBeInTheDocument();
    });
  });

  test('should render ranking component', async () => {
    render(<Search />);

    await waitFor(() => {
      expect(screen.getByTestId('ranking')).toBeInTheDocument();
    });
  });
});
