import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import StepWithDescription from "../common/StepWithDescription";
import HeadingWithDescription from "../common/HeadingWithDescription";
import Fade from 'react-reveal/Fade';


const RoadmapSection = () => {
    return (

        <Box id={'roadmap'} py={'6rem'} sx={{
            background: (theme) => theme.palette.primary.main,
        }}
        >
            <Container maxWidth={'xxl'}>
                <Box>
                    <Grid container>

                        <Grid item xs={12} xl={6}>
                            <Box>
                                <HeadingWithDescription
                                    heading={'Roadmap'}
                                    headingLeft={true}
                                    sx={{color: '#fff', position: 'relative'}}
                                    description={[]}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} xl={12} sx={{
                            zIndex: 10,
                        }}>
                            <Box sx={{display: 'grid', gridGap: '1.3rem', height: '100%'}}>

                                <Fade delay={200} duration={3000} left>

                                    <StepWithDescription
                                        heading={'10%'}
                                        description={'Giveaways and launch!!!'}
                                    />
                                    <StepWithDescription
                                        heading={'20%'}
                                        description={'Collab Fangsters by NFT artists - auctions and exclusive drops to holders'}
                                    />
                                    <StepWithDescription
                                        heading={'30%'}
                                        description={'1st charity donation chosen by community'}
                                    />
                                    <StepWithDescription
                                        heading={'40%'}
                                        description={'ETH and NFT giveaways to holders'}
                                    />
                                    <StepWithDescription
                                        heading={'50%'}
                                        description={'Premium Merch Store and 2nd charity donation chosen by community'}
                                    />
                                    <StepWithDescription
                                        heading={'60%'}
                                        description={'Premium Merch Store and 2nd charity donation chosen by community'}
                                    />
                                    <StepWithDescription
                                        heading={'70%'}
                                        description={'Premium Merch Store and 2nd charity donation chosen by community'}
                                    />
                                    <StepWithDescription
                                        heading={'80%'}
                                        description={'Premium Merch Store and 2nd charity donation chosen by community'}
                                    />
                                    <StepWithDescription
                                        heading={'90%'}
                                        description={'Premium Merch Store and 2nd charity donation chosen by community'}
                                    />
                                    <StepWithDescription
                                        heading={'100%'}
                                        description={'Premium Merch Store and 2nd charity donation chosen by community'}
                                    />
                                </Fade>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default RoadmapSection;