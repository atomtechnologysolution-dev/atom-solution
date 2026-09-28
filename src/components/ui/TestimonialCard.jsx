import { Star } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col rounded-2xl border border-brand-gray bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange/50 hover:shadow-xl"
    >
      <div className="flex gap-1.5 text-brand-orange" aria-label={`${testimonial.rating} stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            aria-hidden="true"
            weight="fill"
            key={i}
            className="h-5 w-5"
          />
        ))}
      </div>
      <blockquote className="mt-6 text-base leading-relaxed text-brand-dark flex-grow font-medium">
        "{testimonial.quote}"
      </blockquote>
      <div className="mt-8 flex items-center gap-4 pt-6 border-t border-brand-gray">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-base font-bold leading-tight text-brand-dark">
            {testimonial.name}
          </p>
          <p className="mt-1 text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default TestimonialCard
