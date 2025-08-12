'use client'

import React, { useState } from 'react'

const WelcomeOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '500px',
        padding: '40px',
        backgroundColor: '#51A0EF',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px', // Optional: add some rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: add a shadow
      }}
    >
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '5px',
        }}
      >
        X
      </button>
      <p style={{ color: 'white', textAlign: 'center' }}>
        We are currently seeking reference clients to help refine our offerings.
        You will receive comprehensive consulting services, including research,
        design, and technical integration — at no cost(*). All we ask for is
        feedback, and, if you&apos;re happy with our efforts, permission to either
        show your logo on our web page, or to refer potential future clients to
        you for private recommendation. (* For reference clients we would only
        charge back expenses, such as travel if the work could not be carried
        out remotely ... And we always fly coach! :-)
      </p>
      <br />
      <p style={{ color: 'white', textAlign: 'center' }}>
        by _____, ______ and _______ Cogniscient
      </p>
    </div>
  )
}

export default WelcomeOverlay
