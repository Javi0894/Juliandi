import React, { useContext, useRef } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Button, FormControlLabel, Checkbox, FormLabel, TextField, Card } from '@mui/material';
import { UserContext, LanguageContext } from '../contexts';

export default function Confirmation()
{
    const success = useRef();
    const {lanState} = useContext(LanguageContext);
    const {guestState} = useContext(UserContext);
    const [ guest, setGuest ] = guestState;
    
    const language = lanState[0];

    const titles = 
    {
        GER:['Hallo'],
        ESP:['Hola'],
        ENG:['Hello']
    }

    const legends =
    {
        GER:[
            'Informieren Sie uns, ob Sie kommen',
            'Helfen Sie und mit Information',
            'Erfolgreich! Vielen Dank für Ihre Bestätigung!'
        ],
        ESP:[
            'Infórmenos si es que van a asistir',
            'Ayúdenos con un poco de información', 
            'Exitoso! Muchas gracias por confirmar!'
        ],
        ENG:[
            'Let us know if you are coming', 
            'Help us with some Information', 
            'Request successful! Thank you for your confirmation!'
        ]
    };

    const inputs = 
    {
        GER:[
            'Möchten Sie ein Hotelzimmer buchen?',
            'Allergien', 
            'Intoleranzen', 
            'Sonstiges ( Vegan, Vegerarier, ...etc)', 
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
        document.body.classList.add('wait');
        document.body.style.cursor = 'wait';
        await fetch('https://juliandi.azurewebsites.net/api/attending/', 
            { headers: { 'ja-token': localStorage.getItem('ja-token') }, method:'POST', body: JSON.stringify(guest) }
        );
        success.current.style.display = "block";
        document.body.style.cursor = 'auto';
        document.body.classList.remove('wait');
    };

    return (
        <Box
            onSubmit={handleAttendingSubmit}
            component="form"
            sx={{
                position: 'relative',
                backgroundColor:'yellow',
                padding: 3,
                width: 'calc(100% - 50px)',
                display:'flex',
                flexDirection: 'column',
                justifyContent:'space-around',
                alignItems: 'center',
                textAlign: 'center',
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
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
            <FormLabel component="legend">{legends[language][0]}</FormLabel>
            <FormControlLabel
                style={{justifyContent: 'space-around'}}
                control={
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} 
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
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} 
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
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} 
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
            <Button variant="contained" type="submit">{inputs[language][4]}</Button>
            <Card ref={success} style={{ 
                display:'none',
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