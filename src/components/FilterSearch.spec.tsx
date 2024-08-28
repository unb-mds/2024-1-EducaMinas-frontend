import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import FilterSearch from './FilterSearch';

describe('Filter Component', () => {
  const onSelect = vi.fn();

  const options = [
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
  ];

  test('should render filter with label', () => {
    render(<FilterSearch options={options} label="test" search={true} onSelect={onSelect} />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('should render option', () => {
    render(<FilterSearch options={options} label="test" search={true} onSelect={onSelect} />);
    fireEvent.click(screen.getByText('option 1'));
    expect(screen.getByText('option 2')).toBeInTheDocument();
    expect(screen.getByText('option 3')).toBeInTheDocument();
  });

  test('should render input', () => {
    render(<FilterSearch options={options} label="test" search={true} onSelect={onSelect} />);
    fireEvent.click(screen.getByText('option 1'));
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });

  test('should call onSelect when an option is clicked', () => {
    render(<FilterSearch options={options} label="test" search={true} onSelect={onSelect} />);
    fireEvent.click(screen.getByText('option 1'));
    fireEvent.click(screen.getByText('option 2'));
    expect(onSelect).toHaveBeenCalledWith({ value: 'option2', name: 'option 2' });
  });

  test('should close the dropdown when clicking outside', () => {
    render(
      <div>
        <div data-testid="outside-element">Outside Element</div>
        <FilterSearch options={options} label="test" search={true} onSelect={onSelect} />
      </div>,
    );

    fireEvent.click(screen.getByText('option 1'));
    expect(screen.getByText('option 2')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside-element'));

    expect(screen.queryByText('option 2')).not.toBeInTheDocument();
  });

  test('should select the correct option when "selected" prop is provided', () => {
    render(<FilterSearch options={options} label="test" search={true} onSelect={onSelect} selected="option2" />);

    expect(screen.getByText('option 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('option 2'));
    expect(screen.getByText('option 1')).toBeInTheDocument();
    expect(screen.getByText('option 3')).toBeInTheDocument();
  });
});
