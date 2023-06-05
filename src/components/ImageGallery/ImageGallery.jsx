// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    src: '',
  };

  addLargeURL = largeUrl => {
    this.setState({ src: largeUrl });
  };

  render() {
    const images = this.props.images;
    return (
      <>
        <ul>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              largeURL={largeImageURL}
              handleState={this.addLargeURL}
            ></ImageGalleryItem>
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
