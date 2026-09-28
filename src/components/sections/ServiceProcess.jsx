import { googleAdsProcess } from '../../data/googleAdsData'

function ServiceProcess() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 xl:py-[120px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-brand-orange sm:text-base lg:mb-4">
            Our Google Ads Process
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.1]">
            Our Proven Process to Get Maximum ROI
          </h2>
        </div>

        <div className="mt-12 lg:mt-24 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-0 top-[28px] w-full h-[2px] bg-brand-orange/10 -z-10"></div>
          
          {/* Mobile Connecting Line (Vertical) */}
          <div className="block lg:hidden absolute left-[39px] top-0 bottom-0 w-[2px] bg-brand-orange/10 -z-10"></div>

          <div className="grid gap-10 lg:grid-cols-6 lg:gap-6">
            {googleAdsProcess.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative flex flex-row items-start lg:flex-col lg:items-center text-left lg:text-center">
                  
                  {/* Step Number Badge */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center lg:h-14 lg:w-14 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white shadow-lg lg:h-14 lg:w-14 lg:text-base">
                      {step.number}
                    </div>
                  </div>

                  <div className="ml-6 flex flex-col lg:ml-0 lg:mt-8 lg:items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-light text-brand-orange">
                      <Icon className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-brand-dark sm:text-[22px] lg:mb-4 lg:text-[20px]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      {step.description}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess
