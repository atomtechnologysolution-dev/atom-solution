import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { contactMethods } from '../../../data/contactUsData'

function ContactInfo() {
  return (
    <section className="bg-brand-light py-20 relative z-10 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a 
                href={method.link}
                key={method.id}
                className="group bg-white rounded-3xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(249,93,10,0.1)] border border-transparent hover:border-brand-orange/20 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <Icon size={28} weight="regular" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">
                  {method.description}
                </p>
                
                <div className="mt-auto w-full font-semibold text-brand-dark group-hover:text-brand-orange transition-colors flex items-center justify-between gap-2">
                  <span className="text-[15px] xl:text-base break-all sm:break-words">{method.value}</span>
                  {method.link !== '#' && (
                    <ArrowUpRight size={18} className="shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  )}
                </div>

                {/* Abstract corner decoration */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-orange/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-right pointer-events-none" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
