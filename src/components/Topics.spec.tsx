import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Topics from './Topics';

const mockRouter = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('Topics Component', () => {
  test('renders the title and text correctly', () => {
    render(<Topics title="Test Title" text="Test Text" />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });
  test('applies the correct classes', () => {
    render(<Topics title="Test Title" text="Test Text" />);
    const containerElement = screen.getByText(/Test Title/i).parentElement;
    expect(containerElement).toHaveClass('w-full text-center items-center flex flex-col gap-2 my-3 primary-gray');
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toHaveClass('font-extrabold sm:text-[2em] text-[1.6em] whitespace-nowrap');
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toHaveClass('text-[1.1em] font-[600] text-center w-[97vw] pb-2');
  });
});
