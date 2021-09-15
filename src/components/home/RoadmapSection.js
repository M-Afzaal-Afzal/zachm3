import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import StepWithDescription from "../common/StepWithDescription";
import HeadingWithDescription from "../common/HeadingWithDescription";
import Image from "next/image";

const RoadmapSection = () => {
    return (
        <Box sx={{
            position: 'relative',
        }}>

            <Image src={'/home/bg/3.png'}
                   layout={'fill'}
                   objectFit={'cover'}
            />

            <Box id={'roadmap'} py={'6rem'} sx={{
                background: (theme) => theme.palette.primary.main,
            }}
            >
                <Container maxWidth={'xxl'}>
                    <Box>
                        <Grid container spacing={6}>

                            <Grid item xs={12} xl={6}>
                                <Box>
                                    <HeadingWithDescription
                                        heading={'Roadmap'}
                                        headingLeft={true}
                                        sx={{color: '#fff', position: 'relative'}}
                                        description={[
                                            'A lot of our plans are long term, so they will happen repeatedly and along the way, while we build the community and grow together. Collaborations is one of the wildest perks. Happening through exclusive airdrops for holders or special pieces auctioned within the collection, these will make Fang Gang connect with big names in the NFT community such as:',
                                            'PixelHans, dubbed the \'Son of NFTs\'; FatBaby, supreme artist extraordinaire; and CryptoPervs, OG of the pervy pixels.',
                                            'These are 3 of the 10 collaboration artists that are confirmed as of now. We will continue to connect with artists and want to have the community be a part of this journey. Besides these huge events, there will also be ETH and Fang Gang NFT giveaways to holders and occasional challenges to keep the community engaged.',
                                        ]}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12} xl={6} sx={{
                                zIndex: 10,
                                mt: {
                                    xs: '2rem',
                                    xl: 0,
                                }
                            }}>
                                <Box sx={{display: 'grid', placeContent: 'center', height: '100%'}}>

                                    <StepWithDescription
                                        heading={'Step 1'}
                                        description={'Giveaways and launch!!!'}
                                    />
                                    <StepWithDescription
                                        heading={'Step 2'}
                                        description={'Collab Fangsters by NFT artists - auctions and exclusive drops to holders'}
                                    />
                                    <StepWithDescription
                                        heading={'Step 3'}
                                        description={'1st charity donation chosen by community'}
                                    />
                                    <StepWithDescription
                                        heading={'Step 4'}
                                        description={'ETH and NFT giveaways to holders'}
                                    />
                                    <StepWithDescription
                                        heading={'Step 5'}
                                        description={'Premium Merch Store and 2nd charity donation chosen by community'}
                                    />


                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default RoadmapSection;