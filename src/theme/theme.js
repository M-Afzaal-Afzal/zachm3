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
                main: '#3a0ca3',
            },
            secondary: {
                main: '#f72585',
            },
            error: {
                main: red.A400,
            },
        },
    typography: {
        h1: {
            fontSize: '5rem',
        }
    }
    });

export default theme;
