import { resultsData } from '../../data/resultsData'
import ResultCard from '../ui/ResultCard'
import SectionHeading from '../ui/SectionHeading'

function Results() {
  return (
    <section id="results" className="bg-brand-dark py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative blurred orb */}
      <div className="absolute -left-20 top-40 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          light
          title="Results That Speak"
          description="Real businesses, real growth, real impact. See how we've helped our clients achieve their goals through our data-driven approach."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {resultsData.map((result, index) => (
            <ResultCard key={result.title} result={result} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
