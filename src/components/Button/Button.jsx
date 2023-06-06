import css from './Button.module.css';
import { Component } from 'react';
import fetchPixabay from '../../services/pixabay-api';

class Button extends Component {
  state = { disabled: false };
  loadMore = () => {
    this.setState({ disabled: true });
    fetchPixabay(this.props.name, this.props.page + 1).then(response => {
      this.props.onChangeLoader(false);
      this.props.onAddImg(response.hits);
      this.setState({ disabled: false });
    });
  };
  render() {
    return (
      <button
        className={css.button}
        disabled={this.state.disabled}
        onClick={() => {
          this.props.onChangePage();
          this.props.onChangeLoader(true);
          this.loadMore();
        }}
      >
        Load more...
      </button>
    );
  }
}

export default Button;
