import { Typography } from '@mui/material'

interface StartYourJourneyProps {
  top?: string
  left?: string
}

const StartYourJourney: React.FC<StartYourJourneyProps> = ({
  top = '96.556rem',
  left = '41.506rem',
}) => {
  return (
    <div
      className="absolute leading-[2.222rem] font-semibold inline-block w-[39.439rem] h-[22.267rem]"
      style={{ top, left }}
    >
      <div className="absolute top-[163.572rem] left-[calc(50%_-_138.5px)] text-[2rem] font-semibold inline-block w-[50.444rem] h-[4.556rem]">
        Start Your Journey Today
      </div>

      <Typography className="!m-0" variant="inherit">
        We are currently seeking reference clients to help refine our offerings.
        You will receive comprehensive consulting services, including research,
        design, and technical integration—at no cost(*). All we ask for is
        feedback, and, if you&apos;re happy with our efforts, permission to
        either show your logo on our web page, or to refer potential future
        clients to you for private recommendation. (* For reference clients we
        would only charge back expenses, such as travel if the work could not be
        carried out remotely ... And we always fly coach! :-)
      </Typography>
    </div>
  )
}

export default StartYourJourney
