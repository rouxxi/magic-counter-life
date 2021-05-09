import React from 'react';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import ContextGameParameterProvider from '../context/ContextGameParameter';
import BoardGame from '../views/BoardGame/BoardGame';
import Home from '../views/home/Home';

function Routing() {
    return (
        <Router>
            <Switch>
                <ContextGameParameterProvider>
                    <Route exact path='/' component={()=> <Home />} />
                    <Route exact path='/boardgame' component={()=> <BoardGame />} />
                </ContextGameParameterProvider>
            </Switch>
        </Router>
    )
}

export default Routing;