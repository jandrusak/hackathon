import axios from "axios";
import react from "react";
import DisplayArticleCard from "./DisplayArticleCard";
// import './ListArticles.css';

function ListArticles(props) {
  const { articles } = props;

  if (!Array.isArray(articles)) {
    return <p>No articles to display.</p>;
  }

  return (
    <div>
      {props.articles.map((article) => (
        <div key={article.objectID}>
          <DisplayArticleCard blank={article} />
        </div>
      ))}
    </div>
    // <div className="ListArticles">
    //   {
    //     props.articles.map((article, index) => {
    //       return <DisplayArticleCard key={index} blank={article}/>
    //     })
    //   }
    // </div>
  );
}

export default ListArticles;
