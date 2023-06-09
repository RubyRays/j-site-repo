import React from "react";
import GameCard from "./GameCard";
import games from "./games.js";

function GameList(){
    return (
            <div className="sections">
                <h1>Game Development</h1>
                <div className="rows">
                    {/* <div className="dictionary"> */}
                        {games.map((gameEntry)=>(
                            <GameCard
                                key={gameEntry.id}
                                title={gameEntry.title}
                                content={gameEntry.content}
                                imgURL={gameEntry.imgURL}
                            />
                        ))}
                    </div>
                {/* </div> */}
            </div>







    )
}



export default GameList;