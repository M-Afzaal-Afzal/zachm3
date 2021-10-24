import React from 'react';
import {Box, Container, IconButton, Stack} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
        }}>
            <Container maxWidth={'xxl'}>
                <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'} height={'70px'}>
                    {/* Left Side*/}
                    <Box sx={{color: '#fff'}}>
                        2021 Company Name
                    </Box>

                    {/* Right Icons*/}
                    <Box>
                        <Stack direction={'row'} spacing={.5}>
                            <IconButton sx={{
                                color: '#fff'
                            }}>
                                <FacebookIcon fontSize={'large'}/>
                            </IconButton>

                            <IconButton sx={{
                                color: '#fff'
                            }}>
                                <InstagramIcon fontSize={'large'}/>
                            </IconButton>

                            <IconButton sx={{
                                color: '#fff'
                            }}>
                                <TwitterIcon fontSize={'large'}/>
                            </IconButton>

                        </Stack>
                    </Box>

                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;