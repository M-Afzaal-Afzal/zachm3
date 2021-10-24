import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box, Button,
    Container, Divider,
    Drawer,
    IconButton,
    // ListItem,
    // ListItemButton,
    // ListItemText,
    Stack,
    Toolbar, useTheme
} from "@mui/material";
import OutlinedSecondaryButton from "../common/OutlinedSecondaryButton";
import DehazeIcon from '@mui/icons-material/Dehaze';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import {List} from "@mui/icons-material";
import DrawerOutlinedButton from "../common/DrawerOutlinedButton";
import Image from 'next/image';

const Header = () => {

    const [itemToNavigate, setItemToNavigate] = useState(null);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const links = [
        {
            id: '1',
            text: 'About',
        },
        {
            id: '2',
            text: 'roadmap',
        },
        {
            id: '3',
            text: 'rarity',
        },
        {
            id: '4',
            text: 'faq',
        }, {
            id: '5',
            text: 'team',
        },


    ]

    const drawerToggler = () => {
        setIsDrawerOpen(prevState => !prevState);
    }

    useEffect(() => {
        if (itemToNavigate) {
            document.getElementById(itemToNavigate.toString()).scrollIntoView({
                behavior: 'smooth',
            })
        }
    }, [itemToNavigate])


    const linkClickHandler = (e) => {
        const elementId = e.target.innerText.toLowerCase();
        setItemToNavigate(elementId)
    }

    const theme = useTheme();

    return (
        <div>
            <AppBar elevation={2} sx={{
                background: "#6950d0",
            }}>
                <Container maxWidth={'xxl'} disableGutters>

                    <Toolbar>
                        <Stack sx={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            display: 'flex',
                        }}
                               direction={'row'} component={'header'}
                        >

                            {/*Left Icons*/}
                            <Stack direction={'row'} spacing={2}>
                                {/* Logo */}
                                <Box>
                                    <Box pr={2} sx={{
                                        '& div': {
                                            maxWidth: '8rem !important',
                                            display: 'inline-block',
                                        }
                                    }}>
                                        {/*<Image priority layout={'intrinsic'} src={'/logo.png'} width={3840}*/}
                                        {/*       height={2160}/>*/}
                                        Logo
                                    </Box>
                                </Box>


                                <Stack sx={{
                                    display: {
                                        xs: 'none',
                                        xl: 'flex',
                                        alignItems: 'center',
                                    }
                                }} direction={'row'} spacing={1}>

                                    {
                                        links.map(link => (
                                            <OutlinedSecondaryButton key={link.id} onClick={linkClickHandler}>
                                                {link.text}
                                            </OutlinedSecondaryButton>
                                        ))
                                    }

                                </Stack>
                            </Stack>

                            {/*    Right Icons*/}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                {/* Icons buttons on large screen*/}

                                <Stack sx={{
                                    display: {
                                        // xs: 'none',
                                        xl: 'block',
                                    }
                                }} direction={'row'} spacing={.5}>
                                    <Button variant={'contained'} color={'secondary'}>
                                        Connect to wallet
                                    </Button>
                                    {/*<IconButton sx={{*/}
                                    {/*    color: '#fff'*/}
                                    {/*}}>*/}
                                    {/*    <FacebookIcon fontSize={'large'}/>*/}
                                    {/*</IconButton>*/}

                                    {/*<IconButton sx={{*/}
                                    {/*    color: '#fff'*/}
                                    {/*}}>*/}
                                    {/*    <InstagramIcon fontSize={'large'}/>*/}
                                    {/*</IconButton>*/}

                                    {/*<IconButton sx={{*/}
                                    {/*    color: '#fff'*/}
                                    {/*}}>*/}
                                    {/*    <TwitterIcon fontSize={'large'}/>*/}
                                    {/*</IconButton>*/}

                                </Stack>

                                <Box sx={{
                                    display: {
                                        xs: 'block',
                                        xl: 'none',
                                    }
                                }}>
                                    <IconButton onClick={drawerToggler} sx={{color: '#fff'}}>
                                        <DehazeIcon fontSize={'large'}/>
                                    </IconButton>
                                </Box>
                            </Box>

                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            {/*    Side Drawer*/}

            <Drawer
                anchor={'left'}
                open={isDrawerOpen}
                onClose={drawerToggler}
            >
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={drawerToggler}
                    onKeyDown={drawerToggler}
                >
                    <Box sx={{
                        width: '100%',
                        height: '5rem',
                        display: 'grid',
                        placeContent: 'center',
                        fontSize: '1.5rem',
                    }}>
                        LOGO
                    </Box>

                    <Divider/>

                    {
                        links.map(({text, id}) => (
                            <Box key={id}>
                                <DrawerOutlinedButton onClick={linkClickHandler} size={'large'} fullWidth>
                                    {text}
                                </DrawerOutlinedButton>
                                <Divider/>
                            </Box>
                        ))
                    }

                </Box>
            </Drawer>

            {/*     Header Bottom Spacing*/}
            <Box sx={{
                ...theme.mixins.toolbar,
                '@media (min-width: 0px) and (orientation: landscape)': {
                    minHeight: '64px',
                }
            }}/>

        </div>
    );
};

export default Header;