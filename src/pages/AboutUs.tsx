import { AboutCTA } from '@/components/AboutCTA'
import AboutFeatures from '@/components/AboutFeatures'
import { AboutHero } from '@/components/AboutIntro'
import AboutValues from '@/components/AboutValues'
import Footer from '@/components/Footer'
import { MeetTheTeam } from '@/components/MeetTheTeam'
import { MissionValues } from '@/components/MissionValues'
import Navbar from '@/components/Navbar'
import { SocialProof } from '@/components/SocialProof'
import React from 'react'
// import AboutStory from '@/components/AboutStory'

function AboutUs() {
  return (
    <>
    <Navbar />
    <div style={{ height: '5rem' }} aria-hidden="true" />
    <AboutHero />
    <AboutFeatures />
    {/* <AboutStory /> */}
    <MissionValues />
    <AboutValues />
    {/* <MeetTheTeam    /> */}
    {/* <SocialProof /> */}
    <AboutCTA />
    <Footer />
    </>
  )
}

export default AboutUs