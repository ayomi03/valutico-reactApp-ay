import React from 'react'
import Navbar from './component/Navbar/Navbar'
import MainSection from './component/MainSection'
import Hero from './component/Hero/Hero'


function App() {
  return (
    <div>
        <Navbar />
        <MainSection>
            <Hero/>
        </MainSection>
    </div>
  )
}

export default App

