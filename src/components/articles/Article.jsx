import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = ({ title, author, description }) => (
  <figure className={styles.Article}>
    <p>{title}</p>
    <p>{author}</p>
    <p>{description}</p>

  </figure>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Article;
