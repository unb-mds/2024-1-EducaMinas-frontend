import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Subtopics from './Subtopics';

const mockRouter = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('Subtopics Component', () => {
  test('renders the title and text correctly', () => {
    render(<Subtopics title="Test Title" text="Test Text" />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test('applies the correct classes', () => {
    render(<Subtopics title="Test Title" text="Test Text" />);
    const containerElement = screen.getByText(/Test Title/i).parentElement;
    expect(containerElement).toHaveClass('flex flex-row');

    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toHaveClass('font-[700] text-[1.3em] pt-5 whitespace-nowrap sm:text-[1.4em]');
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toHaveClass('text-[0.9em] font-[600] text-center w-[97vw] pr-[5px] pl-[5px]');
  });

  test('opens and closes the popup when the Info button and X button are clicked', () => {
    render(<Subtopics title="Test Title" text="Test Text" />);

    // Encontra o botão Info pelo elemento SVG
    const infoButton = screen.getByRole('button');
    fireEvent.click(infoButton);

    // Verifica se o Popup está no documento após o clique no Info
    const popup = screen.queryByTestId('popup');
    expect(popup).toBeInTheDocument();

    // Simula o clique no botão X do Popup para fechar o Popup
    const closeButton = screen.getByTestId('close-button'); // Usa o data-testid para encontrar o botão de fechar
    fireEvent.click(closeButton);

    // Verifica se o Popup foi fechado
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });
  test('does not render the popup when isOpen is false', () => {
    render(<Subtopics title="Test Title" text="Test Text" />);

    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });
});
