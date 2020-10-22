import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render (<Article 
      title={Article.title}
      imageUrl="www.placementimage.com"
      author="author name here"
      description="article summary about itself"
      // eslint-disable-next-line max-len
      url="https://techcrunch.com/wp-content/uploads/2019/10/app-store-icon-2.jpg?w=712"
      handleChange={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
