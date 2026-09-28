import { motion } from 'framer-motion'
import { ArrowRight, Clock, CalendarBlank, User } from '@phosphor-icons/react'
import { featuredPost } from '../../../data/blogData'

function BlogHero() {
  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange opacity-10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold tracking-wider mb-4">
            ATOM INSIGHTS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
            Our Latest <span className="text-brand-orange">Thoughts & Ideas</span>
          </h1>
          <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">
            Explore articles, guides, and expert opinions on web development, digital marketing, and growing your business online.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="group relative rounded-3xl overflow-hidden bg-brand-dark border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden">
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="p-8 sm:p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-1.5 text-brand-text text-sm">
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-4 group-hover:text-brand-orange transition-colors">
                <a href="#">{featuredPost.title}</a>
              </h2>
              
              <p className="text-brand-text text-base sm:text-lg leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <User size={20} weight="fill" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{featuredPost.author}</p>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-0.5">
                      <CalendarBlank size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                </div>

                <a href="#" className="inline-flex items-center text-brand-orange font-semibold hover:text-white transition-colors group/btn">
                  Read Article 
                  <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default BlogHero
