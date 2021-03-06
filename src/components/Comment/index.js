import React from "react";

import css from "./Comment.module.css";

function Comment({ comment }) {
  return (
    <div className={css.comment}>
      <h4>{comment.name} says:</h4>
      <p>{comment.text}</p>
    </div>
  );
}

export default Comment;
