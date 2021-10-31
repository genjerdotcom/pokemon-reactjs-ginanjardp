import React from 'react'

const Text = ({className, title}) => {
    return (
        <div>
            <p className={className}>{title}</p>
        </div>
    )
}
export default Text
