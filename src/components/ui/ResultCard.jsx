import { motion } from 'framer-motion'

function ResultCard({ result, index }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/10 bg-brand-dark/50 p-6 shadow-xl backdrop-blur-sm lg:p-8 hover:border-brand-orange/30 transition-colors duration-300"
    >
      <img
        src={result.image}
        alt={result.title}
        className="aspect-[16/9] w-full rounded-xl object-cover"
        loading="lazy"
      />
      <h3 className="mt-8 font-heading text-2xl font-bold leading-tight text-white lg:text-3xl">
        {result.title}
      </h3>
      <dl className="mt-6 space-y-4 lg:mt-8">
        {result.metrics.map((metric, i) => (
          <div
            className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
            key={metric.label}
          >
            <dt className="text-base text-brand-text">{metric.label}</dt>
            <dd className="font-heading text-2xl font-bold text-brand-orange lg:text-3xl">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-base leading-relaxed text-brand-text">
        {result.description}
      </p>
    </motion.article>
  )
}

export default ResultCard
