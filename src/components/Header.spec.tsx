import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  test('should render the logo and title', () => {
    render(<Header />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('EDUCA')).toBeInTheDocument();
    expect(screen.getByText('MINAS')).toBeInTheDocument();
  });

  test('should render the "Sobre" button', () => {
    render(<Header />);
    const sobreButtons = screen.getAllByText(/Sobre/i);
    expect(sobreButtons.length).toBeGreaterThan(0);
  });

  test('should render the "Início" button', () => {
    render(<Header />);
    const inicioButtons = screen.getAllByText(/Início/i);
    expect(inicioButtons.length).toBeGreaterThan(0);
  });

  test('should render the "Pesquisa" button', () => {
    render(<Header />);
    const pesquisaButtons = screen.getAllByText(/Pesquisa/i);
    expect(pesquisaButtons.length).toBeGreaterThan(0);
  });
});
