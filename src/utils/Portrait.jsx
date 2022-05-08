import React from 'react';
export default function Portrait ({ ...rest })
{
    return(
        <img className='fit' alt={'portrait'} {...rest}></img>
    );
};