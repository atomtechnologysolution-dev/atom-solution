import { motion } from 'framer-motion'
import { aboutStats } from '../../../data/aboutUsData'
import heroDashboard from '../../../assets/images/hero-dashboard.png'

function AboutHero() {
  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold tracking-wider mb-6">
              WHO WE ARE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
              We Innovate to <br />
              <span className="text-brand-orange relative inline-block">
                Elevate
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span> Your Brand
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-brand-text max-w-xl mb-10 leading-relaxed">
              Atom Technology Solution is a premier digital agency blending creative design, robust engineering, and data-driven marketing to help ambitious businesses thrive in the digital era.
            </p>
            
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {aboutStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="border-l border-brand-orange/30 pl-4"
                >
                  <dd className="text-3xl font-extrabold text-white mb-1">{stat.value}</dd>
                  <dt className="text-sm text-brand-text font-medium">{stat.label}</dt>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          <motion.div 
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="absolute inset-0 bg-brand-orange rounded-2xl blur-2xl opacity-20 transform translate-x-4 translate-y-4" />
            <img 
              src={heroDashboard} 
              alt="Atom Technology Team" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
            />
          </motion.div>
          
        </div>
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

export default AboutHero
