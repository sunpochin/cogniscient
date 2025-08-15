/**
 * Credit Page - Portfolio Developer Information
 * This page serves as a hidden credit page for portfolio purposes
 * Accessible at /credit for employers and portfolio reviewers
 */

'use client'

import Link from 'next/link'
import { useState } from 'react'

const CreditPage = () => {
  const [showTechDetails, setShowTechDetails] = useState(false)

  const techStack = [
    { name: 'Next.js 15.3.1', description: 'React framework with App Router' },
    { name: 'TypeScript', description: 'Type-safe JavaScript development' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Material-UI', description: 'React component library' },
    { name: 'Responsive Design', description: 'Mobile-first approach' },
    { name: 'Semantic HTML', description: 'SEO and accessibility optimized' }
  ]

  const features = [
    'Fully responsive design across all devices',
    'Semantic HTML structure for SEO',
    'Dark theme footer with professional styling',
    'Interactive navigation with mobile hamburger menu',
    'Dynamic content sections with proper routing',
    'Professional portfolio-ready codebase'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6 text-2xl font-bold">
            SP
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio Project Credits
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This professional website was developed as a portfolio demonstration project
          </p>
        </div>

        {/* Developer Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                SC
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Developed by Sun Po-Chin
              </h2>
              <p className="text-gray-600 mb-4">
                Full-Stack Developer & UI/UX Enthusiast
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="mailto:sunpochin@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </a>
                
                <a 
                  href="https://github.com/sunpochin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Project Purpose</h4>
              <p className="text-gray-600 mb-4">
                This website demonstrates professional front-end development skills through a complete, 
                production-ready business website for a fictional AI-UX consulting company.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">⭐ Key Features</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🛠️ Technical Stack</h4>
              <button
                onClick={() => setShowTechDetails(!showTechDetails)}
                className="mb-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                {showTechDetails ? 'Hide Details' : 'Show Technical Details'}
              </button>
              
              {showTechDetails && (
                <div className="space-y-3">
                  {techStack.map((tech, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-800">{tech.name}</h5>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {!showTechDetails && (
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Development Notes */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Highlights</h3>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              This project showcases modern web development practices including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Component-based architecture with reusable UI elements</li>
              <li>Responsive design principles for all screen sizes</li>
              <li>Semantic HTML for improved SEO and accessibility</li>
              <li>Modern CSS techniques with Tailwind utility classes</li>
              <li>TypeScript for type safety and better developer experience</li>
              <li>Performance optimization with Next.js Image component</li>
            </ul>
            <p className="text-sm text-gray-500">
              <strong>Note:</strong> This is a demonstration project created for portfolio purposes. 
              Cogniscient is a fictional company designed to showcase professional web development capabilities.
            </p>
          </div>
        </div>

        {/* Navigation Back */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Cogniscient Website
          </Link>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Made with <span className="text-red-500">❤️</span> and lots of ☕ for portfolio demonstration
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreditPage