import React from "react";
import AntDComment from "../AntDComment";
//import Comment from "../Comment";

import css from "./Comments.module.css";

function Comments({ comments }) {
  return (
    <div className={css.comments}>
      {comments.map((comment) => {
        return <AntDComment comment={comment} />;
      })}
    </div>
  );
}

export default Comments;
