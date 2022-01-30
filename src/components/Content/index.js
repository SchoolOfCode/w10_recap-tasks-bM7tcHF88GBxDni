import React from "react";

function Content({ paragraphs }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  );
}

export default Content;
