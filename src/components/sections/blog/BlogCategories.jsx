import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { blogCategories } from '../../../data/blogData'

function BlogCategories() {
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
    const itemWidth = carousel.current.children[0].children[0].offsetWidth + 24 // card width + gap
    const newX = Math.max(currentX - itemWidth, -width)
    controls.start({ x: newX, transition: { duration: 0.5, ease: "circOut" } })
    x.set(newX)
  }

  const handlePrev = () => {
    const currentX = x.get()
    const itemWidth = carousel.current.children[0].children[0].offsetWidth + 24
    const newX = Math.min(currentX + itemWidth, 0)
    controls.start({ x: newX, transition: { duration: 0.5, ease: "circOut" } })
    x.set(newX)
  }

  return (
    <section className="py-16 bg-brand-light relative overflow-hidden border-y border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-heading font-bold text-brand-dark">Browse Categories</h3>
          
          <div className="hidden sm:flex gap-3">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-brand-gray flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all shadow-sm"
            >
              <CaretLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-brand-gray flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all shadow-sm"
            >
              <CaretRight size={20} />
            </button>
          </div>
        </div>

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
            className="flex gap-6 w-max"
          >
            {blogCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.a
                  href="#"
                  key={index}
                  className="w-[200px] flex-shrink-0 bg-white rounded-2xl p-6 border border-transparent hover:border-brand-orange/30 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-dark mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Icon size={24} weight="regular" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-brand-dark mb-1 group-hover:text-brand-orange transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {category.count} Articles
                  </p>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default BlogCategories
