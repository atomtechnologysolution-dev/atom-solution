import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BlogHero from '../components/sections/blog/BlogHero'
import BlogCategories from '../components/sections/blog/BlogCategories'
import BlogGrid from '../components/sections/blog/BlogGrid'
import BlogNewsletter from '../components/sections/blog/BlogNewsletter'

function Blog() {
  useEffect(() => {
    // Update SEO meta tags on mount
    document.title = 'Blog | Atom Technology Solution'
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore insights, guides, and articles on web development, digital marketing, and growing your business online.')
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = 'Explore insights, guides, and articles on web development, digital marketing, and growing your business online.'
      document.head.appendChild(metaDescription)
    }

    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white selection:bg-brand-orange/20 selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <BlogHero />
        <BlogCategories />
        <BlogGrid />
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Blog
