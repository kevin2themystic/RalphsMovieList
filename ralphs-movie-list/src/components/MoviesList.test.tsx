import React from 'react';
import { render } from '@testing-library/react';
import MoviesList from './MoviesList';

test('renders learn react link', () => {
  const { getByText } = render(<MoviesList Movies={[]} />);
});
