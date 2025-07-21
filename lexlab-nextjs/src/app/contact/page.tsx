'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
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

  const contactCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M39.6294 19.8746V5.09241H18.3906V42.1875H39.6294V27.4623" stroke="#E8BF96" strokeWidth="1.71875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.3888 42.1875H4.01172V19.3733H18.3888V42.1875Z" stroke="#E8BF96" strokeWidth="1.71875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0.859375 42.1875H43.1406" stroke="#E8BF96" strokeWidth="1.71875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Office Address',
      content: '3204EW, Van Lennepstraat 35, Rotterdam The Netherlands'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M38.5 10.3125L43.1406 14.9531V39.7031C43.1406 41.6016 41.6016 43.1406 39.7031 43.1406H4.29688C2.39843 43.1406 0.859375 41.6016 0.859375 39.7031V14.9531L5.5 10.3125" stroke="#E8BF96" strokeWidth="1.71875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42.8817 15.2113L21.9603 36.1328L1.13477 15.3073" stroke="#E8BF96" strokeWidth="1.71875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Email Us',
      content: 'We\'re usually replying within 24 hours\ninfo@lexlab.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M25.0449 0.86907C35.0231 0.86907 43.1408 8.98673 43.1408 18.9648" stroke="#E8BF96" strokeWidth="1.71875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25.0449 6.03899C32.1718 6.03899 37.9708 11.838 37.9708 18.9648" stroke="#E8BF96" strokeWidth="1.71875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Call Us',
      content: 'Talk to us and see how we can work together\n+1 800 000 000'
    }
  ]

  return (
    <div className="mt-16 lg:mt-28">
      {/* Breadcrumb */}
      <section className="relative bg-bg py-16 lg:py-24 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-bg/90"></div>
        <div className="absolute inset-0 bg-bg/90"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-white font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">
              Contact Us
            </h1>
            <nav className="flex items-center justify-center gap-2 text-white/80">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span>&gt;</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-bg rounded-xl p-8 lg:p-12">
              <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-8">Send Us Message</h3>
              
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
                
                <button
                  type="submit"
                  className="btn btn-primary w-full lg:w-auto"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-8 border-2 border-primary rounded-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-semibold text-heading mb-2">
                      {card.title}
                    </h4>
                    <p className="text-text whitespace-pre-line">
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="w-full h-64 md:h-96 lg:h-[500px] xl:h-[700px] bg-gray-200 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623010.4451754142!2d-2.374667852056729!3d52.41329919456007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0a98a6c1ed5df%3A0xf4e19525332d8ea8!2sEngland%2C%20UK!5e0!3m2!1sen!2sbd!4v1742162741888!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}