import react from 'react';
// import './App.css';

function DisplayArticleCard(props) {
  console.log(props)
    return (
      <div className="DisplayArticleCard">
        <p>{props.blank.created_at}</p>
        <p>{props.blank.author}</p>
        <p>{props.blank.points}</p>
      </div>
    );
  }
  
  export default DisplayArticleCard;
  