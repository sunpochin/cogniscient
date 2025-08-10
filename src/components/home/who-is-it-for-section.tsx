/**
 * 「服務對象」區塊。
 * 說明此服務適合哪些類型的客戶或專案。
 */
import { Typography } from '@mui/material';

export function WhoIsItForSection() {
  return (
    <section className="text-center max-w-4xl w-full">
      <Typography variant="h2" className="text-3xl md:text-4xl font-semibold mb-6">
        Who are Cognition-Centered AI UX For?
      </Typography>
      <Typography className="text-lg" variant="inherit">
        We are currently seeking reference clients to help refine our offerings.
        You will receive comprehensive consulting services, including research,
        design, and technical integration—at no cost(*). All we ask for is
        feedback, and, if you&apos;re happy with our efforts,
      </Typography>
    </section>
  );
}
