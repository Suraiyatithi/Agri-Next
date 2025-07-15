import React from 'react';
import LatestTechnologies from '../Features/LatestTechnologies';
import WeatherInsights from '../Features/WeatherInsights';
import SeasonalCropGuide from '../Features/season';

const FeatureLayout = () => {
    return (
        <div>
            <SeasonalCropGuide></SeasonalCropGuide>
            <LatestTechnologies></LatestTechnologies>
            <WeatherInsights></WeatherInsights>
        </div>
    );
};

export default FeatureLayout;