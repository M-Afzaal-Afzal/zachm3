import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";

const HeroSection = () => {
    return (
        <Box id={'about'} sx={{
            minHeight: '90vh',
            background: (theme) => theme.palette.primary.main,
            display: 'grid', placeContent: 'center'
        }}>

            <Container maxWidth={'xxl'}>
                <Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12} xl={6}>
                            <Box>
                                <video width={'100%'} height={'90%'} playsInline={true} autoPlay={true} loop={true}>
                                    <source src="https://fanggang.io/video/hero.mp4" type="video/mp4"/>
                                </video>
                            </Box>
                        </Grid>
                        <Grid item xs={12} xl={6} sx={{
                            order: {
                                xs: -5,
                                xl: 0
                            },
                            mt: {
                                xs: '2rem',
                                xl: 0,
                            }
                        }}>
                            <Box sx={{display: 'grid', placeContent: 'center', height: '100%'}}>

                                <Typography sx={{
                                    textAlign: {
                                        xs: 'center',
                                        xl: 'left',
                                    },
                                    mb: '1rem',
                                }} textAlign={'left'} fontWeight={'bold'} color={'#fff'}
                                            variant={'h1'}
                                >
                                    Fang Gang
                                </Typography>

                                <Typography sx={{
                                    textAlign: {
                                        xs: 'center',
                                        xl: 'left',
                                    },
                                    mb: '1rem',
                                }} color={'#fff'} variant={'body1'}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consectetur
                                    consequuntur distinctio dolor dolorem eius et incidunt inventore ipsam magnam maxime
                                    obcaecati, quam quibusdam, quis repellat sequi sunt, voluptas.
                                </Typography>

                                <Box sx={{
                                    textAlign: {
                                        xs: 'center',
                                        xl: 'left',
                                        mt: '2rem'
                                    }
                                }}>
                                    <Button variant={'contained'} color={'secondary'}>
                                        Click Me
                                    </Button>
                                </Box>

                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>

        </Box>
    );
};

export default HeroSection;