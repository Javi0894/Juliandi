import { Box, Typography } from '@mui/material';
import React, { useRef, useEffect, useContext } from 'react';
import { UserContext, LanguageContext } from '../contexts';
import useDynamicText from './languages/Texts';

export default function Description()
{
    const [intro, sched, accom, gift, dead] = useDynamicText();
    const {lanState} = useContext(LanguageContext);
    const {guestState} = useContext(UserContext);
    const [ guest ] = guestState;

    const introRef = useRef();
    const schedRef = useRef();
    const accomRef = useRef();
    const giftRef = useRef();
    const deadRef = useRef();

    const language = lanState[0];

    const titles = 
    {
        GER:['Hallo'],
        ESP:['Hola'],
        ENG:['Hello']
    }

    useEffect(() => 
    {
        introRef.current.innerHTML = intro;
        schedRef.current.innerHTML = sched;
        accomRef.current.innerHTML = accom;
        giftRef.current.innerHTML = gift;
        deadRef.current.innerHTML = dead;

    }, [intro, accom, sched, gift, dead]);

    return(
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#D8F1FF',
                // backdropFilter: 'blur(10px)',
                padding: 3,
                width: 'calc(100% - 50px)',
                display:'flex',
                flexDirection: 'column',
                justifyContent:'space-around',
                alignItems: 'center',
                textAlign: 'center',
                zIndex:0,
                '& > :not(style)': { m: 1, width: '100%' },
            }}
        >
            <Typography>
                <h2 className='ja-title'>
                    {titles[language][0]}&nbsp;
                    {
                        [guest.name, ...Object.keys(guest.companion)].map((n, i) => {
                            const str = (i===0?'':', ') + n.split(' ')[0];
                            return (<span key={i}>{str}</span>);
                        })
                    }
                    !
                </h2>
                <div ref={introRef}/>
                <div ref={schedRef}/>
                <div ref={accomRef}/>
                <div ref={giftRef}/>
                <div ref={deadRef}/>
            </Typography>
        </Box>
    );
};