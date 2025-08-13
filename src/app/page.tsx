/**
 * 首頁的主要進入點。
 * 這個元件負責組合並渲染構成首頁的各個區塊(Section)元件。
 */
'use client'
import type { NextPage } from 'next'
import { Box } from '@mui/material'
import Image from 'next/image'
import NavBar from '../components/Navbar'
// import ClientStoriesCarousel from '../components/client-stories-carousel';
import AboutCogniscient from '../components/AboutCogniscient'
import SideDecoration from '../components/SideDecoration'
import WhatIsAIUX from '../components/WhatIsAIUX'
import WhoAreAIUXFor from '../components/WhoAreAIUXFor'
import StartYourJourney from '../components/StartYourJourney'
import OurServices from '../components/OurServices'
import WhoAreWe from '../components/WhoAreWe'
import ContactForm from '../components/ContactForm'
import WelcomeOverlay from '../components/WelcomeOverlay'
import GameOfLifeLogo from '../components/GameOfLifeLogo'

const HomePage: NextPage = () => {
  return (
    <main className="w-full relative text-left text-[1.111rem] text-[#000] bg-gray-50">
      <WelcomeOverlay />
      <header className="relative z-10">
        <NavBar />
      </header>
      {/* <section className="mt-80">
        <ClientStoriesCarousel />
      </section> */}

      <div className="z-1">
        <SideDecoration />
      </div>
      <Image
        className="absolute top-[3rem] left-[1rem] w-[10.556rem] h-[10.556rem] object-cover"
        width={190}
        height={190}
        sizes="100vw"
        alt="Cogniscient company logo"
        src="/cogniscient.png"
      />
      
      <section className="mt-40 flex justify-center">
        <GameOfLifeLogo />
      </section>
      
      <section className="mt-40 ml-20 mr-14 relative z-10">
        <AboutCogniscient />
      </section>
      
      <section className="mt-20 w-3/4 ml-auto mr-14 relative z-10">
        <WhatIsAIUX />
      </section>
      
      <section className="mt-20 ml-20 mr-14 relative z-10">
        <WhoAreAIUXFor />
      </section>
      
      <section className="mt-20 w-3/4 ml-auto mr-14 relative z-10">
        <StartYourJourney />
      </section>
      
      <section id="services" className="mt-20 ml-20 mr-14 relative z-10">
        <OurServices />
      </section>
      
      <section className="mt-20 w-3/4 ml-auto mr-14 relative z-10">
        <WhoAreWe />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  )
}

export default HomePage
