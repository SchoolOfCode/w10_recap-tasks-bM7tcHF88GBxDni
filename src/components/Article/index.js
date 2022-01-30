import React from "react";

function Article({ article }) {
  return (
    <>
      <h2>{article.title}</h2>

      <button> Like 👍 </button>
    </>
  );
}

export default Article;
