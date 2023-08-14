import react from 'react';
// import './App.css';

function DisplayArticleCard(props) {
  console.log(props)
    return (
      <div className="DisplayArticleCard">
        <span style = {{display: "flex", gap: "15px", justifyContent: "left", backgroundColor: "beige", padding: "10px"}}>
        <a href = {`${props.blank.url}`} target = "_blank"><p>{props.blank.title}</p></a>
        </span>
        <span style = {{display: "flex", gap: "15px", justifyContent: "left", backgroundColor: "beige", padding: "10px"}}>
        <p> created on: {props.blank.created_at}</p>
        </span>
        <span style = {{display: "flex", gap: "15px", justifyContent: "left", backgroundColor: "beige", padding: "10px"}}>
        user: {props.blank.author} || {props.blank.points} points
        </span>
      </div>
    );
  }
  
  export default DisplayArticleCard;
  