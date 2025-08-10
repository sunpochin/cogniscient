/**
 * 「我們的服務」區塊。
 * 概述所提供的服務內容和方法論。
 */
import { Typography } from '@mui/material';

export function ServicesSection() {
  return (
    <section className="text-center max-w-4xl w-full">
      <Typography variant="h2" className="text-3xl md:text-4xl font-semibold mb-6">
        Our Services
      </Typography>
      <Typography className="text-lg">
        Our unique methodology begins with detailed one-on-one user studies
        (sometimes called &quot;protocol analysis&quot;) and brings in statistical and
        computational modeling. We are recognized leaders in the application of
        computational modeling to UX analysis. We cover the full product
        lifecycle—strategic opportunity mapping, evidence‑based UX research,
        rapid prototyping of intelligent interactions, and rigorous
        human‑in‑the‑loop evaluation.
      </Typography>
    </section>
  );
}
