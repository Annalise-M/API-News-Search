import React from 'react';
import { Link } from 'react-router-dom';
import Article from './Article';
// import styles from './ArticleList.css';


const ArticleList = ({ articles }) => {
  return articles.map(article => (
    <li key={article.id}>
      <Link to={`/details/${article.id}`}>
        <Article {...article} />
      </Link>
    </li>
 
  ));

};

export default ArticleList;
