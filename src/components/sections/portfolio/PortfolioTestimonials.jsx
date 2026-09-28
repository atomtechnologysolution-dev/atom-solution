import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react'
import { clientTestimonials } from '../../../data/portfolioData'

function PortfolioTestimonials() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  const controls = useAnimation()
  const x = useMotionValue(0)

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
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
    <section className="py-20 lg:py-32 bg-brand-light relative overflow-hidden border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
              Client <span className="text-brand-orange">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Don't just take our word for it. Hear what our clients have to say about the impact of our work.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 shadow-md group"
              aria-label="Previous Testimonial"
            >
              <CaretLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 shadow-md group"
              aria-label="Next Testimonial"
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
            className="flex gap-8 w-max pb-8"
          >
            {clientTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="w-[300px] sm:w-[400px] flex-shrink-0 bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quotes size={64} weight="fill" className="absolute top-8 right-8 text-brand-orange/10" />
                
                <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-brand-dark text-lg">{testimonial.name}</h4>
                    <p className="text-brand-orange text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default PortfolioTestimonials
