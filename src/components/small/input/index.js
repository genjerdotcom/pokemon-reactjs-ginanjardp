import React from 'react';
import styled from "@emotion/styled/macro";

const Input = ({ ...props}) => {
    const InputEmo = styled.input`
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        color: #fff;
        padding: 20px 10px;
        width: 300px;
        font-size:20px;
        max-width: 100%;
        &:focus{
            outline:none;
        }
    `;

    return (
        <div>
            <InputEmo {...props} />
        </div>
    )
}

export default Input
