import React from 'react'
import Body from './Body'
import Product from './Product'
import HeroSection from './HeroSection'
import SkillsSection from './SkillsSection'

const FullSite = () => {
  return (
    <div>
        <HeroSection/>
        <Body/>
        <Product/>
        <SkillsSection/>
    </div>
  )
}

export default FullSite