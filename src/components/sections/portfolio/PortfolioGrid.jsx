import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Link } from '@phosphor-icons/react'
import { portfolioCategories, portfolioProjects } from '../../../data/portfolioData'

function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter)

  return (
    <section className="py-20 lg:py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {portfolioCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeFilter === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' 
                    : 'bg-brand-light text-brand-dark hover:bg-gray-200'
                }`}
              >
                <Icon size={18} weight={isActive ? "bold" : "regular"} />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container with Hover Effect */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <a href="#" className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-lg">
                      <Link size={24} weight="bold" />
                    </a>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 backdrop-blur text-brand-dark text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm">
                      {portfolioCategories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-brand-orange text-sm font-semibold mb-2">{project.client}</p>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-brand-light text-gray-600 text-xs font-medium py-1 px-3 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center text-brand-dark font-semibold hover:text-brand-orange transition-colors">
                    View Case Study 
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default PortfolioGrid
