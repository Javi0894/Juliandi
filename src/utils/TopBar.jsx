import React, { useContext } from 'react';
import {LanguageContext} from '../contexts';
import COL from './languages/colombia.svg';
import GER from './languages/germany.svg';
import USA from './languages/usa.svg';

export default function LanguageBar({...rest})
{
    const {lanState} = useContext(LanguageContext);
    const setLanguage = lanState[1];
    const handleLanguage = (lan) => (e) => 
    {
        e.preventDefault();
        setLanguage(lan);
    }

    return (
        <div {...rest}>
            <img className='icon fit' alt='icon' onClick={handleLanguage('ESP')} src={COL}></img>
            <img className='icon fit' alt='icon' onClick={handleLanguage('GER')} src={GER}></img>
            <img className='icon fit' alt='icon' onClick={handleLanguage('ENG')} src={USA}></img>
        </div>
    );
}