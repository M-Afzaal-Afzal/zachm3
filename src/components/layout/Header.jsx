import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
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

const Header = () => {

    const [itemToNavigate,setItemToNavigate] = useState(null);

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
    },[itemToNavigate])


    const linkClickHandler = (e) => {
        const elementId = e.target.innerText.toLowerCase();
        setItemToNavigate(elementId)
    }

    const theme = useTheme();

    return (
        <div>
            <AppBar>
                <Container maxWidth={'xxl'} disableGutters>

                    <Toolbar>
                        <Stack sx={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                               direction={'row'} component={'header'}
                        >
                            {/*Left Icons*/}
                            <Box fontSize={'1.5rem'}>
                                Logo
                            </Box>

                            <Stack sx={{
                                display: {
                                    xs: 'none',
                                    lg: 'block',
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

                            {/*    Right Icons*/}
                            <Box>
                                {/* Icons buttons on large screen*/}

                                <Stack sx={{
                                    display: {
                                        xs: 'none',
                                        lg: 'block',
                                    }
                                }} direction={'row'} spacing={.5}>
                                    <IconButton sx={{
                                        color: '#fff'
                                    }}>
                                        <FacebookIcon fontSize={'large'}/>
                                    </IconButton>

                                    <IconButton sx={{
                                        color: '#fff'
                                    }}>
                                        <InstagramIcon fontSize={'large'}/>
                                    </IconButton>

                                    <IconButton sx={{
                                        color: '#fff'
                                    }}>
                                        <TwitterIcon fontSize={'large'}/>
                                    </IconButton>

                                </Stack>

                                <Box sx={{
                                    display: {
                                        xs: 'block',
                                        lg: 'none',
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