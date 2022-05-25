import { Button } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

export const StyledButton = styled(Button)(
{
    textTransform: 'none',
    color:'black',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#FFD8E1',
    borderColor: '#FFD8E1',
    '&:hover': {
        boxShadow:'none',
        backgroundColor: '#FF87FC',
        borderColor: '#FF87FC',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const theme = createTheme({
    typography: { 
        fontFamily: ['"Dancing Script"', 'cursive'].join(',')
    }
});

export const JAThemeProvider = ({children}) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)