import { process } from 'react';

export const getArticles = () => {
  // eslint-disable-next-line max-len
  return fetch(`https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=techcrunch&=${process.env.REACT_APP_NEWS_API_KEY}`, {
    header: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(json => json.map(article => ({
      title: article.title,
      imageUrl: article.urlToImage,
      author: article.author,
      description: article.description,
      url: article.url
    })));
};


//https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/articles

