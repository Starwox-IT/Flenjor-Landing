import React from 'react';
import Hero from './Hero/Hero';
import Offer from './Offer/Offer';
import HomeCloser from './HomeCloser/HomeCloser';
import SetApart from './SetApart/SetApart';
import PowerBusiness from './PowerBusiness/PowerBusiness';
import Testimonials from './Testimonials/Testimonials';
import JoinCommunity from './JoinCommunity/JoinCommunity';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Offer />
      <HomeCloser />
      <SetApart />
      <PowerBusiness />
      <Testimonials />
      <JoinCommunity />
      {/* Other sections will be placed here */}
    </div>
  );
}

export default Home;