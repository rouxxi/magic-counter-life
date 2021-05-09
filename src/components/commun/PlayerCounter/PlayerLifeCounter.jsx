import React, { useState } from 'react';
import ChangeCounter from '../ChangeCounter/ChangeCounter';

function PlayerCounter() {
    const [life, setLife] = useState(20);
    return (
        <div>
            <div>life : {life}</div>
            <ChangeCounter number={life} gap={1} addCounter={setLife} removeCounter={setLife} />
            <ChangeCounter number={life} gap={5} addCounter={setLife} removeCounter={setLife} />
            <ChangeCounter number={life} gap={10} addCounter={setLife} removeCounter={setLife} />
        </div>
    )
}

export default PlayerCounter;