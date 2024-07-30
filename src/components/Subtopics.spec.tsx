import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
    expect(containerElement).toHaveClass(
      'w-full text-center items-center flex flex-col gap-2 my-3 primary-gray border-t-2',
    );
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toHaveClass('font-[700] text-[1.3em] pt-5 whitespace-nowrap sm:text-[1.4em]');
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toHaveClass('text-[0.9em] font-[600] text-center w-[97vw] pr-[5px] pl-[5px]');
  });
});
