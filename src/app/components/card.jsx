"use client"
import * as React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import '../globals.css'
import SwiperFirst from './swiperfirst.jsx'
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Write from './write'
export default function CardBig({ }) {
    return (
        <Card sx={{border:'none', display: 'flex', boxShadow: 'none', flexDirection: { xs: 'column', sm: 'column', md: 'row' , background: 'transparent'} ,height:'fit'}} >

            <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
                <CardContent>
                    <h1 sx={{color:'custom',fontFamily:'sr',marginBottom:'2%'}} className='font-sr h'>
                        Saba Asgarian
                    </h1>
                    <Write style={{color:'white',fontFamily:'sr'}}/>
                    <Box>
                        <Box sx={{ display: 'flex',marginBottom:'5%',marginTop:'5%' }}>
                            <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr' target="_blank" >
                                <Box sx={{ background: 'radial-gradient(circle at 33% 100%,#fed373 4%,#f15245 30%,#d92e7f 62%,#9b36b7 85%,#515ecf)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'#000b0e' }} className="  box-hover">
                                    <InstagramIcon sx={{ color: 'white',  }} />
                                </Box>
                            </Link>
                            <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank">
                                <Box sx={{ backgroundColor: '#0077b5', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className=" mx-2 box-hover">
                                    <LinkedInIcon sx={{ color: 'white',  }} /> {/* Set color here */}
                                </Box>
                            </Link>
                            <Link href='https://github.com/SabaAsgarian' target="_blank">
                                <Box sx={{ backgroundColor: '#0088cc', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                    <GitHubIcon sx={{ color: 'white',  }} /> {/* Set color here */}
                                </Box>
                            </Link>
                            <Link href='mailto:computer.sabaa@gmail.com'>
                                <Box sx={{ backgroundColor: 'red', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                    <MailIcon sx={{ color: 'white',  }} /> {/* Set color here */}
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                    <Link href='https://github.com/SabaAsgarian' target="_blank">
                    <Button sx={{transitionDuration:'1s', width: '200px',height:'50px' ,backgroundColor: '#b2b3b3', color: 'black', borderRadius: '30px', boxShadow: '10px 10px 100px 0 black)',fontFamily:'sr' ,'&:hover': {
                                    backgroundColor:'#d9d9d9'

                                }}} className=''>
                        See More Projects
                    </Button>
                    </Link>
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '50%' } }}>
                <Box sx={{width:'80%',height:'85%',borderRadius: '10px'}}>
                <SwiperFirst/>
                </Box>
            </Box>
        </Card>
    );
}