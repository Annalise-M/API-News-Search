import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = () => (
  <figure className={styles.Article}>
    <figcaption>{name}</figcaption>
  </figure>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.any.urlToImage,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

console.log(Article, 'halllllllllllllllllooooooooo');
export default Article;


