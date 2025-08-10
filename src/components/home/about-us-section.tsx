/**
 * 「關於我們」區塊。
 * 介紹團隊的背景和專業知識。
 */
import { Typography } from '@mui/material';

export function AboutUsSection() {
  return (
    <section className="text-center max-w-4xl w-full">
      <Typography variant="h2" className="text-3xl md:text-4xl font-semibold mb-6">
        Who Are Cogniscient
      </Typography>
      <Typography className="text-lg">
        Each of our analysts holds a PhD in cognitive science, computer science,
        mechanical engineering, or a related field. Some have served as senior
        faculty at leading research universities, some have personally launched
        multiple AI‑based startups, and all have experience consulting with
        organizations ranging from single person startups to large-scale
        government organzations. Our blend of academic rigor, entrepreneurial
        experience, and hard core engineering expertise informs every
        engagement.
      </Typography>
    </section>
  );
}
