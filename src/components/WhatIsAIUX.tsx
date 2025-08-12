'use client'

import { Typography } from '@mui/material'
import type { FC } from 'react'

/**
 * Reference client section component displaying information about seeking reference clients.
 */
const WhatIsAIUX: FC = ({}) => {
  return (
    <section>
      <div className={`text-[2rem] font-semibold`}>
        What’s Cognition-Centered AI UX?
      </div>
      <div className={`ml-4`}>
        <Typography variant="inherit">
          We are currently seeking reference clients to help refine our
          offerings. You will receive comprehensive consulting services,
          including research, design, and technical integration—at no cost(*).
          All we ask for is feedback, and, if you&apos;re happy with our
          efforts, permission to either show your logo on our web page, or to
          refer potential future clients to you for private recommendation. (*
          For reference clients we would only charge back expenses, such as
          travel if the work could not be carried out remotely ... And we always
          fly coach! :-)
        </Typography>
      </div>
    </section>
  )
}

export default WhatIsAIUX
