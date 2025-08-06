import React from 'react';
import LatestTechnologies from '../Features/LatestTechnologies';
import WeatherInsights from '../Features/WeatherInsights';
import SeasonalCropGuide from '../Features/season';
import WeatherSuggestion from '../home/OpenWeather';

const FeatureLayout = () => {
    return (
        <div>
            <SeasonalCropGuide></SeasonalCropGuide>
           <WeatherSuggestion></WeatherSuggestion>
        </div>
    );
};

export default FeatureLayout;