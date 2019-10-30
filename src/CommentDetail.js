/* 
  React component names are upper camel case
*/

import React from 'react'; // variable name needs to be React not react ??
import faker from 'faker';


const CommentDetail = (props) => {
  // functional components receive props as the first argument
  return (
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={faker.image.avatar()}/>
    </a>
    <div className="content">
      <a href="/" className="author">
        {props.author}
      </a>
      <div className="metadata">
        <span className="date">
          Today at 6pm
        </span>
      </div>
      <div className="text">Nice blog post!</div>
    </div>
  </div>
  );
}

export default CommentDetail;