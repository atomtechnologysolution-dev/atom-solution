import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown, Question } from '@phosphor-icons/react'
import { contactFaqs } from '../../../data/contactUsData'

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 lg:py-32 bg-brand-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-brand-orange mb-6 shadow-sm border border-gray-100">
            <Question size={32} weight="fill" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Quick answers to questions you may have before reaching out.
          </p>
        </motion.div>

        <div className="space-y-4">
          {contactFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div 
                key={index}
                className={`bg-white rounded-2xl border ${isOpen ? 'border-brand-orange/30 shadow-md' : 'border-gray-100 shadow-sm'} overflow-hidden transition-colors duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-heading font-bold text-lg ${isOpen ? 'text-brand-orange' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 ${isOpen ? 'bg-brand-orange text-white' : 'bg-brand-light text-brand-dark'}`}
                  >
                    <CaretDown size={16} weight="bold" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ContactFAQ
