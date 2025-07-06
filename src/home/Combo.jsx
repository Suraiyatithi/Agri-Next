import React from 'react';
import WeatherCard from './Weathercard';
import TipsCarousel from './Tips';
const Combo = () => {
    return (
        <div className='bg-lime-500 '>
            <div className="p-12 m-12">
            <div className="flex justify-between pl-12 pr-12">
                <WeatherCard></WeatherCard>
                <TipsCarousel></TipsCarousel>
            </div>
            </div>
        </div>
    );
};

export default Combo;
