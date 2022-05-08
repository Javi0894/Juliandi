import React from 'react';
export default function Portrait ({ ...rest })
{
    return(
        <img className='fit portrait' alt={'portrait'} {...rest}></img>
    );
};