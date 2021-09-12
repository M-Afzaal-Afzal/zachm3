import * as React from 'react';
import {Box} from "@mui/material";
import HeroSection from "../src/components/home/HeroSection";
import ImagesSection from "../src/components/home/ImagesSection";
import IntroSection from "../src/components/home/IntroSection";
import RoadmapSection from "../src/components/home/RoadmapSection";
import RaritySection from "../src/components/home/RaritySection";
import GiveBackSection from "../src/components/home/GiveBackSection";
// import {AppBar, Box, Stack, Toolbar} from "@mui/material";

export default function Index() {

    return (
        <Box>
            <HeroSection/>
            <Box sx={{background: (theme) => theme.palette.primary.main}} pt={'3rem'}>
                <ImagesSection/>
            </Box>
            <Box>
                <IntroSection/>
            </Box>
            <Box>
                <ImagesSection/>
            </Box>
            <Box>
                <RoadmapSection/>
            </Box>
            <Box>
                <RaritySection/>
            </Box>

            <Box>
                <GiveBackSection/>
            </Box>

        </Box>
    );
}
