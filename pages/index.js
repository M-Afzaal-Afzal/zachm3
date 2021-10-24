import * as React from 'react';
import {Box} from "@mui/material";
// import HeroSection from "../src/components/home/HeroSection";
import ImagesSection from "../src/components/home/ImagesSection";
// import IntroSection from "../src/components/home/IntroSection";
import RoadmapSection from "../src/components/home/RoadmapSection";
import RaritySection from "../src/components/home/RaritySection";
// import GiveBackSection from "../src/components/home/GiveBackSection";
// import MerchStoreSection from "../src/components/home/MerchStoreSection";
import FaqSection from "../src/components/home/FaqSection";
import TeamsSection from "../src/components/home/TeamsSection";
// import {AppBar, Box, Stack, Toolbar} from "@mui/material";

export default function Index() {

    return (
        <Box>
            {/*<HeroSection/>*/}

            {/*<Box>*/}
            {/*    <IntroSection/>*/}
            {/*</Box>*/}

            <Box sx={{
                minHeight: '100vh',
                display: 'grid',
                alignItems: 'center',
                 background: '#6950d0',
            }}>
                <ImagesSection/>
            </Box>
            <Box>
                <RoadmapSection/>
            </Box>
            <Box>
                <RaritySection/>
            </Box>

            {/*<Box>*/}
            {/*    <GiveBackSection/>*/}
            {/*</Box>*/}

            {/*<Box>*/}
            {/*    <MerchStoreSection/>*/}
            {/*</Box>*/}

            <Box>
                <FaqSection/>
            </Box>

            <Box>
                <TeamsSection/>
            </Box>

        </Box>
    );
}
