import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Popup from './Window';
const mockRouter = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('Popup Component', () => {
  test('renders the popup when isOpen is true', () => {
    render(<Popup isOpen={true} onClose={vi.fn()} />);

    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  test('does not render the popup when isOpen is false', () => {
    render(<Popup isOpen={false} onClose={vi.fn()} />);

    expect(screen.queryByText(/Lorem ipsum dolor sit amet/i)).not.toBeInTheDocument();
  });

  test('closes the popup when the close button is clicked', () => {
    const onClose = vi.fn();
    render(<Popup isOpen={true} onClose={onClose} />);

    fireEvent.click(screen.getByText('×'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
