import React from "react";
import Comments from "../Comments";
import Content from "../Content";
import { HeartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import css from "./Article.module.css";

function Article({ article }) {
  return (
    <div className={css.article}>
      <h2>{article.title}</h2>
      <Content paragraphs={article.paragraphs} />
      <HeartOutlined style={{ fontSize: "1.5em", color: "red" }} />
      <Comments comments={article.comments} />
    </div>
  );
}

export default Article;
