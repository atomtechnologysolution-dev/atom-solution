import { motion } from 'framer-motion'
import { Target, Rocket, Lightbulb } from '@phosphor-icons/react'
import { aboutMission, aboutVision, companyValues } from '../../../data/aboutUsData'

function AboutMission() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-brand-orange/10 rounded-full -z-10 blur-xl" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-brand-orange shadow-lg">
                <Target size={32} weight="fill" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900">{aboutMission.title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutMission.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-blue-500/10 rounded-full -z-10 blur-xl" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center text-white shadow-lg">
                <Rocket size={32} weight="fill" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900">{aboutVision.title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutVision.description}
            </p>
          </motion.div>
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core <span className="text-brand-orange">Values</span>
            </h3>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-brand-light rounded-2xl p-8 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-transparent hover:border-gray-100 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-orange shadow-sm mb-6">
                  <Lightbulb size={24} weight="bold" />
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutMission
