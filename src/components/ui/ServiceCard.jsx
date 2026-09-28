import {
  Briefcase,
  ChartLineUp,
  Palette,
  Target,
} from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const iconMap = {
  growth: ChartLineUp,
  target: Target,
  brand: Palette,
  consulting: Briefcase,
}

function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || ChartLineUp

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full rounded-2xl border border-brand-gray bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange/50 hover:shadow-xl overflow-hidden"
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[100px] bg-brand-orange/5 transition-transform duration-500 group-hover:scale-110" />
      
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white relative z-10">
        <Icon weight="regular" className="h-8 w-8" />
      </div>
      
      <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-brand-dark relative z-10">
        {service.title}
      </h3>
      
      <p className="text-base leading-relaxed text-gray-600 relative z-10">
        {service.description}
      </p>
    </motion.article>
  )
}

export default ServiceCard
