import React, {useContext, useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, FormLabel, Card, Typography } from '@mui/material';
import LanguageBar from '../utils/TopBar';
import { LanguageContext } from '../contexts';
import { JAThemeProvider, StyledButton } from '../styles';

export default function LoginRoute()
{
    const navigate = useNavigate();
    const deadline = new Date(2022, 6, 30);
    const {lanState} = useContext(LanguageContext);

    const failure = useRef();
    const date = useRef();

    const language = lanState[0];
    const [ credentials, setCredentials ] = useState(
        {
            username: '', password: ''
        }
    );

    const texts = 
    {
        GER:['Authentifizierung fehlgeschlagen','bis zur Unendlichkeit und noch viel weiter'],
        ESP:['Autentificación fallida', 'Al infinito y más allá'],
        ENG:['Authentication failed','To infinity and beyond']
    };

    const form =
    {
        GER:['Benutzername', 'Passwort', 'Anmelden'],
        ESP:['Usuario', 'Contraseña', 'Acceder'],
        ENG:['Username', 'Password', 'Login']
    };

    const handleCredentials = (e) => 
    {
        e.preventDefault();
        setCredentials({...credentials, [e.target.name]: e.target.value });
    };

    const handleConfirmation = async (e) => {
        e.preventDefault();
        try
        {
            const response = await fetch('https://juliandi.azurewebsites.net/api/login',
                { method:'POST', body: JSON.stringify(credentials) }
            );
            if (response.status!==200) throw new Error('Authentification Failed');
            const token = await response.text(); localStorage.setItem('ja-token', token);
            navigate('/home');
        }
        catch(err)
        {
            failure.current.style.display = 'block';
            console.error(err);
        };
    };

    useEffect(() => 
    {
        const [year, month, day] = [deadline.getFullYear(), deadline.getMonth() + 1, deadline.getDate()]
        date.current.innerText = `${day}.${month.toString().padStart(2, '0')}.${year}`;
    }, [])

    return (
        <JAThemeProvider>
            <Box
                onSubmit={handleConfirmation}
                component="form"
                sx={{
                    position:'absolute',
                    left: 0,
                    // minWidth:'30ch',
                    // minHeight:750,
                    height:'100%',
                    width: '100%',
                    display:'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundImage:'radial-gradient(white, #D8F1FF)',
                    padding: 1,
                    // 'h1': { m:1, width: '30ch'},
                    '& > :not(style)': { m: 1, width: '29ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Typography><h1 className="ja-title">Juliana &amp; Andreas</h1></Typography>
                <Typography><h2 className="ja-title">{texts[language][1]}</h2></Typography>
                <FormLabel component="legend"><span className='ja-title' ref={date}/></FormLabel>
                {/* <FormLabel component="legend">After the date the confirmations will be closed</FormLabel> */}
                <TextField 
                    id="outlined-basic" 
                    label={form[language][0]} 
                    variant="outlined" 
                    name="username"
                    onChange={handleCredentials} 
                    value={credentials.username} 
                    required
                />
                <TextField 
                    id="outlined-basic" 
                    label={form[language][1]} 
                    variant="outlined" 
                    type="password" 
                    name="password"
                    onChange={handleCredentials} 
                    value={credentials.password} 
                    required
                />
                <LanguageBar/>
                <Card ref={failure} style={{ 
                    position:'absolute',
                    top:0, 
                    left:0,
                    display:'none',
                    padding: 10, 
                    color: 'red',
                    backgroundColor:'rgba(255, 0, 0, 0.5)',    
                    width:200
                }}>
                {texts[language][0]} 
                </Card>
                <StyledButton variant="contained" type="submit">
                    {form[language][2]}
                </StyledButton>
            </Box>
        </JAThemeProvider>
    );
};