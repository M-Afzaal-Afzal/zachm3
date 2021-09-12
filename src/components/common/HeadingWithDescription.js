import React from 'react';
import {Box, Typography} from "@mui/material";

const HeadingWithDescription = ({description,...props}) => {
    return (
        <Box {...props}>
            <Typography fontWeight={'bold'} mb={'1.5rem'}
                        textAlign={'center'}
                        variant={'h1'}
            >
                Fang Who?!
            </Typography>
            {
                description.map(desc => (
                    <Typography sx={{mb: '1rem'}} gutterBottom variant={'body1'}>
                        {desc}
                    </Typography>
                ))
            }

        </Box>
    );
};

export default HeadingWithDescription;