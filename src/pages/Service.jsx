import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MainServiceHero from '../components/sections/service-main/MainServiceHero'
import MainServiceCore from '../components/sections/service-main/MainServiceCore'
import MainServiceProcess from '../components/sections/service-main/MainServiceProcess'
import MainServiceWhyChoose from '../components/sections/service-main/MainServiceWhyChoose'
import MainServiceCTA from '../components/sections/service-main/MainServiceCTA'

function Service() {
  useEffect(() => {
    // Update SEO meta tags on mount
    document.title = 'Services | Atom Technology Solution'
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive Digital Services to Drive Real Business Growth. Custom Web Development, Shopify, WordPress, SEO, and Google Ads.')
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = 'Comprehensive Digital Services to Drive Real Business Growth. Custom Web Development, Shopify, WordPress, SEO, and Google Ads.'
      document.head.appendChild(metaDescription)
    }

    // Optional: Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white selection:bg-brand-orange/20 selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <MainServiceHero />
        <MainServiceCore />
        <MainServiceProcess />
        <MainServiceWhyChoose />
        <MainServiceCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Service
