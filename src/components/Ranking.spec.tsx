import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import Ranking from './Ranking';

describe('Ranking Component', () => {
  const data = [
    { name: 'City 1', value: 10 },
    { name: 'City 2', value: 12 },
    { name: 'City 3', value: 8 },
  ];

  describe('with descending order', () => {
    beforeEach(() => {
      render(<Ranking data={data} order="maior" searchCity="Todos" searchIndex={0} />);
    });

    test('should render cities in descending order', () => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('City 2')).toBeInTheDocument();
      expect(screen.getByText('12')).toBeInTheDocument();

      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('City 1')).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument();

      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('City 3')).toBeInTheDocument();
      expect(screen.getByText('8')).toBeInTheDocument();
    });
  });

  describe('should render cities in ascending order', () => {
    beforeEach(() => {
      render(<Ranking data={data} order="menor" searchCity="Todos" searchIndex={0} />);
    });

    test('should render cities in ascending order', () => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('City 3')).toBeInTheDocument();
      expect(screen.getByText('8')).toBeInTheDocument();

      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('City 1')).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument();

      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('City 2')).toBeInTheDocument();
      expect(screen.getByText('12')).toBeInTheDocument();
    });
  });
});
