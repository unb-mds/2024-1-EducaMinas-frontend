import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Home from './page';

const mockRouter = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('Home Component', () => {
  test('Should render Home page', () => {
    render(<Home />);

    expect(screen.getByText('Investigue os dados sobre a Educação do Estado de Minas Gerais')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Visualize de forma intuitiva, em gráficos, informações extraídas diretamente dos diários oficiais dos municípios mineiros.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByAltText('home')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Descubra mais' })).toBeInTheDocument();
  });

  test('Should render Button and link to the correct page', () => {
    render(<Home />);
    const button = screen.getByText(/Descubra mais/i);
    expect(button.closest('a')).toHaveAttribute('href', '/search');
  });
});
