import React from 'react'
import Navbar from '../components/navbar';
import { BlogImages, latestProducts, navData } from '../data';
import HeroSection from '../components/HeroSection';
import { heading } from '../data';
import { para } from '../data';
import About from '../components/About';
import Menu from '../components/Menu';
import { menuItems } from '../data';
import LatestProducts from '../components/LatestProducts';
import ContactUs from '../components/contactUs';
import OurBlogs from '../components/ourBlogs';
import Footer from '../components/Footer';

const Main = () => {
  
  return (
    <div className='bg-black text-white h-[100dvh]'>
      <Navbar navData={navData}/>
      <HeroSection headin={heading} para={para}/>
      <About/>
      <Menu menuItems={menuItems}/>
      <LatestProducts latestProducts={latestProducts}/>
      <ContactUs/>
      <OurBlogs BlogImages={BlogImages}/>
      <Footer navData={navData}/>
    </div>
  )
}
export default Main;
