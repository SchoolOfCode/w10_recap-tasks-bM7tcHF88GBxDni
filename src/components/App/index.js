import articles from "../../libs/articles";
import Article from "../Article";
import Title from "../Title";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <Title />
      <div>
        {articles.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </div>
  );
}

export default App;
