import React, { Component } from 'react';
import Loading from '../../src/components/app/loading/Loading';
import { getArticles } from '../services/article-api';
import ArticleList from '../components/articles/ArticleList';

export default class AllArticles extends Component {
  state = {
    loading: true,
    articles: []
  }

  componentDidMount() {
    getArticles()
      .then(articles => {
        this.setState({ articles, loading: false });
      });
  }

  render() {
    const { loading, articles } = this.state;
    if(loading) return <Loading />;
    return (
      <>
        <ArticleList articles={articles} />
      </>
    );
  }
}
