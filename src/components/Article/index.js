import React from "react";
import Comments from "../Comments";
import Content from "../Content";

import css from "./Article.module.css";

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
