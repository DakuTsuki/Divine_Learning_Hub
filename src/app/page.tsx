'use client'



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { useEffect } from 'react';
// ..


import Experince from "./Components/Experience/page";
import Hero from "./Components/Hero/page";
import Tracks from "./Components/Tracks/page";
import Reviews from './Components/Reviews/page'
import NewsLetter from './Components/NewsLetter/page';

export default function Home() {
  useEffect(()=>{
    const initAOS = async()=>{
      await import ('aos')
      AOS.init({
        duration:1000,
        easing: 'ease',
        once: true,
        mirror:false,
        anchorPlacement: 'top-center'
      })
    }

    initAOS()
  }, []);
  return <div className='overflow-x-hidden'>
    <Hero/>
    <Tracks/> 
    <Experince/>
    <Reviews/>
    <NewsLetter/>
      </div>;
}
