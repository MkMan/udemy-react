import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  /*
    React.Component contains other methods that can be used in sub classes
  */

  constructor(props) {
    super(props); // should always do this

    /* 
      one way to init state is to use the constructor 
    */
    this.state = {
      lat: null,
      errorMsg: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        /*
          setState is inherited from React.Component
          MUST be called to update state. Should NEVER update state directly
          !! Updating state updates the properties specified and does not replace the whole state !!
        */
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMsg: error.message })
      }
    );
  }

  /*
    must have this method
    it gets called frequently so should be as light as possible
  */
  render() {
    // conditional rendering
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    } else if (!this.state.errorMsg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);