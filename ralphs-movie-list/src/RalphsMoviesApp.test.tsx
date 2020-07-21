import React from 'react';
import { render } from '@testing-library/react';
import RalphsMoviesApp from './RalphsMoviesApp';

test('renders learn react link', () => {
  const { getByText } = render(<RalphsMoviesApp />);
});
