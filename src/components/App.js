import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';

export default class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (query) => {
    const endpoint = '/search/photos';
    const config = {
      params: { query }
    };

    const response = await unsplash.get(endpoint, config);
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}