import React, { useState } from 'react'
import NavBar from './components/NavBar'
import HeroBanner from './components/HeroBanner'
import Footer from './components/Footer'
import StickyContainer from './components/StickyContainer'
import Test from './components/Test'
import PinEffect from './components/PinEffect'


function App() {

  return (
    <>
    <NavBar/>
    <HeroBanner/>
    <Test/>
    <StickyContainer/>

    <PinEffect/>
      <Footer/>
    </>
  )
}

export default App
