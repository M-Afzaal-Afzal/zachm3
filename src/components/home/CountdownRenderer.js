import {Box, Stack} from "@mui/material";
import {zeroPad} from "react-countdown";


const CountdownRenderer = ({days, hours, minutes, seconds, completed}) => {
    // if (completed) {
    //     // Render a completed state
    //     return <Completionist />;
    // } else {
    // Render a countdown
    return (
        <Box sx={{
            maxWidth: "30rem",
            mx: 'auto',
        }}>

        <Stack direction={'row'}
               component={'h1'}
               spacing={4}
               sx={{
                   color: "#fff",
                   mx: 'auto',
                   // fontWeight: 'bold',
                    justifyContent: {
                       xs: 'center',
                        'xl': 'space-between',
                    },
               }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span>
                    {zeroPad(days)}
                </span>
                <span>
                    DAYS
                </span>
            </Box>

            {/*<Box>:</Box>*/}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span>
                    {zeroPad(hours)}
                </span>
                <span>
                    HRS
                </span>
            </Box>

            {/*<Box>:</Box>*/}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span>
                    {zeroPad(minutes)}
                </span>
                <span>
                    MIN
                </span>
            </Box>

            {/*<Box>:</Box>*/}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <span>
                    {zeroPad(seconds)}
                </span>
                <span>
                    SEC
                </span>
            </Box>

        </Stack>

            <Stack direction={'row'}
                   component={'h1'}
                   spacing={4}
                   sx={{
                       color: "#fff",
                       mx: 'auto',
                       // fontWeight: 'bold',
                       justifyContent: {
                           xs: 'center',
                           'xl': 'space-between',
                       },
                   }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '110%',
                        background: '#c6fd0e',
                        borderRadius:'8px',
                    }}
                >
                <span>
                    MINT!
                </span>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '25%',
                        background: '#c6fd0e',
                        borderRadius:'8px',
                    }}
                >
                <span>
                    1
                </span>
                </Box>

            </Stack>

        </Box>
    );
    // }
};

export default CountdownRenderer;
