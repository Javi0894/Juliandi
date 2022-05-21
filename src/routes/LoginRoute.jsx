import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, FormLabel } from '@mui/material';
import LanguageBar from '../utils/TopBar';
import { LanguageContext } from '../contexts';

export default function LoginRoute()
{
    const navigate = useNavigate();
    const deadline = new Date(2022, 5, 15);
    const {lanState} = useContext(LanguageContext);

    const language = lanState[0];
    const [ credentials, setCredentials ] = useState(
        {
            username: '', password: ''
        }
    );

    const texts = 
    {
        GER:['Glücklicher als je zuvor', 'Bestätigen Sie Ihre Anwesenheit vor'],
        ESP:['Felices por siempre', 'Confirmar su asistencia antes del'],
        ENG:['Happily ever after', 'Please confirm your assistance before']
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
            console.error(err);
        };
    };

    return (
        <Box
            onSubmit={handleConfirmation}
            component="form"
            sx={{
                position:'absolute',
                left: 0,
                height:'calc(100% - 10px)',
                width: 'calc(100% - 20px)',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage:'radial-gradient(white, yellow)',
                padding: 1,
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <h2>Juli &amp; Andy</h2>
            <h3>{texts[language][0]}</h3>
            <FormLabel component="legend">{texts[language][1]}&nbsp;{deadline.toLocaleDateString()}</FormLabel>
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
            <Button variant="contained" type="submit">
                {form[language][2]}
            </Button>
        </Box>
    );
};