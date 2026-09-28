import { useState } from 'react'
import { Plus, Minus  } from '@phosphor-icons/react'
import { cn } from '../../lib/utils'
import { googleAdsFAQ } from '../../data/googleAdsData'
import dashboardMockup from '../../assets/images/hero-dashboard.png'

function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-brand-light py-12 sm:py-16 lg:py-24 xl:py-[120px]">
      <div className="mx-auto grid w-full max-w-[1404px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:gap-[80px] 2xl:px-0">
        
        {/* Left Content - FAQ Accordion */}
        <div>
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-brand-orange sm:text-base lg:mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="mb-8 font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl lg:mb-10 lg:text-[44px]">
            Google Ads Services – FAQ
          </h2>

          <div className="space-y-4">
            {googleAdsFAQ.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={cn(
                    'rounded-xl border bg-white transition-all duration-200',
                    isOpen ? 'border-brand-orange shadow-md' : 'border-brand-gray shadow-sm hover:border-brand-orange/50'
                  )}
                >
                  <button
                    className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6 sm:py-5"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-brand-dark sm:text-lg pr-4">{faq.question}</span>
                    <span className={cn('flex shrink-0 items-center justify-center rounded-full transition-transform duration-200')}>
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-brand-orange" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-600" />
                      )}
                    </span>
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-gray-600 sm:px-6 sm:pb-6 sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none lg:ml-auto">
          {/* Decorative dots background */}
          <div className="absolute -left-4 -top-4 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(#c81e1e_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-20 lg:-left-8 lg:-top-8"></div>
          
          <div className="rounded-2xl bg-white p-4 shadow-card lg:p-6 relative">
             <img
                src={dashboardMockup}
                alt="Google ads performance tracking dashboard"
                className="w-full h-auto rounded-xl shadow-sm border border-brand-gray"
             />
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServiceFAQ
