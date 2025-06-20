import React from 'react';
import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterox from '../components/NewsLetterox';


const Home = () => {
  return (
    <div >
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <NewsLetterox />
    </div>
  )
}

export default Home;