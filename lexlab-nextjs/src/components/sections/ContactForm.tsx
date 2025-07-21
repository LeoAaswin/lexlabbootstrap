'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'

interface ContactFormProps {
  title?: string
  className?: string
}

export default function ContactForm({
  title = "Send Us Message",
  className = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <Divider />
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg rounded-xl p-8 lg:p-12">
            <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-8 text-center">
              {title}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-15 px-6 bg-transparent border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-15 px-6 bg-transparent border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-15 px-6 bg-transparent border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-15 px-6 bg-transparent border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-transparent border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:border-primary transition-colors resize-none"
                required
              ></textarea>
              
              <div className="text-center">
                <Button type="submit" className="w-full lg:w-auto">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Divider />
    </section>
  )
}