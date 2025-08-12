import { Typography } from '@mui/material'

function AboutUsSection() {
  return (
    <section>
      <Typography>
        <div className="text-[2rem] font-semibold">Cogniscient</div>
        <div className="font-semibold ml-0">
          <Typography component="span" sx={{ fontSize: '1.111rem' }}>
            is a consultancy working at the intersection of artificial
            intelligence and human-centered design. We apply deep expertise in
            cognitive science, machine learning, computer science, and
            mechanical engineering to advise your crafting of interactive
            AI-powered products that are intuitive, trustworthy, and efficient.
            Whether you’re pursuing conversational interfaces or semi-autonomous
            systems, we bridge the gap between a complex models and the nuanced
            way that people think, decide, and act.
          </Typography>
        </div>
      </Typography>
    </section>
  )
}

export default AboutUsSection
