import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import About from './page';

describe('About Component', () => {
  test('renders without crashing', () => {
    render(<About />);
  });
});
