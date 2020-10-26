import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import styles from './ArticleList.css';

const ArticleList = ({ articles }) => {

  const articleElements = articles.map(article => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));
  return (<ul className={styles.ArticleList} data-testid="articles">
    { articleElements }
  </ul>);
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
