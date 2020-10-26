const fetch = require('node-fetch');

export const getArticles = (search) => {
  const API_KEY = '33cf0171730d42829502b6a3698bfd81';
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${search}&from=2020-10-24&to=2020-10-25&sortBy=popularity&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};
