import React from 'react';
import "./card.scss";

const Card = ({title, initial, id, type, ...props}) => {
    
    return (
        <div>
            <div 
                key={id}
                id={id}
                className={`card ${initial} ${type === 'FRONT' ? 'front' : ''}`}
                {...props}
            /> 
        </div>
    )
}

export default Card
