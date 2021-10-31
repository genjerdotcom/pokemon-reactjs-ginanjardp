import React from 'react';
import styled from "@emotion/styled/macro";

const Button = ({title, backgroundColor, color, ...props}) => {
    const ButtonActionEmo = styled.button`
        justify-content: space-between;
        align-items: left;
        padding: 10px 15px;
        background: ${backgroundColor};
        color: ${color};
        box-shadow: none;
        border: none;
    `;
    return (
        <div>
            <ButtonActionEmo {...props}>{title}</ButtonActionEmo>
        </div>
    )
}

export default Button
