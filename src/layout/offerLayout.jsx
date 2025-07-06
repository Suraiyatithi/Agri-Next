import React from 'react';
import OfferBanner from '../Page/Offer/Offerbanner';
import FeaturedDeals from '../Page/Offer/FeatureDeals';
import CouponCard from '../Page/Offer/CoupponCard';


const OfferPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
     <OfferBanner></OfferBanner>
    <FeaturedDeals></FeaturedDeals>
    <CouponCard></CouponCard>
    </div>
  );
};

export default OfferPage;
