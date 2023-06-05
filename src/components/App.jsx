import { Component } from 'react';

import fetchPixabay from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      fetchPixabay(this.state.name, 1).then(response =>
        this.setState({ images: response.hits })
      );
    }
  }

  addName = findName => {
    this.setState({ name: findName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.addName}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
        <Button data={this.state} onChangeData={this.setState} />
      </>
    );
  }
}
