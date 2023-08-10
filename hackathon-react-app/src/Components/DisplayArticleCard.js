import react from 'react';
// import './App.css';

function DisplayArticleCard(props) {
  console.log(props)
    return (
      <div className="DisplayArticleCard">
        <p>{props.blank.title}</p>
      </div>
    );
  }
  
  export default DisplayArticleCard;
  