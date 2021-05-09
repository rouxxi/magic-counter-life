import React from 'react';


function ChangeCounter(props) {
    const {addCounter, removeCounter, number, gap} = props;
    return (
        <div>
                <div onClick={()=>removeCounter(number - gap)}>-</div>
                <div>{gap}</div>
                <div onClick={()=>addCounter(number + gap)} >+</div>
        </div>
    )
}

export default ChangeCounter;