import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Popup from './Popup';

const mockRouter = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('Popup Component', () => {
  test('renders the popup when isOpen is true', () => {
    render(<Popup isOpen={true} onClose={vi.fn()} title="Test Title" text={['Lorem ipsum dolor sit amet']} />);

    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  });

  test('does not render the popup when isOpen is false', () => {
    render(<Popup isOpen={false} onClose={vi.fn()} title="Test Title" text={['Lorem ipsum dolor sit amet']} />);

    expect(screen.queryByText(/Lorem ipsum dolor sit amet/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test Title/i)).not.toBeInTheDocument();
  });
});
