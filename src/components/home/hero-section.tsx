/**
 * 首頁的英雄區塊 (Hero Section)。
 * 顯示主要的標題和介紹性文字。
 */
import { Typography } from '@mui/material';

export function HeroSection() {
  return (
    <section className="text-center max-w-4xl w-full">
      <Typography
        variant="h1"
        className="font-semibold text-4xl md:text-5xl mb-4"
      >
        Cogniscient
      </Typography>
      <Typography component="p" className="text-lg md:text-xl">
        is a consultancy working at the intersection of artificial
        intelligence and human-centered design. We apply deep expertise in
        cognitive science, machine learning, computer science, and
        mechanical engineering to advise your crafting of interactive
        AI-powered products that are intuitive, trustworthy, and efficient.
        Whether you’re pursuing conversational interfaces or semi-autonomous
        systems, we bridge the gap between a complex models and the nuanced
        way that people think, decide, and act.
      </Typography>
    </section>
  );
}
