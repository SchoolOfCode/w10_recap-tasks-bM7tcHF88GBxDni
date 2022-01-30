import articles from "../../libs/articles";
import Article from "../Article";
import Login from "../Login";
import Title from "../Title";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <div className={css.nav}>
        <Title />
        <Login />
      </div>
      <div>
        {articles.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </div>
  );
}

export default App;
