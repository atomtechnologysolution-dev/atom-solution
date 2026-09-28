import { servicesData } from '../../data/servicesData'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'

function Services() {
  return (
    <section id="services" className="bg-brand-light py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our Services"
          description="Comprehensive solutions designed to accelerate your business growth and maximize your market potential with data-driven strategies."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
