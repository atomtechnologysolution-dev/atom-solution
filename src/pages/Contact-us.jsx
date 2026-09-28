import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ContactHero from '../components/sections/contact-us/ContactHero'
import ContactInfo from '../components/sections/contact-us/ContactInfo'
import ContactForm from '../components/sections/contact-us/ContactForm'
import ContactFAQ from '../components/sections/contact-us/ContactFAQ'

function ContactUs() {
  useEffect(() => {
    // Update SEO meta tags on mount
    document.title = 'Contact Us | Atom Technology Solution'
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Atom Technology Solution. We are here to help you build your next digital masterpiece.')
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = 'Get in touch with Atom Technology Solution. We are here to help you build your next digital masterpiece.'
      document.head.appendChild(metaDescription)
    }

    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white selection:bg-brand-orange/20 selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  )
}

export default ContactUs
