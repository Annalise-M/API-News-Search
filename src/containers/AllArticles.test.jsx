import React from 'react';
import { render, screen } from '@testing-library/react';
import AllArticles from './AllArticles';

describe('AllArticles Container', () => {
  it('displays a loading screen at the start', () => {
    render(<AllArticles />);

    screen.getByAltText('something something loading screen');
  });
});
