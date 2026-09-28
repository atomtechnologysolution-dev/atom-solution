import { processData } from '../../data/processData'
import ProcessCard from '../ui/ProcessCard'
import SectionHeading from '../ui/SectionHeading'

function Process() {
  return (
    <section id="process" className="bg-brand-light py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Process"
          description="A proven methodology that transforms challenges into opportunities and delivers consistent results through structured execution."
        />
        <div className="mt-20 grid gap-16 lg:gap-8 lg:grid-cols-4 relative">
          {processData.map((item, index) => (
            <ProcessCard
              item={item}
              key={item.step}
              index={index}
              total={processData.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
