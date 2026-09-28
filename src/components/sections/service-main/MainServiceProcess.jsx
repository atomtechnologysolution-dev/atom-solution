import { motion } from 'framer-motion'
import { processSteps } from '../../../data/mainServiceData'

function MainServiceProcess() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-orange font-semibold tracking-wider text-sm uppercase mb-2 block">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Our Proven <span className="text-brand-orange">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Dashed Line Connector (Desktop & Mobile handled via CSS classes mapping) */}
          <div className="absolute top-[50px] left-1/2 w-full h-[2px] border-t-2 border-dashed border-[#cbd5e1] z-0 -translate-x-1/2 hidden lg:block" />
          {/* Mobile version line */}
          <div className="absolute top-0 left-[50px] w-[2px] h-full border-l-2 border-dashed border-[#cbd5e1] z-0 lg:hidden" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-start lg:items-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white relative z-10 mb-6 group hover:border-brand-orange transition-colors duration-300 shrink-0 ml-10 lg:ml-0">
                    <Icon className="text-4xl text-brand-dark group-hover:text-brand-orange transition-colors" weight="regular" />
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="ml-24 lg:ml-0 text-left lg:text-center">
                    <h4 className="font-heading font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainServiceProcess
