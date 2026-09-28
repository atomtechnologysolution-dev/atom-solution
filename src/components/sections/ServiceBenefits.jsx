import { googleAdsBenefits } from '../../data/googleAdsData'

function ServiceBenefits() {
  return (
    <section className="bg-brand-light py-12 sm:py-16 lg:py-24 xl:py-[120px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-brand-orange sm:text-base lg:mb-4">
            Why Businesses Choose Us
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.1]">
            We Deliver More Than Just Clicks
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
          {googleAdsBenefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-brand-orange/20 bg-white text-brand-orange transition-colors duration-300 hover:border-brand-orange lg:mb-6">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-brand-dark sm:text-xl lg:text-[19px]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-sm">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceBenefits
