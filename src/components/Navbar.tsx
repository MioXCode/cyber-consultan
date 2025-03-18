'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">CyberShield</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <button className="cyber-button bg-primary px-6 py-2 rounded-lg text-white font-semibold">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a href="#services" className="block hover:text-primary transition-colors">Services</a>
            <a href="#about" className="block hover:text-primary transition-colors">About</a>
            <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
            <button className="cyber-button w-full bg-primary px-6 py-2 rounded-lg text-white font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}