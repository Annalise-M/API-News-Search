import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    // eslint-disable-next-line max-len
    const { asFragment } = render(<Article title="test" author="test" description="test" />);
   
    expect(asFragment()).toMatchSnapshot();
  });
});
