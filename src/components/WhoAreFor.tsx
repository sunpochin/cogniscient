interface WhoAreForProps {
  top?: string
  left?: string
}

const WhoAreFor: React.FC<WhoAreForProps> = ({
  top = '136.378rem',
  left = '17rem',
}) => {
  return (
    <div
      className="absolute leading-[2.222rem] font-semibold inline-block w-[35.789rem] h-[16.283rem]"
      style={{ top, left }}
    >
      <div className="mr-4 text-[2rem] font-semibold inline-block w-[50.444rem] h-[4.556rem]">
        Who are Cognition-Centered AI UX For?
      </div>
      We are currently seeking reference clients to help refine our offerings.
      You will receive comprehensive consulting services, including research,
      design, and technical integration—at no cost(*). All we ask for is
      feedback, and, if you&apos;re happy with our efforts,
    </div>
  )
}

export default WhoAreFor
