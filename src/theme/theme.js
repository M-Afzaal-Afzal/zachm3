import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 480,
            lg: 768,
            xl: 1080,
            'xxl': 1200,
        }
    },
        palette: {
            primary: {
                main: '#6950d0',
            },
            secondary: {
                main: '#ed9419',
            },
            error: {
                main: red.A400,
            },
            grey: {
                main: '#262022'
            }
        },
    typography: {
        h1: {
            fontSize: '5rem',
        }
    }
    });

export default theme;
