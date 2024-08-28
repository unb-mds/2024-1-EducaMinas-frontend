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
      render(<Ranking data={data} order="menor" searchCity="Todos" searchIndex={0} />);
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
  describe('when searchCity is not "Todos"', () => {
    test('should render the top 10 cities if the matching city index is less than 4', () => {
      const customData = Array.from({ length: 15 }, (_, i) => ({
        name: `City ${i + 1}`,
        value: i + 1,
      }));
      render(<Ranking data={customData} order="menor" searchCity="City 3" searchIndex={0} />);

      customData.slice(0, 10).forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });

    test('should render the bottom 10 cities if the matching city index is greater than data length - 6', () => {
      const customData = Array.from({ length: 15 }, (_, i) => ({
        name: `City ${i + 1}`,
        value: i + 1,
      }));
      render(<Ranking data={customData} order="menor" searchCity="City 14" searchIndex={0} />);

      customData.slice(-10).forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });

    test('should render cities around the matching city if the index is in between', () => {
      const customData = Array.from({ length: 15 }, (_, i) => ({
        name: `City ${i + 1}`,
        value: i + 1,
      }));
      render(<Ranking data={customData} order="menor" searchCity="City 7" searchIndex={0} />);

      customData.slice(2, 11).forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
  describe('when searchIndex is not 0', () => {
    test('should render the top 10 cities if the matching city index is less than 4', () => {
      const customData = Array.from({ length: 15 }, (_, i) => ({
        name: `City ${i + 1}`,
        value: i + 1,
      }));
      render(<Ranking data={customData} order="menor" searchCity="Todos" searchIndex={1} />);

      customData.slice(0, 10).forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });

    test('should render the bottom 10 cities if the matching city index is greater than data length - 6', () => {
      const customData = Array.from({ length: 15 }, (_, i) => ({
        name: `City ${i + 1}`,
        value: i + 1,
      }));
      render(<Ranking data={customData} order="menor" searchCity="Todos" searchIndex={14} />);

      customData.slice(-10).forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });

    test('should render cities around the matching city if the index is in between', () => {
      const customData = Array.from({ length: 15 }, (_, i) => ({
        name: `City ${i + 1}`,
        value: i + 1,
      }));
      render(<Ranking data={customData} order="menor" searchCity="Todos" searchIndex={7} />);

      customData.slice(2, 11).forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
});
