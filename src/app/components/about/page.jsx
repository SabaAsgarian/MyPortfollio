"use client"
import React, { useEffect, useState } from 'react'
import CardAbout from '../cardAbout'
import Image from 'next/image';
import loading from '../img/lodgo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
          <Image src={loading} alt="Loading" priority />
        </div>
      </>
    )// Your custom loading indicator
  }
  return (

    <div>
      <div data-aos="fade-up"
        data-aos-duration="3000">
           <CardAbout/>
      </div>
    </div>
  )
}
