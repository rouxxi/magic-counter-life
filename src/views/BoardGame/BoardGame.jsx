import React, { useContext, useEffect, useState } from 'react';
import PlayerLifeCounter from '../../components/commun/PlayerCounter/PlayerLifeCounter';
import { ContextGameParameter } from '../../context/ContextGameParameter';

function BoardGame() {
    const {gameParameter} = useContext(ContextGameParameter);
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        if(players.length <gameParameter.number_player) {
            for (let i = 0; i < gameParameter.number_player; i++ ) {
                setPlayers([...players, {
                    life: gameParameter.type_game === "classic" || (gameParameter.number_player <=2 && gameParameter.type_game === "Commander" )  ? 20: 30,
                    counters : 
                        {
                            poison: 0,
                            experience: 0,
                            commander: 0,
                            energy: 0,
                        }
                    
                }])
            }
        }
    }, [players])
    return (
        <div>
            {players && players.map((person, index)=> <PlayerLifeCounter life={person.life} key={index} /> )}
            
        </div>
    )
}

export default BoardGame;