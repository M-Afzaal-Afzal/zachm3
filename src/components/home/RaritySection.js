import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Image from 'next/image';
import HeadingWithDescription from "../common/HeadingWithDescription";
import RarityImageSection from "./RarityImageSection";

const RaritySection = () => {
    return (
        <Box id={'rarity'} py={'6rem'} sx={{
            background: (theme) => theme.palette.grey.main,
        }}>


            <Container maxWidth={'xxl'}>
                <Box>
                    <Grid container spacing={6}>

                        <Grid item xs={12} xl={6} sx={{
                            mt: {
                                xs: '2rem',
                                xl: 0,
                            }
                        }}>
                            <Box sx={{display: 'grid', placeContent: 'center', height: '100%'}}>

                                <HeadingWithDescription
                                    heading={'WHO ARE THE TINY TURTLES?\n'}
                                    sx={{color: '#fff'}}
                                    description={[
                                        `The Tiny Turtles are a collection made up of uniquely generated turtles flowing through
                                            the Solana Blockchain. There are 100+ traits all with their own rarities throughout the
                                            collection.`
                                    ]}
                                />

                            </Box>
                        </Grid>

                        <Grid item xs={12} xl={6}>
                            <Box sx={{
                                width: '100%',
                                position: 'relative',
                                // height: '10rem',
                                minHeight: '30rem',
                                height: '100%',
                            }}>
                                <Image src={'/home/cartoon.gif'}
                                       layout={'fill'}
                                       objectFit={'contain'}
                                />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>

                {/*<Box py={'4rem'}>*/}
                {/*    <RarityImageSection/>*/}
                {/*</Box>*/}
            </Container>
        </Box>
    );
};

export default RaritySection;