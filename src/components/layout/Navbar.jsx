import { List, X } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/images/atom-logo.png'
import { navLinks } from '../../data/navLinks'
import Button from '../ui/Button'
import { cn } from '../../lib/utils'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-brand-dark/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
    )}>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="/" className="flex items-center" aria-label="Atom homepage">
          {/* Logo can have subtle glow here */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-brand-orange blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img
              src={logo}
              alt="Atom Technology Solution"
              className="relative h-10 w-auto sm:h-12 bg-brand-orange rounded-md p-0.5"
            />
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              className="text-base font-medium text-brand-text transition hover:text-brand-orange"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button href="#cta" className="hidden lg:inline-flex px-6 py-3">
          Book Consultation
        </Button>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-brand-text transition hover:text-brand-orange lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-white/10 bg-brand-dark px-4 pb-5 shadow-xl sm:px-6 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-brand-text hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                  href={link.href}
                  key={link.label}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#cta" className="mt-4 w-full">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
