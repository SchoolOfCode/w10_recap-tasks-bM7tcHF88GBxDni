import React from "react";
import Comments from "../Comments";
import Content from "../Content";

function Article({ article }) {
  return (
    <>
      <h2>{article.title}</h2>
      <Content paragraphs={article.paragraphs} />
      <button> Like 👍 </button>
      <Comments comments={article.comments} />
    </>
  );
}

export default Article;
