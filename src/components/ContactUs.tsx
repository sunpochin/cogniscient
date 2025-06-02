import React, { useState } from 'react'
import dotenv from 'dotenv'
dotenv.config()

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatusMessage('')
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    if (response.ok) {
      setStatusMessage('Message sent!')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatusMessage('Error sending message.')
    }
  }

  return (
    <section className="flex justify-center items-center mt-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Enter your question here"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Send
          </button>
          {statusMessage && (
            <p className="mt-4 text-center {statusMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}">
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default ContactUs
