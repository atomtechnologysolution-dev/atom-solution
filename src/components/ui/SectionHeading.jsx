import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

function SectionHeading({ title, description, light = false, className }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn('mx-auto max-w-3xl text-center', className)}
    >
      <h2
        className={cn(
          'font-heading text-3xl font-bold sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-brand-dark',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mx-auto mt-6 text-base leading-relaxed sm:text-lg lg:text-xl',
            light ? 'text-brand-text' : 'text-gray-600',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
