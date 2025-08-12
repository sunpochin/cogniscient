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
import AboutUsSection from '../components/AboutCogniscient'
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

  return (
    <Box className="w-full relative bg-[#fff] h-[338.889rem] text-left text-[1.111rem] text-[#000] font-[Montserrat]">
      <div className="mr-40">
        <NavBar />
      </div>
      {/* <Box className="mt-80">
        <ClientStoriesCarousel />
      </Box> */}

      <div className="z-1">
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
      <div className="mt-30 z-20">
        <AboutUsSection />
      </div>
      <div className="mt-10 ml-30 z-20">
        <WhatIsAIUX />
      </div>
      <div className="mt-10 ">
        <WhoAreAIUXFor />
      </div>
      <div className="mt-10 ">
        <StartYourJourney />
      </div>
      <div className="mt-10 ">
        <OurServices />
      </div>
      <WhoAreWe />
      <ContactForm />

      {/* <Box className="bg-[#dcebff]" />
      <div className="absolute top-[293.444rem] left-[21.339rem] text-[#5d85b9] inline-block w-[6.044rem] h-[1.261rem]">
        Name
      </div>
      <Box className="absolute top-[297.006rem] left-[20.411rem] bg-[#dcebff] w-[49.45rem] h-[3.144rem]" />
      <Box className="absolute top-[301.517rem] left-[20.411rem] bg-[#dcebff] w-[49.45rem] h-[20.083rem]" />
      <div className="absolute top-[297.95rem] left-[21.339rem] text-[#5d85b9] inline-block w-[6.044rem] h-[1.339rem]">
        Email
      </div>
      <div className="absolute top-[302.461rem] left-[21.339rem] text-[#5d85b9] inline-block w-[10.344rem] h-[1.261rem]">
        The message
      </div>
      <div className="absolute top-[322.306rem] left-[51.467rem] text-[0.667rem] text-[#5d85b9] inline-block w-[21.039rem] h-[0.789rem]">
        You will receive a copy of the message after you submit
      </div>
      <div className="absolute top-[309.95rem] left-[33.25rem] text-[1.333rem] font-semibold">
        We look forward to hear from you!
      </div>
      <div className="absolute top-[285.933rem] left-[20.411rem] text-[3.556rem] font-semibold">
        Contact Us
      </div> */}
    </Box>
  )
}

export default MacBookPro162
