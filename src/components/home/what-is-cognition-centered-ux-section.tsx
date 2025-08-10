/**
 * 「什麼是認知為中心的 AI UX」區塊。
 * 提供關於此服務核心概念的詳細說明。
 */
import { Typography } from '@mui/material';

export function WhatIsCognitionCenteredUxSection() {
  return (
    <section className="text-center max-w-4xl w-full">
      <Typography variant="h2" className="text-3xl md:text-4xl font-semibold mb-6">
        What’s Cognition-Centered AI UX?
      </Typography>
      <Typography className="text-lg" variant="inherit">
        We are currently seeking reference clients to help refine our
        offerings. You will receive comprehensive consulting services,
        including research, design, and technical integration—at no cost(*).
        All we ask for is feedback, and, if you&apos;re happy with our efforts,
        permission to either show your logo on our web page, or to refer
        potential future clients to you for private recommendation. (* For
        reference clients we would only charge back expenses, such as travel
        if the work could not be carried out remotely ... And we always fly
        coach! :-)
      </Typography>
    </section>
  );
}
