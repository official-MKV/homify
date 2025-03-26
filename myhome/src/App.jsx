import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import NewListings from './components/NewListing'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <SearchSection/>
      <NewListings/>
      <AboutUs/>
    </div>
  )
}

export default App