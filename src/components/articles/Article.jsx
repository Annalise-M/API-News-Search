import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';


const Article = () => (
  <figure className={styles.Article}>
    <figcaption>{name}</figcaption>
  </figure>
);

Article.propTypes = {
  name: PropTypes.string.isRequired,
    
};

export default Article;
