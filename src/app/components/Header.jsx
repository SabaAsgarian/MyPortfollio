"use client"
import { Box, Button, Divider, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';




import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from './img/logo.png'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';




import { styled as muiStyled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';


import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItem from '@mui/material/ListItem';

import { useMediaQuery } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import './../globals.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const drawerWidth = '100%';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: 9999,
    position: 'static', // Change to static
    background: 'linear-gradient(50deg,#232323e8,black)',
    color: 'white',
    boxShadow: 'none',
    fontSize: '20px',




    fontFamily: 'sr'

}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    zIndex: '99999'
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        backgroundColor: 'black', // Set background color to white
        color: 'white', // Set text color to black
    },
    zIndex: '99999',
}));

export default function header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // const [displayText, setDisplayText] = React.useState('Shine With Rose'); // State for text display
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check if screen is small or medium

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <div>

            <AppBar >
                <Toolbar>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}

                        >
                            <Link href="https://github.com/SabaAsgarian" target='_blank' passHref>
                                <Image src={logo} alt="logo" height={100} width={150} />
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            <Link href="/" style={{
                                transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                    color: '#30efc1'

                                }
                            }} className='colorlink'>Home</Link>
                            <Link href="../components/about" style={{
                                transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                    color: '#30efc1'

                                }
                            }} className='colorlink'> About</Link>
                            <Link href="../components/skills" style={{
                                transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                    color: '#30efc1'

                                }
                            }} className='colorlink'> Skills </Link>
                            <Link href="../components/works" style={{
                                transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                    color: '#30efc1'

                                }
                            }} className='colorlink'>Work</Link>
                            <Link href="../components/contact" style={{
                                transitionDuration: '1s', color: 'white', margin: '0 15px', textDecoration: 'none', '&:hover': {
                                    color: '#30efc1'

                                }
                            }} className='colorlink'>Contact</Link>

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                            {isSmallScreen && (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}

                            <Link href='mailto:computer.sabaa@gmail.com' target='_blank' style={{ textDecoration: 'none', transitionDuration: '1s', color: 'black' }}>
                                <Button sx={{
                                    fontFamily: 'sr', transitionDuration: '.5s', backgroundColor: '#b2b3b3', borderRadius: '30px', color: 'black', width: '150px', height: '50px', '&:hover': {
                                        backgroundColor: '#d9d9d9'

                                    }
                                }}>Get In Touch</Button>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {isSmallScreen && (
                <StyledDrawer
                    variant="temporary"
                    anchor="top"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                            {theme.direction === 'rtl' ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List >
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/">
                                <ListItemText primaryTypographyProps={{ fontSize: '30px' }} primary="Home" sx={{
                                    transitionDuration: '1s', '&:hover': {
                                        color: '#30efc1'
                                    }

                                }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="../components/about">
                                <ListItemText primaryTypographyProps={{ fontSize: '30px' }} primary="About" sx={{
                                    transitionDuration: '1s', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="../components/skills">
                                <ListItemText primaryTypographyProps={{ fontSize: '30px' }} primary="Skills" sx={{
                                    transitionDuration: '1s', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton primaryTypographyProps={{ fontSize: '30px' }} component="a" href="../components/works">
                                <ListItemText primaryTypographyProps={{ fontSize: '30px' }} primary="Work" sx={{
                                    transitionDuration: '1s', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="../components/contact">
                                <ListItemText primaryTypographyProps={{ fontSize: '30px' }} primary="Contact" sx={{
                                    transitionDuration: '1s', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/">
                                <ListItemText sx={{
                                    transitionDuration: '1s', '&:hover': {
                                        color: '#30efc1'
                                    }
                                }}>

                                    <Box sx={{ display: 'flex', }}>
                                        <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr' target="_blank" >
                                            <Box sx={{ background: 'radial-gradient(circle at 33% 100%,#fed373 4%,#f15245 30%,#d92e7f 62%,#9b36b7 85%,#515ecf)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                                <InstagramIcon sx={{ color: 'white', ml: '2%' }} />
                                            </Box>
                                        </Link>
                                        <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank">
                                            <Box sx={{ backgroundColor: '#0077b5', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className=" mx-2 box-hover">
                                                <LinkedInIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                            </Box>
                                        </Link>
                                        <Link href='https://github.com/SabaAsgarian' target="_blank">
                                            <Box sx={{ backgroundColor: '#0088cc', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                                <GitHubIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                            </Box>
                                        </Link>
                                        <Link href='mailto:computer.sabaa@gmail.com'>
                                            <Box sx={{ backgroundColor: 'red', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                                <MailIcon sx={{ color: 'white', ml: '2%', }} /> {/* Set color here */}
                                            </Box>
                                        </Link>
                                    </Box>


                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </StyledDrawer>
            )}
        </div>
    )
}