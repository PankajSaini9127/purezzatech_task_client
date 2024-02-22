import React from 'react';
import Header from '../utils/Header';
import Banner from '../utils/Banner';
import Features from '../utils/Features';
import PartsDetails from '../utils/PartsDetails';
import Portfolio from '../utils/Portfolio';

//custom css
import "../../assets/css/homepage.css";
import Footer from '../utils/Footer';


function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Features/>
    <PartsDetails/>
    <Portfolio />
    <Footer/>
    </>
  )
}

export default Home
