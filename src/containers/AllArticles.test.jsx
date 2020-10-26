import React from 'react';
import { render, screen } from '@testing-library/react';
import AllArticles from './AllArticles';
import { getArticles } from '../services/article-api';

jest.mock('../services/article-api.jsx');

describe('AllArticles Container', () => {
  it('displays a list of Articles', async() => {
    getArticles.mockResolvedValue([
      {
        title: 'test2',
        author: 'test2',
        description: 'test2'
      }
    ]);

    render(<AllArticles />);

    const articlesList = await screen.findByTestId('articles');
    expect(articlesList).not.toBeEmptyDOMElement();
  });
});
