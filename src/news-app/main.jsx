import React from 'react';
import Navbar1 from './component/navbar';
import Search1 from './component/search';
import Card1 from './component/card';
import { Audio } from 'react-loader-spinner';
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      searchTerm: '',
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-01-30&sortBy=popularity&apiKey=8397781c82554c838ec1d8111311a6be')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://newsapi.org/v2/everything?q=${this.state.searchTerm}&apiKey=${this.apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ news: [...data.articles] });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div>
        <Audio heigth="100" width="100" color="grey" ariaLabel="loading" />
        <Navbar1 />
        <Search1 handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Card1 news={this.state.news} />
      </div>
    );
  }
}
