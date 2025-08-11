/**
 * 首頁的主要進入點。
 * 這個元件負責組合並渲染構成首頁的各個區塊 ( Section ) 元件。
 */
'use client'
import type { NextPage } from 'next'
import { useCallback } from 'react'
import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import NavBar from '../components/nav-bar'
import ClientStoryComponent from '../components/client-story-component'
import AboutUsSection from '../components/home/about-us-section'
import DecorativeCarousel from '../components/decorative-carousel'

const HomePage: NextPage = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 3" to the project
  }, [])

  return (
    <Box className="w-full relative bg-[#fff] h-[338.889rem] overflow-hidden text-left text-[1.111rem] text-[#000] font-[Montserrat]">
      <NavBar />
      <DecorativeCarousel />
      <Image
        className="absolute top-[0rem] left-[5.611rem] w-[10.556rem] h-[10.556rem] object-cover"
        width={190}
        height={190}
        sizes="100vw"
        alt=""
        src="/cogniscient.png"
      />
      <div className="mt-180 w-4/5 mx-auto">
        <AboutUsSection />
      </div>
      <div className="absolute top-[166.883rem] left-[41.694rem] leading-[2.222rem] font-semibold inline-block w-[39.25rem] h-[16.283rem]">
        <Typography className="!m-0" variant="inherit">
          We are currently seeking reference clients to help refine our
          offerings. You will receive comprehensive consulting services,
          including research, design, and technical integration—at no cost(*).
          All we ask for is feedback, and, if you&apos;re happy with our
          efforts, permission to either show your logo on our web page, or to
          refer potential future clients to you for private recommendation. (*
          For reference clients we would only charge back expenses, such as
          travel if the work could not be carried out remotely ... And we always
          fly coach! :-)
        </Typography>
      </div>
      <div className="absolute top-[136.378rem] left-[17rem] leading-[2.222rem] font-semibold inline-block w-[35.789rem] h-[16.283rem]">
        We are currently seeking reference clients to help refine our offerings.
        You will receive comprehensive consulting services, including research,
        design, and technical integration—at no cost(*). All we ask for is
        feedback, and, if you&apos;re happy with our efforts,
      </div>
      <div className="absolute top-[96.556rem] left-[41.506rem] leading-[2.222rem] font-semibold inline-block w-[39.439rem] h-[22.267rem]">
        <Typography className="!m-0" variant="inherit">
          We are currently seeking reference clients to help refine our
          offerings. You will receive comprehensive consulting services,
          including research, design, and technical integration—at no cost(*).
          All we ask for is feedback, and, if you&apos;re happy with our
          efforts, permission to either show your logo on our web page, or to
          refer potential future clients to you for private recommendation. (*
          For reference clients we would only charge back expenses, such as
          travel if the work could not be carried out remotely ... And we always
          fly coach! :-)
        </Typography>
      </div>
      <div className="absolute top-[132.117rem] left-[calc(50%_-_567.5px)] text-[2rem] font-semibold inline-block w-[50.444rem] h-[4.556rem]">
        Who are Cognition-Centered AI UX For?
      </div>
      <div className="absolute top-[93.5rem] left-[calc(50%_-_136px)] text-[2rem] font-semibold inline-block w-[50.444rem] h-[4.556rem]">
        What’s Cognition-Centered AI UX?
      </div>
      <div className="absolute top-[163.572rem] left-[calc(50%_-_138.5px)] text-[2rem] font-semibold inline-block w-[50.444rem] h-[4.556rem]">
        Start Your Journey Today
      </div>
      <div className="absolute top-[198.444rem] left-[calc(50%_-_567.5px)] text-[2rem] font-semibold inline-block w-[50.444rem] h-[4.556rem]">
        Our Services
      </div>
      <div className="absolute top-[203rem] left-[16.472rem] font-semibold inline-block w-[60.667rem] h-[10.278rem]">
        Our unique methodology begins with detailed one-on-one user studies
        (sometimes called &quot;protocol analysis&quot;) and brings in
        statistical and computational modeling. We are recognized leaders in the
        application of computational modeling to UX analysis. We cover the full
        product lifecycle—strategic opportunity mapping, evidence‑based UX
        research, rapid prototyping of intelligent interactions, and rigorous
        human‑in‑the‑loop evaluation.
      </div>
      <div className="absolute top-[256.506rem] left-[16.794rem] font-semibold inline-block w-[59.372rem] h-[10.278rem]">
        Each of our analysts holds a PhD in cognitive science, computer science,
        mechanical engineering, or a related field. Some have served as senior
        faculty at leading research universities, some have personally launched
        multiple AI‑based startups, and all have experience consulting with
        organizations ranging from single person startups to large-scale
        government organzations. Our blend of academic rigor, entrepreneurial
        experience, and hard core engineering expertise informs every
        engagement.
      </div>
      <Box
        className="absolute top-[230.656rem] left-[16.794rem] bg-[#51a0ef] w-[59.333rem] h-[20.478rem] cursor-pointer"
        onClick={onRectangleClick}
      />
      <div className="absolute top-[223.678rem] left-[calc(50%_-_573px)] text-[2rem] font-semibold inline-block w-[50.444rem] h-[4.556rem]">{`Who Are Cogniscient `}</div>
      <Box className="absolute top-[292.5rem] left-[20.411rem] bg-[#dcebff] w-[22.283rem] h-[3.144rem]" />
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
      </div>
      <Box className="absolute top-[20.561rem] left-[-15.872rem] w-[127.744rem] h-[19.222rem]">
        <ClientStoryComponent />
        <ClientStoryComponent groupBoxLeft="32.278rem" />
        <ClientStoryComponent groupBoxLeft="64.556rem" />
        <ClientStoryComponent groupBoxLeft="96.833rem" />
      </Box>
    </Box>
  )
}

export default HomePage
