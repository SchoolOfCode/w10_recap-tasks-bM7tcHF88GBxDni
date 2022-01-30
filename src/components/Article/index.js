import React from "react";
import Content from "../Content";

function Article({ article }) {
  return (
    <>
      <h2>{article.title}</h2>
      <Content paragraphs={article.paragraphs} />
      <button> Like 👍 </button>
    </>
  );
}

export default Article;
