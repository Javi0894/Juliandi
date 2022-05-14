import React, { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { 
    Box, 
    TextField, 
    Button, 
    FormControlLabel, 
    Checkbox, 
    FormLabel 
} from '@mui/material';

export default function LoginForm()
{
    const deadline = new Date(2022, 5, 15);
    const [ credentials, setCredentials ] = useState(
        {
            username: '', password: ''
        }
    );

    const [ guests, setGuests ] = useState(null);

    const handleCredentials = (e) => 
    {
        e.preventDefault();
        setCredentials({...credentials, [e.target.name]: e.target.value });
    };

    const handleConfirmation = async (e) => {
        e.preventDefault();
        const obj = await (
            await fetch('https://juliandi.azurewebsites.net/api/confirmation/', 
            { method:'POST', body: JSON.stringify(credentials) })
        ).json();
        setGuests(obj);
    };

    const handleMainAttending = (e) => {
        setGuests({...guests, [e.target.name]: e.target.checked});
    };

    const handleCompanionAttending = (e) => {
        setGuests({...guests, companion: {...guests.companion, [e.target.name]: e.target.checked }});
    };

    const handleAttendingSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://juliandi.azurewebsites.net/api/attending/', 
            { 
                method:'POST', 
                body: JSON.stringify(
                    { 
                        username: credentials.username, 
                        password: credentials.password,
                        attending: guests.attending,
                        companion: guests.companion 
                    }
                ) 
            }
        )
    };

    return(
        <div 
            style={{
                backgroundImage: 'radial-gradient(white, yellow)', 
            }}
        >
            <Box
                onSubmit={handleConfirmation}
                component="form"
                sx={{
                    width: '100%',
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h2>Confirmation</h2>
                <FormLabel component="legend">Please confirm before {deadline.toLocaleDateString()}</FormLabel>
                <FormLabel component="legend">After the date the confirmations will be closed</FormLabel>
                <TextField 
                    id="outlined-basic" 
                    label="Username" 
                    variant="outlined" 
                    name="username"
                    onChange={handleCredentials} 
                    value={credentials.username} 
                    required
                />
                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                    name="password"
                    onChange={handleCredentials} 
                    value={credentials.password} 
                    required
                />
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </Box>
            { 
                guests &&
                <Box
                    onSubmit={handleAttendingSubmit}
                    component="form"
                    sx={{
                        width: '100%',
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} 
                                icon={<FavoriteBorder/>}
                                checked={guests.attending}
                                checkedIcon={<Favorite/>} 
                                onChange={handleMainAttending}
                                name="attending" 
                            />
                        }
                        label="Will you be attending?"
                        labelPlacement='start'
                    />
                    {
                        Object.keys(guests.companion).length > 0 && 
                        <>
                            <FormLabel component="legend">What about your companion?</FormLabel>  
                            {
                                Object.entries(guests.companion).map( (comp, i) => (
                                    <FormControlLabel 
                                        key={i}
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
                            </>
                    }
                    <Button variant="contained" type="submit">
                    Answer
                    </Button>
                </Box>
            }
        </div>   
    );
}