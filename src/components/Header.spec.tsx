import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from './Header';

const setViewportSize = (width: number, height: number) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
};

describe('Header Component', () => {
  test('should render the logo and title', () => {
    render(<Header />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('EDUCA')).toBeInTheDocument();
    expect(screen.getByText('MINAS')).toBeInTheDocument();
  });

  test('should render the "Sobre" button', () => {
    render(<Header />);
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
  });

  test('should render the "Início" button', () => {
    render(<Header />);
    expect(screen.getByText(/Início/i)).toBeInTheDocument();
  });

  test('should render the "Pesquisa" button', () => {
    render(<Header />);
    expect(screen.getByText(/Pesquisa/i)).toBeInTheDocument();
  });

  test('should open and close the mobile menu when clicking the menu button', () => {
    setViewportSize(500, 800);

    render(<Header />);

    expect(screen.queryByText(/Início/i)).toBeInTheDocument();

    const menuButton = screen.getByTestId('sandwich');
    fireEvent.click(menuButton);

    expect(screen.getByText(/Início/i)).toBeVisible();
    expect(screen.getByText(/Pesquisa/i)).toBeVisible();
    expect(screen.getByText(/Sobre/i)).toBeVisible();

    fireEvent.click(menuButton);

    expect(screen.queryByText(/Início/i)).toBeInTheDocument();
  });

  test('should close the mobile menu when a nav link is clicked', () => {
    setViewportSize(500, 800);

    render(<Header />);

    const menuButton = screen.getByTestId('sandwich');
    fireEvent.click(menuButton);

    expect(screen.getByText(/Início/i)).toBeVisible();

    const inicioButton = screen.getByText(/Início/i);
    fireEvent.click(inicioButton);

    expect(screen.queryByText(/Início/i)).toBeInTheDocument();
  });
});
