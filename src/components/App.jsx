import { Component } from 'react';

import fetchPixabay from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    name: '',
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    fetchPixabay(this.state.name).then(response =>
      this.setState({ images: response.hits })
    );
  }

  addName = findName => {
    this.setState({ name: findName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.addName}></Searchbar>
      </>
    );
  }
}
