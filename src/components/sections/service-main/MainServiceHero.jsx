import { motion } from 'framer-motion'
import { Code, ShoppingBagOpen, MagnifyingGlass } from '@phosphor-icons/react'

function MainServiceHero() {
  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Floating Tech Elements Background */}
      <motion.div 
        className="absolute top-1/4 left-10 text-brand-orange/20 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code size={96} weight="regular" />
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-10 text-brand-orange/20 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShoppingBagOpen size={96} weight="regular" />
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 text-brand-orange/10 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <MagnifyingGlass size={72} weight="regular" />
      </motion.div>
      
      {/* Abstract Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold tracking-wider mb-6">
            OUR DIGITAL SERVICES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
            Comprehensive Digital Services to <br className="hidden lg:block"/>
            Drive Real <span className="text-brand-orange relative inline-block">
              Business Growth
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
              </svg>
            </span>
          </h1>
          <p className="mt-4 text-xl text-brand-text max-w-3xl mx-auto mb-10">
            At Atom Technology Solution, we build high-performance, scalable web applications and data-driven marketing solutions tailored to your unique business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-brand-orange hover:bg-orange-600 shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-1">
              Get a Free Consultation
            </a>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-brand-dark transition-all duration-300 hover:-translate-y-1">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Curved bottom wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 lg:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,132.8,204.3,129.5,244.66,127.7,284.14,117.4,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  )
}

export default MainServiceHero
