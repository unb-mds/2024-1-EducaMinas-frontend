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

    expect(screen.getByText('Explore os Dados Educacionais de Minas Gerais')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Investigue de forma intuitiva, em gráficos, as informações educacionais do estado, com base na pesquisa realizada pelo INEP.',
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
