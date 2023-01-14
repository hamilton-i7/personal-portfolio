import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient } from 'emailjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, email, message } = req.body
  const client = new SMTPClient({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  })

  try {
    await client.sendAsync({
      text: `From: ${email}.\n\n${message}`,
      from: `${name} <${process.env.EMAIL}>`,
      to: `Juan Hamilton <${process.env.EMAIL}>`,
      subject: `New message from ${name}`,
    })
    res.status(200).json({ message: 'Email sent😎' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error' })
  }
}
