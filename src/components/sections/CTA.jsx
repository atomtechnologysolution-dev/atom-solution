import Button from '../ui/Button'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative bg-brand-orange py-20 overflow-hidden md:py-24 lg:py-32">
      {/* Decorative blurred background */}
      <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 lg:mt-8 lg:text-xl">
            Schedule a free consultation with our experts and discover how we can
            help you achieve measurable growth. No obligations, just actionable insights.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:mt-12">
  
  {/* 
    Primary Action Button 
    Design: Solid White background with Brand Orange text.
    Why: Provides maximum contrast against the orange section background, drawing the user's eye immediately.
  */}
  <Button
    href="#"
    variant="secondary"
    className="w-full sm:w-auto px-10 py-5 text-lg font-heading font-semibold bg-white text-red-700 hover:text-red-700 border-2 border-white shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
  >
    Book Consultation
  </Button>

  {/* 
    Secondary Action Button 
    Design: Transparent with a solid White border and White text.
    Why: Looks elegant and creates a clear visual hierarchy so it doesn't fight the primary button for attention.
  */}
  <Button
    href="#results"
    variant="primary"
    className="w-full sm:w-auto px-10 py-5 text-lg font-heading font-medium bg-transparent border-2 border-white text-white shadow-none hover:bg-white hover:text-brand-orange active:scale-[0.98] transition-all duration-300"
  >
    View Case Studies
  </Button>
  
</div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
