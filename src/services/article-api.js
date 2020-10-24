
import { process, fetch } from 'react';
// const { REACT_APP_NEWS_API_KEY } = process.env;

export const getArticles = async() => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=techcrunch&=${process.env.REACT_APP_NEWS_API_KEY}/`)
    .then(res => res.json())
    .then(json => json.articles);
};

//https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/articles
