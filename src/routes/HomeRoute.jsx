import { useNavigate } from 'react-router-dom';
import React, {useMemo, useState} from 'react';
import Portrait from '../utils/Portrait';
import LanguageBar from '../utils/TopBar';
import photo1 from '../utils/pictures/JA3.jpg';
import photo2 from '../utils/pictures/JA4.jpg';

import '../desktop/Desktop.css';
import '../mobile/Mobile.css';
import { UserContext } from '../contexts';
import Confirmation from '../utils/Confirmation';

export default function HomeRoute()
{
    const navigate = useNavigate();
    const [ guest, setGuest ] = useState(null);
    useMemo(async () => 
    {
        const controller = new AbortController();
        const response = await fetch('https://juliandi.azurewebsites.net/api/confirmation/',
        { headers: { 'ja-token': localStorage.getItem('ja-token') }, signal: controller.signal });
        if ( response.status !== 200 ){ navigate('/login'); };
        if (!controller.signal.aborted){ const tmp = await response.json(); setGuest({ ...tmp }) };
        return () => controller.abort();
    }, [navigate]);

    return(
        <UserContext.Provider value={{ guestState: [guest, setGuest] }}>
            { 
                guest &&
                <div className='App'>
                    <LanguageBar className='LanguageBar'/>
                    <Portrait src={photo2} />
                    <section>
                        <Confirmation/>
                    </section>
                    <Portrait src={photo1} />
                    
                </div>
            }
        </UserContext.Provider>
    );
};