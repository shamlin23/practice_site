import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter } from "react-router-dom";
import Hero from './Components/Hero'
import TopCategory from './Components/TopCategory'
import DealZone from './Components/DealZone'
import Exclusives from './Components/Exclusives'
import DayDeals from './Components/DayDeals'
import TrendingBanner from './Components/TrendingBanner'
import Reasons from './Components/Reasons'
import Footer from './Components/Footer'

function App() {
 

  return (
    <BrowserRouter>
   <div>
      <NavBar/>
      <Hero/>
      <TopCategory/>
      <DealZone/>
      <Exclusives/>
      <DayDeals/>
      <TrendingBanner/>
      <Reasons/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
