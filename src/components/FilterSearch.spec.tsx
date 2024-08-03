import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, beforeEach, vi } from 'vitest';
import FilterSearch from './FilterSearch';

describe('Filter Component', () => {
  const onSelect = vi.fn();

  beforeEach(() => {
    render(
      <FilterSearch
        options={[
          { value: 'option1', nome: 'option 1' },
          { value: 'option2', nome: 'option 2' },
          { value: 'option3', nome: 'option 3' },
        ]}
        label="test"
        search={true}
        onSelect={onSelect}
      />,
    );
  });

  test('should render filter with label', () => {
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('should render option', () => {
    expect(screen.getByText('option 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('option 1'));
    expect(screen.getByText('option 2')).toBeInTheDocument();
    expect(screen.getByText('option 3')).toBeInTheDocument();
  });

  test('should render input', () => {
    fireEvent.click(screen.getByText('option 1'));
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });

  test('should call onSelect when an option is clicked', () => {
    fireEvent.click(screen.getByText('option 1'));
    fireEvent.click(screen.getByText('option 2'));
    expect(onSelect).toHaveBeenCalledWith({ value: 'option2', nome: 'option 2' });
  });
});
