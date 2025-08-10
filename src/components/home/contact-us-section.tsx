/**
 * 「聯絡我們」區塊。
 * 提供一個表單讓訪客可以提交訊息。
 */
'use client'; // Forms are interactive
import { Typography, Box, TextField, Button } from '@mui/material';

export function ContactUsSection() {
  return (
    <section className="w-full max-w-2xl">
      <Typography variant="h2" className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Contact Us
      </Typography>
      <Box
        component="form"
        className="flex flex-col gap-4"
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="filled" sx={{ bgcolor: '#dcebff' }} />
        <TextField label="Email" variant="filled" sx={{ bgcolor: '#dcebff' }} />
        <TextField
          label="The message"
          variant="filled"
          multiline
          rows={8}
          sx={{ bgcolor: '#dcebff' }}
        />
        <Typography variant="caption" className="text-right text-gray-500">
          You will receive a copy of the message after you submit
        </Typography>
        <Box className="text-center mt-4">
          <Typography variant="h6" className="mb-4">
            We look forward to hear from you!
          </Typography>
          <Button variant="contained" size="large" sx={{ bgcolor: '#51a0ef' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </section>
  );
}
