import react from 'react';
// import './App.css';

function DisplayArticleCard(props) {
  console.log(props)
    return (
      <div className="DisplayArticleCard">
        <span style = {{display: "flex", gap: "15px", justifyContent: "left", backgroundColor: "beige"}}>
        <a href = {`${props.blank.url}`} target = "_blank"><p>{props.blank.title}</p></a>
        </span>
        <span style = {{display: "flex", gap: "15px", justifyContent: "left", backgroundColor: "beige"}}>
        <p> created on: {props.blank.created_at}</p>
        </span>
        <span style = {{display: "flex", gap: "15px", justifyContent: "left", backgroundColor: "beige"}}>
        user: {props.blank.author} || {props.blank.points} points
        </span>
      </div>
    );
  }
  
  export default DisplayArticleCard;
  