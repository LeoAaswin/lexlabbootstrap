'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-bg shadow-lg' : 'bg-bg'
      } ${isMenuOpen ? 'bg-bg' : ''}`}
    >
      <div className="border-b border-white/15">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between py-2 lg:py-0 lg:h-28">
            {/* Logo */}
            <Link href="/" className="mr-8 xl:mr-12">
              <Image
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop"
                alt="LexLab"
                width={60}
                height={40}
                className="h-auto max-w-[60px]"
              />
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-0 w-7 h-7 text-2xl text-white border-0 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Navigation */}
            <div className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:justify-end w-full lg:w-auto absolute lg:relative top-full lg:top-auto left-0 lg:left-auto bg-bg lg:bg-transparent mt-2 lg:mt-0 py-2 lg:py-0`}>
              <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 xl:gap-11 px-4 lg:px-0">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-2 lg:py-6 xl:py-6 text-white font-semibold capitalize transition-colors duration-300 hover:text-primary ${
                        pathname === item.href ? 'text-primary' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 px-4 lg:px-0 lg:ml-8">
                {/* Search Button */}
                <button className="p-0 min-w-5 text-white hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="btn btn-primary inline-flex items-center gap-2 relative overflow-hidden group"
                >
                  <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-12">
                    Free Consultation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                  <span className="flex items-center gap-2 absolute opacity-0 translate-y-12 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Free Consultation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header