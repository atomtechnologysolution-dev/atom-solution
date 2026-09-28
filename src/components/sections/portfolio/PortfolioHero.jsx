import { motion } from 'framer-motion'
import { RocketLaunch, Star, Target } from '@phosphor-icons/react'

function PortfolioHero() {
  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange opacity-10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/4" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold tracking-wider mb-6">
              <Star size={16} weight="fill" /> OUR WORK
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
              Transforming Ideas into <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">
                Digital Masterpieces
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-brand-text mb-10 leading-relaxed">
              Explore our portfolio of successful projects across web development, mobile apps, and digital marketing. We build solutions that drive measurable results.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Target size={24} weight="fill" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-xl">250+</p>
                <p className="text-brand-text text-sm">Projects Delivered</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-white/10" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <RocketLaunch size={24} weight="fill" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-xl">99%</p>
                <p className="text-brand-text text-sm">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHero
