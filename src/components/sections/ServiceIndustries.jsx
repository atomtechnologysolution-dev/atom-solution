import { googleAdsIndustries } from '../../data/googleAdsData'

function ServiceIndustries() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-[100px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0 text-center">
        <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-brand-orange sm:text-base lg:mb-4">
          Industries We Serve
        </span>
        <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
          Industries We Help Grow with Google Ads
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:mt-12 lg:gap-6">
          {googleAdsIndustries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.name}
                className="flex items-center rounded-full border border-brand-gray bg-white px-5 py-3 shadow-sm transition hover:border-brand-orange hover:shadow-md sm:px-6 sm:py-4"
              >
                <Icon className="mr-3 h-5 w-5 text-brand-orange sm:h-6 sm:w-6" />
                <span className="text-sm font-semibold text-brand-dark sm:text-base">{industry.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceIndustries
