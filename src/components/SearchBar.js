import React from 'react';

export default class SearchBar extends React.Component {

  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // props are available on <this>
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              value={this.state.term} 
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

