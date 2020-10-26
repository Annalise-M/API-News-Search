const fetch = require('node-fetch');

export const getArticles = () => {
  // eslint-disable-next-line max-len
  return fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33cf0171730d42829502b6a3698bfd81')
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};
