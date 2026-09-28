import { motion } from 'framer-motion'
import { ArrowRight, EnvelopeSimple } from '@phosphor-icons/react'

function PortfolioCTA() {
  return (
    <section className="bg-brand-dark py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-cta" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-8 border border-brand-orange/20"
        >
          <EnvelopeSimple size={40} weight="regular" />
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to be our next <span className="text-brand-orange">Success Story?</span>
        </motion.h2>
        
        <motion.p 
          className="text-brand-text text-lg mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you need a cutting-edge web application, a seamless mobile experience, or a data-driven marketing campaign, we're ready to build it.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-brand-orange hover:bg-orange-600 shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
            Start Your Project <ArrowRight className="ml-2" />
          </a>
          <a href="mailto:atomtechnologysolution@gmail.com" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-white/20 hover:bg-white hover:text-brand-dark transition-all duration-300 w-full sm:w-auto">
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioCTA
