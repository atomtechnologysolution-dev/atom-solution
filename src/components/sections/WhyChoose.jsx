import { whyChooseData } from '../../data/whyChooseData'
import FeatureCard from '../ui/FeatureCard'
import SectionHeading from '../ui/SectionHeading'

function WhyChoose() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Atom"
          description="We combine expertise, innovation, and dedication to deliver exceptional results for your business."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseData.map((feature, index) => (
            <FeatureCard feature={feature} key={feature.title} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
