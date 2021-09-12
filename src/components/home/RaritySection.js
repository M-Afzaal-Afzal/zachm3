import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Image from 'next/image';
import HeadingWithDescription from "../common/HeadingWithDescription";
import RarityImageSection from "./RarityImageSection";

const RaritySection = () => {
    return (
        <Box py={'6rem'} sx={{
            background: (theme)=> theme.palette.secondary.main,
        }}>


                <Container maxWidth={'xxl'}>
                    <Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} xl={6}>
                                <Box sx={{
                                    width:'100%',
                                    position: 'relative',
                                    // height: '10rem',
                                    minHeight: '30rem',
                                    height: '100%',
                                }}>
                                    <Image src={'/home/rarity_special.png'}
                                           layout={'fill'}
                                            objectFit={'contain'}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} xl={6} sx={{
                                mt: {
                                    xs: '2rem',
                                    xl: 0,
                                }
                            }}>
                                <Box sx={{display: 'grid', placeContent: 'center', height: '100%'}}>

                                    <HeadingWithDescription
                                        heading={'Rarity'}
                                        headingLeft={true}
                                        sx={{color: '#fff'}}
                                        description={[
                                            'Fangsters got that drip. Each Fangster is comprised of head, face, body, fur and background traits. Each reflecting their personalities.',
                                            'When going out at night to throw parties or just hangin\' in the back alley, they express themselves through their style. Their traits can be common, uncommon, rare or mythic. Some are doper than others, but they\'re all fit for a Fangster.',
                                            'Of course every gang has their leaders, so some Fangsters are Special - 1/1 editions, meaning no one’s ever gonna bite their toes.',
                                            'You’ll hear them howl in the streets at night about who’s got the most sauce.'
                                        ]}
                                    />

                                </Box>
                            </Grid>

                        </Grid>
                    </Box>

                    <Box py={'4rem'}>
                        <RarityImageSection/>
                    </Box>

                </Container>

        </Box>
    );
};

export default RaritySection;