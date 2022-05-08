import React from 'react';
import COL from './languages/colombia.svg';
import GER from './languages/germany.svg';
import USA from './languages/usa.svg';

export default function TopBar()
{
    return (
        <div className="Topbar">
            <img className='icon fit' alt='icon' src={COL}></img>
            <img className='icon fit' alt='icon' src={GER}></img>
            <img className='icon fit' alt='icon' src={USA}></img>
        </div>
    );
}