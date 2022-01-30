import "./App.css";
import articles from "../../libs/articles";
import Article from "../Article";

function App() {
  return (
    <div className="App">
      <h1>WikiPigeon</h1>
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </div>
  );
}

export default App;
