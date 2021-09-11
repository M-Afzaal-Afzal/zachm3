import React, {useState} from 'react';
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

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const drawerToggler = () => {
        setIsDrawerOpen(prevState => !prevState);
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
                                <OutlinedSecondaryButton>
                                    About
                                </OutlinedSecondaryButton>
                                <OutlinedSecondaryButton>
                                    Roadmap
                                </OutlinedSecondaryButton>
                                <OutlinedSecondaryButton>
                                    Rarity
                                </OutlinedSecondaryButton>
                                <OutlinedSecondaryButton>
                                    Faq
                                </OutlinedSecondaryButton>
                                <OutlinedSecondaryButton>
                                    Team
                                </OutlinedSecondaryButton>
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
                                        <FacebookIcon fontSize={'medium'}/>
                                    </IconButton>

                                    <IconButton sx={{
                                        color: '#fff'
                                    }}>
                                        <InstagramIcon fontSize={'medium'}/>
                                    </IconButton>

                                    <IconButton sx={{
                                        color: '#fff'
                                    }}>
                                        <TwitterIcon fontSize={'medium'}/>
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
                    <DrawerOutlinedButton size={'large'} fullWidth>
                        About
                    </DrawerOutlinedButton>
                    <Divider/>

                    <DrawerOutlinedButton aria-selected={true} fullWidth>
                        Roadmap
                    </DrawerOutlinedButton>
                    <Divider/>

                    <DrawerOutlinedButton aria-selected={true} fullWidth>
                        Rarity
                    </DrawerOutlinedButton>
                    <Divider/>

                    <DrawerOutlinedButton aria-selected={true} fullWidth>
                        Faq
                    </DrawerOutlinedButton>
                    <Divider/>

                    <DrawerOutlinedButton aria-selected={true} fullWidth>
                        Team
                    </DrawerOutlinedButton>
                    <Divider/>
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