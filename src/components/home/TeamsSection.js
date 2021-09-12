import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import TeamCard from "./TeamCard";


const TeamsSection = () => {

    const temaData = [
        {
            name: 'Moca',
            imgSrc: '/home/1.jpg',
            isWanted: true,
            description: [
                'Artist, Design Whiz, Undercover Memelord',
                'Wanted for clowning on Juggalos',
            ],
        },
        {
            name: 'Sincos',
            imgSrc: '/home/2.jpg',
            isWanted: false,
            description: [
                'Artist, Design Whiz, Undercover Memelord',
                'Wanted for clowning on Juggalos',
            ],
        },
        {
            name: 'Junshi',
            imgSrc: '/home/3.jpg',
            isWanted: true,
            description: [
                'Artist, Design Whiz, Undercover Memelord',
                'Wanted for clowning on Juggalos',
            ],
        },
        {
            name: 'Steamedbun',
            imgSrc: '/home/4.jpeg',
            isWanted: false,
            description: [
                'Artist, Design Whiz, Undercover Memelord',
                'Wanted for clowning on Juggalos',
            ],
        },
    ]

    return (
        <Box id={'team'} sx={{
            background: (theme) => theme.palette.secondary.main,
            py: '6rem',
        }}>
            <Container maxWidth={'xxl'}>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    {
                        temaData.map(({name, description, imgSrc, isWanted}) => (
                            <Grid xs={12} md={6} lg={4} xl={3} item>
                                <Box display={'grid'} justifyContent={'center'}>
                                    <TeamCard
                                        name={name}
                                        imgSrc={imgSrc}
                                        description={description}
                                        isWanted={isWanted}
                                    />
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>

            </Container>
        </Box>
    );
};

export default TeamsSection;