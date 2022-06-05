import React, { useContext, useRef } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, FormControlLabel, Checkbox, FormLabel, TextField, Card } from '@mui/material';
import { UserContext, LanguageContext } from '../contexts';
import { StyledButton } from '../styles';

export default function Confirmation()
{
    const success = useRef();
    const {lanState} = useContext(LanguageContext);
    const {guestState} = useContext(UserContext);
    const [ guest, setGuest ] = guestState;
    
    const language = lanState[0];

    const legends =
    {
        GER:[
            '',
            'Helft uns noch mit ein paar Informationen',
            'Danke für deine Rückmeldung!'

        ],
        ESP:[
            '',
            'Ayúdenos con un poco de información', 
            'Gracias por su respuesta!'
        ],
        ENG:[
            '', 
            'Help us with some Information', 
            'Thank you for your answer!'
        ]
    };

    const inputs = 
    {
        GER:[
            'Ihr bucht ein Hotelzimmer?',
            'Allergien', 
            'Intoleranzen', 
            'Sonstiges ( Vegan, Vegetarier, ...etc)', 
            'Bestätigen'
        ],
        ESP:[
            'Quisiera rentar un cuarto de hotel',
            'Alergias', 
            'Intolerancias', 
            'Otros ( Vegano o Vegetariano, ...etc )', 
            'Confirmar'
        ],
        ENG:[
            'I would like to rent a hotel room',
            'Allergies', 
            'Intolerances', 
            'Others ( Vegan or Vegetarian, ...etc )',
            'Confirm'
        ]
    };

    const handleMainCheckbox = (e) => {
        setGuest({...guest, [e.target.name]: e.target.checked});
    };

    const handleMainText = (e) => {
        e.preventDefault();
        setGuest({...guest, [e.target.name]: e.target.value });
    }

    const handleCompanionAttending = (e) => {
        setGuest({...guest, companion: {...guest.companion, [e.target.name]: e.target.checked }});
    };

    const handleAttendingSubmit = async (e) => {
        e.preventDefault();
        try
        {
            success.current.style.display = "none";
            document.body.classList.add('wait');
            document.body.style.cursor = 'wait';
            const resp = await fetch('https://juliandi.azurewebsites.net/api/attending/', 
                { headers: { 'ja-token': localStorage.getItem('ja-token') }, method:'POST', body: JSON.stringify(guest) }
            );

            if (resp.status !== 200) throw new Error(`Status failed with code ${resp.status}`);
            success.current.style.color = 'green';
            success.current.style.backgroundColor = 'rgba(0,255,0,0.5)';
            success.current.style.display = "block";
            document.body.style.cursor = 'auto';
            document.body.classList.remove('wait');
        }
        catch(err)
        {
            success.current.style.color = 'red';
            success.current.style.backgroundColor = 'rgba(255,0,0,0.5)';
            success.current.innerText = err.message;
        }
    };

    return (
        <Box
            onSubmit={handleAttendingSubmit}
            component="form"
            sx={{
                position: 'relative',
                // backdropFilter:'blur(20px)',
                backgroundColor:'#D8F1FF',
                padding: 3,
                width: 'calc(100% - 50px)',
                display:'flex',
                flexDirection: 'column',
                justifyContent:'space-around',
                alignItems: 'center',
                textAlign: 'center',
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormLabel component="legend">{legends[language][0]}</FormLabel>
            <FormControlLabel
                style={{justifyContent: 'space-around'}}
                control={
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color:'#FF87FC' } }} 
                        icon={<FavoriteBorder/>}
                        checked={guest.attending}
                        checkedIcon={<Favorite/>} 
                        onChange={handleMainCheckbox}
                        name="attending" 
                    />
                }
                label={ guest.name }
                labelPlacement='start'
            />
            {
                Object.entries(guest.companion).map( (comp, i) => (
                    <FormControlLabel 
                        key={i}
                        style={{justifyContent: 'space-around'}}
                        control={
                            <Checkbox
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color:'#FF87FC' } }} 
                                onChange={handleCompanionAttending}
                                icon={<FavoriteBorder/>}
                                checkedIcon={<Favorite/>} 
                                checked={comp[1]} 
                                name={comp[0]}
                            />
                        }
                        label={comp[0]}
                        labelPlacement='start'
                    />
                ))
            }
            <FormLabel component="legend">{legends[language][1]}</FormLabel>
            <FormControlLabel
                style={{justifyContent: 'space-around'}}
                control={
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color:'#FF87FC' } }} 
                        icon={<FavoriteBorder/>}
                        checked={guest.reservation}
                        checkedIcon={<Favorite/>} 
                        onChange={handleMainCheckbox}
                        name="reservation" 
                    />
                }
                label={inputs[language][0]}
                labelPlacement='start'
            />
            <TextField fullWidth label={inputs[language][1]} name="allergies" onChange={handleMainText} value={guest.allergies}/>
            <TextField fullWidth label={inputs[language][2]} name="intolerances" onChange={handleMainText} value={guest.intolerances}/>
            <TextField fullWidth label={inputs[language][3]} name="others" onChange={handleMainText} value={guest.others}/>
            <StyledButton variant="contained" type="submit">{inputs[language][4]}</StyledButton>
            <Card ref={success} style={{ 
                display:guest.answered?'block':'none',
                padding: 10, 
                color: 'green',
                backgroundColor:'rgba(0, 255, 0, 0.5)',    
                width:"calc(100% - 20px)"
            }}>
               {legends[language][2]} 
            </Card>
        </Box>
    );
};