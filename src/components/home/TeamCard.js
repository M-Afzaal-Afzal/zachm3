import React from 'react';
import {Box, Card, CardContent, Chip, Divider, Stack, Typography} from "@mui/material";
import Image from "next/image";

const TeamCard = ({imgSrc,name, description, isWanted}) => {
    return (
        <Card sx={{maxWidth: 300}}>
            <CardContent>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '15rem',
                    }}
                >
                    <Image src={imgSrc} layout={'fill'} objectFit={'cover'}/>

                </Box>

                <Stack sx={{
                    py: '1rem',
                }} direction={'row'} alignItems={'center'}
                       justifyContent={'space-between'}
                >

                    <Box>
                        <Typography fontSize={'1.5rem'} variant={'body1'} fontWeight={'bold'}>
                            {name}
                        </Typography>
                    </Box>

                    <Box>
                        {
                            isWanted && (
                                <Chip color={'secondary'} label={'wanted'}/>
                            )
                        }
                    </Box>

                </Stack>

                <Stack spacing={2} divider={<Divider/>}>

                    {
                        description.map(desc => (
                            <Box>
                                <Typography textAlign={'center'} variant={'body1'}>
                                    {desc}
                                </Typography>
                            </Box>
                        ))
                    }

                </Stack>

            </CardContent>
        </Card>
    );
};

export default TeamCard;