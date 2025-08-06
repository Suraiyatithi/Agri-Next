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
import Chatbot from '../home/Chatbot/CHatbotui';
import WeatherCard from '../home/Weathercard';
import TipsCarousel from '../home/Tips';
import HomeFeatures from '../home/Homefeatures';
import Combo from '../home/Combo';
import ReviewsSection from '../home/ReviewSection';
import WeatherSuggestion from '../home/OpenWeather';


const Main_layout = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoSection></InfoSection>
             <HeroSection></HeroSection>
             {/* <WeatherCard></WeatherCard>
             <TipsCarousel></TipsCarousel> */}
             <WeatherSuggestion></WeatherSuggestion>
          <Chatbot></Chatbot>
          <HomeFeatures></HomeFeatures>
            <ChooseUs></ChooseUs>


        <Offer></Offer>
            <LatestProject></LatestProject>
            <ReviewsSection></ReviewsSection>
            <NesAnsArticles></NesAnsArticles>
            <TopFooter></TopFooter>
          
          
        </div>
    );
};

export default Main_layout;