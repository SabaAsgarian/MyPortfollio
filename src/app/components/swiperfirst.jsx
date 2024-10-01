"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import './swiperfirst.css';
import Image from 'next/image';
import a from './img/me.png'
import b from './img/met.png'
import c from './img/a.png'

import { Autoplay } from 'swiper/modules'; {/* Ensure Autoplay is imported */ }
import '../globals.css'
export default function App() {
 
  return (
    <>
        <Swiper
    
      
        autoplay={{ delay: 3000 }}
     
        modules={[Autoplay]}
        className="mySwiper"

      >
        <SwiperSlide>
          <Image src={a} alt='img1' style={{background:'#ceced6'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={b} alt='img2' style={{background:'#ceced6'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={c} alt='img3' style={{background:'#ceced6'}}/>
        </SwiperSlide>
       

      </Swiper>
    </>
  );
}