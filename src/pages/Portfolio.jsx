import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PortfolioHero from '../components/sections/portfolio/PortfolioHero'
import PortfolioGrid from '../components/sections/portfolio/PortfolioGrid'
import PortfolioTestimonials from '../components/sections/portfolio/PortfolioTestimonials'
import PortfolioCTA from '../components/sections/portfolio/PortfolioCTA'

function Portfolio() {
  useEffect(() => {
    // Update SEO meta tags on mount
    document.title = 'Portfolio | Atom Technology Solution'
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our portfolio of successful projects across web development, mobile apps, and digital marketing. We build solutions that drive measurable results.')
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = 'Explore our portfolio of successful projects across web development, mobile apps, and digital marketing. We build solutions that drive measurable results.'
      document.head.appendChild(metaDescription)
    }

    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white selection:bg-brand-orange/20 selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioTestimonials />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
