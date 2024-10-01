"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Cardone from '../cardtwo'
import Cardtwo from '../cardthree'
import Cardthree from '../cardfour'
import Cardfour from '../cardfive'
import Cardfive from '../cardsix'
import Cardsix from '../cardseven'
// import cool from '../img/cool.jpg'
import { Box, Button } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../globals.css'
import Link from 'next/link'
import loading from '../img/lodgo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);


  useEffect(() => {
    // Your page initialization code here
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="loading w-full h-full flex justify-center items-center text-center">
          <Image src={loading} alt="Loading" layout="responsive" priority />
        </div>
      </>
    )// Your custom loading indicator
  }
  return (
    <div className=' h-auto bg-center bg-cover text-center '>
      <div data-aos="zoom-in">
        <h2 className='myTexttwo font-sr my-[5%]'>Selected Work</h2>
      </div>
      <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className='w-[80%] flex justify-center'>
          <Cardone />
        </div>



      </Box>
      <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="700"
          data-aos-duration="500" className='w-[80%] flex justify-center'>
          <Cardtwo />
        </div>
      </Box>
      <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
        <div data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1100"
          data-aos-duration="600" className='w-[80%] flex justify-center'>
          <Cardthree />
        </div>
      </Box>
      <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1500"
          data-aos-duration="700" className='w-[80%] flex justify-center'>
          <Cardfour />
        </div>
      </Box>
      <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
        <div data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1700"
          data-aos-duration="800" className='w-[80%] flex justify-center'>
          <Cardfive />
        </div>
      </Box>
      <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="2000"
          data-aos-duration="700" className='w-[80%] flex justify-center'>
          <Cardsix />
        </div>
      </Box>
      <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', }}>
        <Link href='https://github.com/SabaAsgarian' target='_blank'>
          <Button sx={{
            border: '1px solid white', fontFamily: 'sr', width: '250px', height: '50px', backgroundColor: 'transparent', color: 'white', borderRadius: '40px', boxShadow: '10px 10px 100px 0 black)', '&:hover': {
              backgroundColor: '#d9d9d9', color: 'black'

            }
          }} className='font-sr '>
            View More Projects
          </Button>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', justifyContent:'center',marginTop: '5%',marginBottom: '20%' }}>
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
    </div>
  )
}
