import { Component } from 'react';
import fetchPixabay from '../../services/pixabay-api';

class Button extends Component {
  fff = this.props.onChangeData;
  loadMore = () => {
    fetchPixabay(this.props.data.name, ++this.props.data.page).then(response =>
      this.fff({
        images: [...this.props.data.images, ...response.hits],
        page: ++this.props.data.page,
      })
    );
  };
  render() {
    return <button onClick={this.loadMore}>Load more...</button>;
  }
}

export default Button;
