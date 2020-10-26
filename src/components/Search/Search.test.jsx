import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  const testingFunc = function() {};

  it('renders Search function for articles', () => {
    const { asFragment } = render(<Search 
      search="search"
      onChange={testingFunc}
      onSubmit={testingFunc}
    />); 
    expect(asFragment()).toMatchSnapshot();
  });
});
