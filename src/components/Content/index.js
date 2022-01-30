import React from "react";

import css from "./Content.module.css";

function Content({ paragraphs }) {
  return (
    <div className={css.paragraphs}>
      {paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}

export default Content;
