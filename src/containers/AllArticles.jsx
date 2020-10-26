import React, { Component } from 'react';
import Loading from '../../src/components/app/loading/Loading';
import { getArticles } from '../services/article-api';
import Search from '../components/Search/Search';
import ArticleList from '../components/articles/ArticleList';


export default class AllArticles extends Component {
  state = {
    loading: false,
    search: '',
    articles: []
  }

  componentDidMount() {
    getArticles()
      .then(articles => {
        this.setState({ articles, loading: false });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSearch = async() => {
    const articleArr = await getArticles(this.state.search);

    this.setState({ articles: articleArr, loading: true });
    getArticles(this.state.text)
      .then(articles => this.setState({
        articles
      }))
      .then(setTimeout(() => {
        this.setState({ 
          loading: false 
        });
      }, 2000));
  }

  render() {
    const { articles, loading, search } = this.state;
    if(loading) return <>
      <Search
        search={search}
        onSubmit={this.handleSearch}
        onChange={this.handleChange}
      />
      <br />
      <Loading />;
    </>;
    return (
      <>
        <Search
          search={search}
          onSubmit={this.handleSearch}
          onChange={this.handleChange}
        />
        <ArticleList articles={articles} />
      </>
    );
  }
}
