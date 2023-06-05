const { Component } = require('react');

export default class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handeleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handeleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChangeName}
            value={this.state.name}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
