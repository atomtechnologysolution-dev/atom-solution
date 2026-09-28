import { motion } from 'framer-motion'
import { ChartLineUp, Database, Code, Cloud } from '@phosphor-icons/react'
import Button from '../ui/Button'
import heroDashboard from '../../assets/images/hero-dashboard.png'

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '3.2x', label: 'Average ROI' },
  { value: '98%', label: 'Client Retention' },
]

function FloatingElement({ children, delay = 0, className }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden pt-32 lg:pt-40 pb-48">
      {/* Decorative blurred orbs */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

      {/* Floating Tech Elements */}
      <FloatingElement className="top-32 left-10 hidden lg:block opacity-30" delay={0}>
        <Database size={48} className="text-brand-orange" />
      </FloatingElement>
      <FloatingElement className="top-40 right-20 hidden lg:block opacity-30" delay={1}>
        <Code size={48} className="text-brand-orange" />
      </FloatingElement>
      <FloatingElement className="bottom-64 left-1/4 hidden lg:block opacity-20" delay={2}>
        <Cloud size={64} className="text-white" />
      </FloatingElement>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-[700px] text-center lg:mx-0 lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Transform Your
            <br />
            Business with <span className="text-brand-orange">Data-</span>
            <br />
            <span className="text-brand-orange">Driven Strategy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-text lg:mx-0">
            We help ambitious businesses achieve measurable growth through strategic marketing, performance optimization, and proven business consulting.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="#cta" variant="primary" className="w-full sm:w-auto">
              Book Consultation
            </Button>
            <Button href="/services" variant="secondary" className="w-full sm:w-auto">
              View Services
            </Button>
          </div>
          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={index === 0 ? '' : 'border-l border-white/10 pl-6'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dd className="text-3xl font-extrabold leading-none text-brand-orange sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm text-brand-text">{stat.label}</dt>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div 
  className="flex justify-center relative w-full"
  /* 1. PREMIUM ENTRANCE: Slides up with a slight spring effect */
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ 
    type: "spring", 
    stiffness: 70, 
    damping: 20, 
    duration: 0.8 
  }}
>
  <motion.div
    className="relative w-full max-w-[600px] cursor-pointer group"
    /* 2. CONTINUOUS FLOATING: Moves up and down infinitely */
    animate={{ y: [0, -15, 0] }}
    transition={{ 
      repeat: Infinity, 
      duration: 5, 
      ease: "easeInOut" 
    }}
    /* 3. HOVER EFFECT: Scales up slightly when the mouse is over it */
    whileHover={{ scale: 1.02, y: -5 }}
  >
    {/* 4. PULSING GLOW: The background glow breathes (opacity & scale change) */}
    <motion.div 
      className="absolute inset-0 rounded-3xl bg-brand-orange/30 blur-3xl -z-10"
      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.05, 0.9] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }}
    />
    
    {/* The actual image */}
    <img
      src={heroDashboard}
      alt="Marketing analytics dashboard with growth charts"
      className="relative w-full object-cover rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(249,93,10,0.15)] transition-all duration-500 group-hover:shadow-[0_15px_50px_rgba(249,93,10,0.3)] group-hover:border-brand-orange/30"
    />
  </motion.div>
</motion.div>
      </div>

      {/* SVG Wave Transition */}
      <svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 left-0 w-full text-brand-light"
        preserveAspectRatio="none"
        fill="currentColor"
        style={{ height: '6vw', minHeight: '60px' }}
      >
        <path d="M0,0 C320,120 420,120 720,60 C1020,0 1120,0 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </section>
  )
}

export default Hero
