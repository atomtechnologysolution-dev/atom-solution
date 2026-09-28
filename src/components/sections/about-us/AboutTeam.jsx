import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { CaretLeft, CaretRight, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import { teamMembers } from '../../../data/aboutUsData'

function AboutTeam() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  const controls = useAnimation()
  const x = useMotionValue(0)

  useEffect(() => {
    // Calculate the total scrollable width
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
    
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    const currentX = x.get()
    const itemWidth = carousel.current.children[0].children[0].offsetWidth + 32 // card width + gap
    const newX = Math.max(currentX - itemWidth, -width)
    controls.start({ x: newX, transition: { duration: 0.5, ease: "circOut" } })
    x.set(newX)
  }

  const handlePrev = () => {
    const currentX = x.get()
    const itemWidth = carousel.current.children[0].children[0].offsetWidth + 32
    const newX = Math.min(currentX + itemWidth, 0)
    controls.start({ x: newX, transition: { duration: 0.5, ease: "circOut" } })
    x.set(newX)
  }

  return (
    <section className="py-20 lg:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange opacity-5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-brand-orange font-semibold tracking-wider text-sm uppercase mb-2 block">
              The Minds Behind the Magic
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-brand-text text-lg">
              A diverse team of visionaries, engineers, and creatives working together to build exceptional digital experiences.
            </p>
          </motion.div>

          {/* Custom Navigation Arrows to mimic Swiper */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 shadow-lg group"
              aria-label="Previous Team Member"
            >
              <CaretLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 shadow-lg group"
              aria-label="Next Team Member"
            >
              <CaretRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Framer Motion Carousel */}
        <motion.div 
          ref={carousel} 
          className="cursor-grab overflow-hidden touch-pan-y"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            animate={controls}
            style={{ x }}
            className="flex gap-8 w-max"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="w-[300px] sm:w-[350px] flex-shrink-0 group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    draggable="false"
                  />

                  {/* Social Links sliding up on hover */}
                  <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors shadow-lg">
                      <LinkedinLogo size={20} weight="fill" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors shadow-lg">
                      <TwitterLogo size={20} weight="fill" />
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{member.name}</h3>
                  <p className="text-brand-orange font-medium mb-3">{member.role}</p>
                  <p className="text-brand-text text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutTeam
