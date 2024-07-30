import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, beforeEach } from 'vitest';
import Ranking from './Ranking';

describe('Ranking Component', () => {
  const data = [
    { name: 'City 1', value: 10 },
    { name: 'City 2', value: 12 },
    { name: 'City 3', value: 8 },
  ];

  describe('with descending order', () => {
    beforeEach(() => {
      render(<Ranking data={data} order="maior" />);
    });

    test('should render cities in descending order', () => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('City 2')).toBeInTheDocument();
      expect(screen.getByText('12%')).toBeInTheDocument();

      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('City 1')).toBeInTheDocument();
      expect(screen.getByText('10%')).toBeInTheDocument();

      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('City 3')).toBeInTheDocument();
      expect(screen.getByText('8%')).toBeInTheDocument();
    });
  });

  describe('should render cities in ascending order', () => {
    beforeEach(() => {
      render(<Ranking data={data} order="menor" />);
    });

    test('should render cities in ascending order', () => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('City 3')).toBeInTheDocument();
      expect(screen.getByText('8%')).toBeInTheDocument();

      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('City 1')).toBeInTheDocument();
      expect(screen.getByText('10%')).toBeInTheDocument();

      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('City 2')).toBeInTheDocument();
      expect(screen.getByText('12%')).toBeInTheDocument();
    });
  });
});
