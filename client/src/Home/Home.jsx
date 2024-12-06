import React from 'react'
import Banner from '../component/Banner';
import BestSellingBook from './BestSellingBook';
import FavouriteBooks from './FavouriteBooks';
import PromoBanner from './PromoBanner';
import Otherbooks from './Otherbooks';
import Review from './Reviews';

function Home() {
  return (
    <div>
      <Banner/>
      <BestSellingBook/>
      <FavouriteBooks/>
      <PromoBanner/>
      <Otherbooks/>
      <Review/>
    </div>
  )
}

export default Home;