import axios from 'axios';
import react from 'react';
import DisplayArticleCard from './DisplayArticleCard';
// import './ListArticles.css';

function ListArticles(props) {

  return (
    <div className="ListArticles">
      {
        props.articles.map((article, index) => {
          return <DisplayArticleCard key={index} blank={article}/>
        })
      }
    </div>
  );
}

export default ListArticles;
