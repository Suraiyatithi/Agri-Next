import React from 'react';
import LatestTechnologies from '../Features/LatestTechnologies';
import WeatherInsights from '../Features/WeatherInsights';

const FeatureLayout = () => {
    return (
        <div>
            <LatestTechnologies></LatestTechnologies>
            <WeatherInsights></WeatherInsights>
        </div>
    );
};

export default FeatureLayout;