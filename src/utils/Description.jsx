import { Box, Typography } from '@mui/material';
import React, { useRef, useEffect, useContext } from 'react';
import { UserContext, LanguageContext } from '../contexts';
import useDynamicText from './languages/Texts';

export default function Description()
{
    const [intro, sched, accom, gift] = useDynamicText();
    const {lanState} = useContext(LanguageContext);
    const {guestState} = useContext(UserContext);
    const [ guest ] = guestState;
    const introRef = useRef();
    const schedRef = useRef();
    const accomRef = useRef();
    const giftRef = useRef();

    const language = lanState[0];

    const titles = 
    {
        GER:['Hallo'],
        ESP:['Hola'],
        ENG:['Hello']
    }

    useEffect(() => 
    {
        introRef.current.innerText = intro;
        schedRef.current.innerText = sched;
        accomRef.current.innerText = accom;
        giftRef.current.innerText = gift;

    }, [intro, accom, sched, gift]);

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
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
        >
            <Typography>
                <h2>
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
            </Typography>
        </Box>
    );
};