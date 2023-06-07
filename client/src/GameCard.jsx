import React from "react";


function GameCard(props){
    return(
        
        <div className="card1">
            <div className="card-body">
                <img className="image-style" src={props.imgURL} alt={props.title} />
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default GameCard;