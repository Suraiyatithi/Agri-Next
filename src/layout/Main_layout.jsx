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

const Main_layout = () => {
    return (
        <div>
            <Top></Top>
            <Header></Header>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <Offer></Offer>
            <ChooseUs></ChooseUs>
            <LatestProject></LatestProject>
            <NesAnsArticles></NesAnsArticles>
            <TopFooter></TopFooter>
            <Footer></Footer>
          
        </div>
    );
};

export default Main_layout;