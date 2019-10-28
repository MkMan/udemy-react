/*
  import: ES2015 Module
  require: CommonJS Module
*/

import React from 'react';
import ReactDOM from 'react-dom';


/* 
  React components are Functions or CLasses to:
    * produce content
    * handle user feedback/interaction
*/

const App = () => {
  // function component
  return <div>Hello World!</div>;
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);