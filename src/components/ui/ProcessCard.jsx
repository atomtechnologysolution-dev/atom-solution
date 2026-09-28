import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

function ProcessCard({ item, index, total }) {
  const isLast = index === total - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center lg:items-start lg:text-left group"
    >
      {/* Dashed Connecting Line (Desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-20 w-[calc(100%-4rem)] border-t-2 border-dashed border-brand-orange/30 z-0 group-hover:border-brand-orange transition-colors duration-500" />
      )}

      {/* Dashed Connecting Line (Mobile/Tablet) */}
      {!isLast && (
        <div className="block lg:hidden absolute top-20 left-1/2 h-full border-l-2 border-dashed border-brand-orange/30 -translate-x-1/2 z-0" />
      )}

      {/* Number Icon */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand-dark text-xl font-bold text-white shadow-xl ring-8 ring-brand-light transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-orange">
        {item.step}
      </div>

      <h3 className="mt-8 font-heading text-2xl font-bold leading-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-orange">
        {item.title}
      </h3>
      
      <p className="mt-4 text-base leading-relaxed text-gray-600">
        {item.description}
      </p>
    </motion.div>
  )
}

export default ProcessCard
