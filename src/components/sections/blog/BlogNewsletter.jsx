import { motion } from 'framer-motion'
import { PaperPlaneRight } from '@phosphor-icons/react'

function BlogNewsletter() {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-brand-orange mx-auto mb-8 border border-gray-100">
            <PaperPlaneRight size={32} weight="fill" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
            Get Insights Delivered Weekly
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join over 5,000 founders and marketers who receive our best strategies, case studies, and insights straight to their inbox. No spam, ever.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange bg-white shadow-sm"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-brand-orange/20 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogNewsletter
