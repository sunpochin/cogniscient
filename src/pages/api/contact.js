// api/contact.js
/* global process */
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // 設置郵件發送器
    const transporter = nodemailer.createTransport({
      service: 'gmail', // 使用的郵件服務
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: message,
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Message sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ error: 'Failed to send message.' })
    }
  } else {
    // 只允許 POST 請求
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
