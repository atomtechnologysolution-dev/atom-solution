import Button from '../ui/Button'
import { Phone, Envelope  } from '@phosphor-icons/react'



function ServiceCTA() {
  return (
    <section className="bg-brand-dark py-12 sm:py-16 lg:py-20 xl:py-[100px]">
      <div className="mx-auto grid w-full max-w-[1404px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 xl:gap-[100px] 2xl:px-0">
        
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
            Ready to <span className="text-brand-orange">Grow Your Business</span> with Google Ads?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg lg:mt-6 lg:max-w-[600px]">
            Let Atom Technology Solution help you reach the right audience, generate quality leads, and maximize ROI with powerful Google Ads campaigns.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-5 lg:justify-start">
            <Button href="#audit" size="lg" className="w-full sm:w-auto">
              Get Free Google Ads Audit
            </Button>
            <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="mx-auto flex w-full max-w-[450px] flex-col justify-center gap-6 lg:ml-auto lg:max-w-[400px]">
          {/* Phone block */}
          <div className="flex items-center rounded-xl bg-white/5 p-5 border border-white/10 transition hover:border-brand-orange/50">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
              <Phone className="h-6 w-6" />
            </div>
            <div className="ml-5 text-left">
              <p className="text-sm font-medium text-gray-600">Have any questions?</p>
              <a href="tel:+916289571495" className="mt-1 block text-lg font-bold text-white hover:text-brand-orange transition-colors">
                +91 6289571495
              </a>
            </div>
          </div>

          {/* EEnvelope block */}
          <div className="flex items-center rounded-xl bg-white/5 p-5 border border-white/10 transition hover:border-brand-orange/50">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
              <Envelope className="h-6 w-6" />
            </div>
            <div className="ml-5 text-left">
              <p className="text-sm font-medium text-gray-600">EEnvelope us</p>
              <a href="Envelopeto:atomtechnologysolution@gmail.com" className="mt-1 block text-lg font-bold text-white hover:text-brand-orange transition-colors">
                atomtechnologysolution@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServiceCTA
