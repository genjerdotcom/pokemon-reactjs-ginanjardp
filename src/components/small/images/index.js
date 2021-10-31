import React from 'react'

const Images = ({className, url, alt, ...props}) => {
    return (
        <div>
            <img 
                className={className}
                src={url}
                alt={alt}
                {...props}
            />
        </div>
    )
}

export default Images
