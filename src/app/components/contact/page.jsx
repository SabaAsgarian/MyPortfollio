"use client"
import React, { useEffect, useState } from 'react'
import Swiper from '../swipersecond'
import Link from 'next/link'
import { Box } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loading from '../img/lodgo.png'
import Image from 'next/image';
import Comment from '../comment'
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
          <Image src={loading} alt="Loading"  priority />
        </div>
      </>
    )// Your custom loading indicator
  }
  return (
    <div  className='h-auto bg-center bg-cover text-center *:text-white '>
      <div data-aos="fade-up"
        data-aos-duration="3000">
      <h3 className='h font-sr my-[5%]'>Let's Work Together</h3>
      <div className='flex justify-center'>
        <h1 className='font-hb text-[100px] mx-[5%]'>Say</h1>
        <div className='w-[15%] lg:w-[8%]'>
          <Swiper />
        </div>
        <h1 className='font-hb text-[100px] mx-[5%]'>Hi!</h1>
      </div>
      <Link href='mailto:computer.sabaa@gmail.com'>
        <h2 className='font-lor sm:text-[20px] lg:text-[50px] font-extrabold my-[5%] con'>computer.sabaa@gmail.com</h2>
      </Link>
      <Box sx={{display: 'flex', justifyContent:'center',marginBottom:'5%'}}>
        <Comment/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent:'center',marginBottom:'10%'}}>
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
    </div>
  )
}
