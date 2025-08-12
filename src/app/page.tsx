/**
 * 首頁的主要進入點。
 * 這個元件負責組合並渲染構成首頁的各個區塊(Section)元件。
 */
'use client'
import type { NextPage } from 'next'
import { useCallback } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import NavBar from '../components/Navbar'
// import ClientStoriesCarousel from '../components/client-stories-carousel';
import AboutCogniscient from '../components/AboutCogniscient'
import SideDecoration from '../components/side-decoration'
import WhatIsAIUX from '../components/WhatIsAIUX'
import WhoAreAIUXFor from '../components/WhoAreAIUXFor'
import StartYourJourney from '../components/StartYourJourney'
import OurServices from '../components/OurServices'
import WhoAreWe from '../components/WhoAreWe'
import ContactForm from '../components/ContactForm'

const MacBookPro162: NextPage = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 3" to the project
  }, [])

  // <Box className="w-full relative h-[338.889rem] text-left text-[1.111rem] text-[#000] font-[Montserrat]">

  return (
    <Box className="w-full relative text-left text-[1.111rem] text-[#000] font-[Montserrat]">
      <div className="">
        <NavBar />
      </div>
      {/* <Box className="mt-80">
        <ClientStoriesCarousel />
      </Box> */}
      <div className="">
        <SideDecoration />
      </div>
      <Image
        className="absolute top-[0rem] left-[5.611rem] w-[10.556rem] h-[10.556rem] object-cover"
        width={190}
        height={190}
        sizes="100vw"
        alt=""
        src="/cogniscient.png"
      />
      <div className="mt-30 w-4/4 relative z-10">
        <AboutCogniscient />
        {/* 讓組件本身處理背景
         */}
      </div>{' '}
      <div className="mt-30 w-4/4 relative z-10">
        <WhatIsAIUX />
      </div>
      <div className="mt-30 w-4/4 relative z-10">
        <WhoAreAIUXFor />
      </div>
      {/* <div className="mt-30 w-4/4 relative z-10">
        <StartYourJourney />
      </div> */}
      <div className="mt-30 w-4/4 relative z-10">
        <OurServices />
      </div>
      <WhoAreWe />
      <ContactForm />
    </Box>
  )
}

export default MacBookPro162
