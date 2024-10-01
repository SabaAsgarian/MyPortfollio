import * as React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image'; 
import para from './img/ap.gif'

// Ensure you're using the Next.js Image component
import '../globals.css'
import Link from 'next/link';
export default function CardBig({  }) {
  return (
    <Card sx={{ transitionDuration: '1s',display: 'flex', boxShadow: 'none', flexDirection: { xs: 'column', sm: 'column', md: 'row', backgroundColor:'transparent',border:"1px solid yellow" } }} className='wor'>
       
      <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
        <CardContent>
          <Typography component="div" variant="h5" sx={{fontFamily:'sr',color:'white',fontSize:{xs:'20px',lg:'35px'}}} className=''>
            Admin Panel
          </Typography>
          <Typography  component="div" sx={{fontFamily:'sr', color: 'white',borderBottom:'1px solid #facf54',fontSize:{xs:'15px',lg:'20px'} }} className=' my-[10px]'>
           With Nextjs & Mui With Login(CrudFetchApi)
          </Typography>
         
        <Link href='https://github.com/SabaAsgarian/Admin-Panel' target='_blank'>
        <Button sx={{border:'1px solid white',fontFamily:'sr',width:'180px',backgroundColor:'transparent',color:'white',borderRadius:'20px',boxShadow:'10px 10px 100px 0 black)','&:hover': {
                                    backgroundColor:'#d9d9d9',color:'black'

                                }}} className='font-sr '>
            View Project
          </Button>
        </Link>
        </CardContent>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '50%' } }}>
      <Link href='https://github.com/SabaAsgarian/Admin-Panel' target='_blank'>
        <Image src={para} alt='para' style={{ width:'80%',height:'80%', borderRadius: '10px',border:"5px solid yellow" }} /> {/* Adjust width/height as needed */}
      </Link>
      </Box>
    </Card>
  );
}
