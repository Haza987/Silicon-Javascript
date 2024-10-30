import React from 'react'
import Hero from '../components/main-components/Hero'
import Brands from '../components/main-components/Brands'
import Features from '../components/main-components/FeaturesInfo'
import HDIW from '../components/main-components/HDIW'
import Info from '../components/main-components/Info'
import Review from '../components/main-components/Review'
import Faq from '../components/main-components/Faq'
import Subscribe from '../components/main-components/Subscribe'

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Brands />
        <Features />
        <HDIW />
        <Info />
        <Review />
        <Faq />
        <Subscribe />
      </main>
  </>
  )
}

export default Home