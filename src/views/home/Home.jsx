import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGameParameter } from '../../context/ContextGameParameter';
import {Button} from 'semantic-ui-react';

function Home() {
    const {gameParameter, setGameParameter} = useContext(ContextGameParameter);
    const [typeGame, setTypeGame] = useState("Classic");
    const [numberPlayer, setNumberPlayer] = useState(2);

    return (
        <div>
            <label htmlFor=""> Format de partie :
                <select name="" id="" onClick={(e)=> setTypeGame(e.target.value)}>
                    <option value="Commander">Commander</option>
                    <option value="Classic">Classic</option>
                    <option value="Empereur">Empereur</option>
                </select>
            </label>

            <label htmlFor=""> Nombre de joueurs :
                <select name="" id="" onClick={(e)=> setNumberPlayer(e.target.value)}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
            </label>
            <Button.Group>
    <Button size='big' positive>+1</Button>
    <Button.Or />
    <Button  size='big' positive>+5</Button>
    <Button.Or />
    <Button size='big' positive>+10</Button>
  </Button.Group>
  <Button.Group>
    <Button size='big' negative>-1</Button>
    <Button.Or />
    <Button  size='big' negative>-5</Button>
    <Button.Or />
    <Button size='big' negative>-10</Button>
  </Button.Group>
            <Button>Semantic</Button>
            <Button positive>Semantic</Button>
             <Link to='/boardgame'> 
            <button onClick={(e)=>setGameParameter({...gameParameter, number_player : numberPlayer ,  type_game : typeGame })} >Jouer</button>
            </Link>
        </div>
    )
}

export default Home;