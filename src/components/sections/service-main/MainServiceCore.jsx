import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { coreServices } from '../../../data/mainServiceData'

function MainServiceCore() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Core <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver end-to-end solutions that elevate your brand and maximize your online potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const Icon = service.icon
            // Adjust col-start logic based on the original HTML if we have exactly 5 items
            const isRowTwoStart = coreServices.length === 5 && index === 3
            const isRowTwoEnd = coreServices.length === 5 && index === 4

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-150" />
                <div className="w-16 h-16 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300 text-brand-orange group-hover:text-white">
                  <Icon size={32} weight="regular" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <a href={service.link} className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-700 transition-colors">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MainServiceCore
