import React from 'react';
import Header from '../home/Header';
import Top from '../home/Top';
import Banner from '../home/Banner';
import InfoSection from '../home/InfoSection';
import Offer from '../home/Offer';
import LatestProject from '../home/LatestProject';
import ChooseUs from '../home/ChooseUs';
import Footer from '../home/Footer';
import TopFooter from '../home/TopFooter';
import NesAnsArticles from '../home/NesAnsArticles';
import AllPro from '../Product/AllPro';
import HeroSection from '../home/HeroSection';


const Main_layout = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoSection></InfoSection>
             <HeroSection></HeroSection>
          
            <ChooseUs></ChooseUs>
        <Offer></Offer>
            <LatestProject></LatestProject>
            <NesAnsArticles></NesAnsArticles>
            <TopFooter></TopFooter>
          
          
        </div>
    );
};

export default Main_layout;