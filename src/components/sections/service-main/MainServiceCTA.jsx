import { motion } from 'framer-motion'
import { ArrowRight, Phone, EnvelopeSimple } from '@phosphor-icons/react'

function MainServiceCTA() {
  return (
    <section className="bg-brand-dark py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build Your <span className="text-brand-orange">Custom Project?</span>
        </motion.h2>
        <motion.p 
          className="text-brand-text text-lg mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's discuss how Atom Technology Solution can help you scale your business, generate quality leads, and create stunning digital experiences.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-brand-orange hover:bg-orange-600 shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
            Get a Free Consultation <ArrowRight className="ml-2" />
          </a>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-8 text-white border-t border-gray-800 pt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Phone className="text-xl" weight="regular" />
            </div>
            <div className="text-left">
              <span className="block text-xs text-gray-400">Have any questions?</span>
              <a href="tel:+916289571495" className="font-semibold hover:text-brand-orange transition-colors">+91 6289571495</a>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-800" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <EnvelopeSimple className="text-xl" weight="regular" />
            </div>
            <div className="text-left">
              <span className="block text-xs text-gray-400">Email us</span>
              <a href="mailto:atomtechnologysolution@gmail.com" className="font-semibold hover:text-brand-orange transition-colors">atomtechnologysolution@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MainServiceCTA
