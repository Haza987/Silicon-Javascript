import React from 'react'
import Header from './components/Header'
import Hero from './components/main-components/Hero'
import Brands from './components/main-components/Brands'
import Features from './components/main-components/Features'
import HDIW from './components/main-components/HDIW'
import Info from './components/main-components/Info'
import Review from './components/main-components/Review'
import Faq from './components/main-components/Faq'
import Subscribe from './components/main-components/Subscribe'
import Footer from './components/Footer'

const App = () => {
  return (
  <>
  <Header />

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

  <Footer />
  </>

  )
}

export default App