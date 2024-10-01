import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { Description } from '@mui/icons-material';
import '../globals.css'
const CustomCard = ({ image, title }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '100%', md: '20%' }, margin: '10px',backgroundColor:'transparent',border:'1px solid orange',boxShadow:'0 0 20px orange'}} className="my-10 page2">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110px', overflow:'hidden'}}>
                    <Image src={image} alt={title} width={100} height={100} style={{ objectFit: 'cover', }} className='big'/>
                </Box>
                <Typography variant="h6" sx={{cursor:'pointer',transitionDuration:'1s', textAlign: 'center', marginTop: '10px' ,fontFamily:'sr',fontSize:{xs:'15px',lg:'25px'},fontWeight:'bolder',color:'white','&:hover': {
                                    color:'orange'

                                }}} className='font-is font-extrabold'>
                    {title}
                </Typography>
                
            </CardContent>
        </Card>
    );
};

export default CustomCard;