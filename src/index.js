/*
  import: ES2015 Module
  require: CommonJS Module
*/

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


/* 
  React components are Functions or CLasses to:
    * produce content
    * handle user feedback/interaction
*/

const App = () => {
  /* 
    JSX (the content of the render method) gets compiled to JS call to
    React.createElement 
  */

  // function component
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam"/>
      </ApprovalCard>
      <CommentDetail author="Alex"/>
      <CommentDetail author="Jane"/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);