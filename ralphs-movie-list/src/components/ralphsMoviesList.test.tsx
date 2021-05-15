import React from 'react';
import { render } from '@testing-library/react';
import RalphsMoviesList from './ralphsMovieList';

test('renders learn react link', () => {
  const { getByText } = render(<RalphsMoviesList />);
});
