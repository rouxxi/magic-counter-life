import React, {createContext, useState } from 'react';

export const ContextGameParameter = createContext(null);

function ContextGameParameterProvider({children }) {
    const [gameParameter, setGameParameter] = useState({
        type_game:"",
        number_player: 2
    })
    return (
        <ContextGameParameter.Provider value={{gameParameter, setGameParameter}}>
            {children }
        </ContextGameParameter.Provider>
    )
}

export default ContextGameParameterProvider;