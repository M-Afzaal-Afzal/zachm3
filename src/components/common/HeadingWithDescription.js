import React from 'react';
import {Box, Typography} from "@mui/material";

const HeadingWithDescription = ({description,heading, headingLeft, ...props}) => {
    return (
        <Box {...props}>
            <Typography fontWeight={'bold'} mb={'1.5rem'}
                        textAlign={headingLeft ? 'left' : 'center'}
                        variant={'h1'}
            >
                {heading}
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