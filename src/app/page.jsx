"use client"
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import CardBig from './components/card'
import loading from './components/img/lodgo.png'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Stack from './components/stack'
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

      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
          <CardBig/>
      </div>

    </div>
  )
}
