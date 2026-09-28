import { motion } from 'framer-motion'
import { Clock, ArrowRight } from '@phosphor-icons/react'
import { blogPosts } from '../../../data/blogData'

function BlogGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Latest <span className="text-brand-orange">Articles</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Stay up-to-date with the latest trends, strategies, and techniques in digital growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-dark text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="font-medium text-brand-dark">{post.author}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-brand-dark leading-tight mb-3 group-hover:text-brand-orange transition-colors">
                  <a href="#">{post.title}</a>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <a href="#" className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-700 transition-colors">
                    Read More 
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-orange text-base font-medium rounded-lg text-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-300">
            Load More Articles
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default BlogGrid
