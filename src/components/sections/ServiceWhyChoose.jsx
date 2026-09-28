import { CheckCircle  } from '@phosphor-icons/react'
import { googleAdsWhyChoose } from '../../data/googleAdsData'
import heroDashboard from '../../assets/images/hero-dashboard.png'

function ServiceWhyChoose() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 xl:py-[120px]">
      <div className="mx-auto grid w-full max-w-[1404px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:gap-[100px] 2xl:px-0">
        
        {/* Left Side - Visual */}
        <div className="order-2 mx-auto w-full max-w-[600px] lg:order-1 lg:max-w-none">
          <img
            src={heroDashboard}
            alt="Google Ads analytics showing smart campaign performance"
            className="w-full rounded-2xl shadow-card"
          />
        </div>

        {/* Right Side - Content */}
        <div className="order-1 lg:order-2">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-brand-orange sm:text-base lg:mb-4">
            Why Choose Our Google Ads Services?
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.1]">
            Smart Google Ads Campaigns That Deliver Real Results
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg lg:mt-7">
            At Atom Technology Solution, we create data-driven Google Ads campaigns that help businesses generate high-quality leads, boost sales, and achieve maximum return on ad spend.
          </p>

          <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-5 lg:mt-12">
            {googleAdsWhyChoose.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-4 mt-0.5 h-6 w-6 shrink-0 text-brand-orange" strokeWidth={2.5} />
                <span className="text-base font-semibold text-brand-dark sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServiceWhyChoose
