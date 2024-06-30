import React from 'react'
import Banner from '../components/Banner'
import BestsellerBooks from './FavoriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (
    <>
    <Banner/>
    <BestsellerBooks/>
    <FavBook/>
    <PromoBanner/>
    <OtherBooks/>
    <Review/>
    </>
  )
}

export default Home
