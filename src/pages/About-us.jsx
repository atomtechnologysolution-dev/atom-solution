import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AboutHero from '../components/sections/about-us/AboutHero'
import AboutMission from '../components/sections/about-us/AboutMission'
import AboutTeam from '../components/sections/about-us/AboutTeam'

function AboutUs() {
  useEffect(() => {
    // Update SEO meta tags on mount
    document.title = 'About Us | Atom Technology Solution'
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn more about Atom Technology Solution, our mission, vision, and the expert team driving digital transformation.')
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = 'Learn more about Atom Technology Solution, our mission, vision, and the expert team driving digital transformation.'
      document.head.appendChild(metaDescription)
    }

    // Optional: Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white selection:bg-brand-orange/20 selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <AboutMission />
        <AboutTeam />
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
