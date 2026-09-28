import { ArrowRight  } from '@phosphor-icons/react'
import { googleAdsServices } from '../../data/googleAdsData'

function ServiceServices() {
  return (
    <section className="bg-brand-light py-12 sm:py-16 lg:py-24 xl:py-[120px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-brand-orange sm:text-base lg:mb-4">
            Our Google Ads Services
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.1]">
            Comprehensive Google Ads Services to Boost Your Business Growth
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:gap-8 xl:mt-20 xl:grid-cols-3">
          {googleAdsServices.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-brand-gray bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft xl:p-9"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange lg:mb-8 lg:h-16 lg:w-16">
                  <Icon aria-hidden="true" className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-extrabold leading-tight text-brand-dark sm:text-[22px] xl:text-[24px]">
                  {service.title}
                </h3>
                <p className="mt-4 mb-6 flex-grow text-base leading-relaxed text-gray-600 lg:mt-5">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center text-sm font-bold text-brand-orange transition hover:text-brand-orange-dark sm:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceServices
