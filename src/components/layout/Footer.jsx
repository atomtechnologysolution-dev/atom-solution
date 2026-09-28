import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PaperPlaneRight, ArrowRight, ShieldCheck, FileText } from '@phosphor-icons/react'
import logo from '../../assets/images/atom-logo.png'
import {
  footerCompanyLinks,
  footerResourcesLinks,
  footerServicesLinks,
  socialLinks
} from '../../data/footerLinks'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

function Footer() {
  return (
    <footer className="bg-brand-dark pt-0 pb-10 relative overflow-hidden flex flex-col">
      
      {/* Sliding Marquee / Swiper simulation for attention */}
      <div className="w-full bg-brand-orange py-4 overflow-hidden mb-16 flex whitespace-nowrap">
        <motion.div 
          className="flex gap-8 items-center font-heading font-bold text-white text-xl uppercase tracking-wider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {Array(10).fill("Let's Build Something Great").map((text, i) => (
            <span key={i} className="flex items-center gap-8">
              {text} <span className="w-2 h-2 rounded-full bg-white" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative blurred orb */}
      <div className="absolute -left-20 top-40 h-96 w-96 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6 lg:pr-8">
            <a href="/" className="inline-block" aria-label="Atom homepage">
              <img
                src={logo}
                alt="Atom Technology Solution"
                className="relative h-12 w-auto bg-white rounded-xl p-1.5 shadow-lg shadow-white/5"
              />
            </a>
            <p className="text-brand-text leading-relaxed">
              Atom Technology Solution helps ambitious businesses grow through custom web development, mobile apps, and data-driven digital marketing.
            </p>
            
            <form className="relative mt-2 group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Subscribe to newsletter" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                <PaperPlaneRight size={16} weight="fill" />
              </button>
            </form>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-6">
            <h3 className="mb-6 font-heading text-lg font-bold text-white flex items-center gap-2">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-brand-text transition-all hover:text-brand-orange inline-flex items-center group"
                    to={link.href}
                  >
                    <span className="relative flex items-center transition-transform duration-300 group-hover:translate-x-4">
                      <ArrowRight size={12} className="absolute -left-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="mb-6 font-heading text-lg font-bold text-white flex items-center gap-2">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerServicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-brand-text transition-all hover:text-brand-orange inline-flex items-center group"
                    to={link.href}
                  >
                    <span className="relative flex items-center transition-transform duration-300 group-hover:translate-x-4">
                      <ArrowRight size={12} className="absolute -left-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-6 font-heading text-lg font-bold text-white flex items-center gap-2">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {footerResourcesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-brand-text transition-all hover:text-brand-orange inline-flex items-center group"
                    to={link.href}
                  >
                    <span className="relative flex items-center transition-transform duration-300 group-hover:translate-x-4">
                      <ArrowRight size={12} className="absolute -left-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-brand-text transition-all hover:bg-brand-orange hover:text-white hover:-translate-y-1 shadow-lg"
                  href={social.href}
                  key={social.label}
                  aria-label={social.label}
                >
                  <Icon size={20} weight="fill" />
                </a>
              )
            })}
          </div>

          <p className="text-sm text-brand-text/70 text-center sm:text-left order-3 sm:order-2">
            &copy; {new Date().getFullYear()} Atom Technology Solution. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm order-2 sm:order-3">
            <Link
              className="text-brand-text/70 transition hover:text-brand-orange flex items-center gap-1"
              to="/privacy"
            >
              <ShieldCheck size={16} /> Privacy
            </Link>
            <Link
              className="text-brand-text/70 transition hover:text-brand-orange flex items-center gap-1"
              to="/terms"
            >
              <FileText size={16} /> Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
