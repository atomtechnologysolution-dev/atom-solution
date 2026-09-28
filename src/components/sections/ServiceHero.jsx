import Button from '../ui/Button'
import { CaretRight  } from '@phosphor-icons/react'
import heroDashboard from '../../assets/images/hero-dashboard.png'



const benefits = [
  'Highly Targeted Traffic',
  'Increase Leads & Sales',
  'Higher ROI & Conversions',
  'Transparent Reporting',
]

function ServiceHero() {
  return (
    <section className="bg-brand-dark pb-12 pt-8 sm:pb-16 md:pt-10 lg:pb-20 lg:pt-12 xl:pb-[100px] xl:pt-[60px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 sm:px-6 lg:px-8 2xl:px-0">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 lg:mb-10">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 sm:text-base">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="flex items-center">
              <CaretRight className="mx-1 h-4 w-4" />
              <span className="text-white cursor-default">Services</span>
            </li>
            <li className="flex items-center">
              <CaretRight className="mx-1 h-4 w-4" />
              <span className="text-brand-orange font-medium cursor-default">Google Ads Services</span>
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-[80px]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-[68px] xl:leading-[1.1]">
              Google Ads That<br /> Drive Targeted Traffic,<br />
              <span className="text-brand-orange">Leads & Maximum ROI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:mt-8 lg:text-xl lg:leading-9">
              Reach your ideal customers at the right time with high-performing Google Ads campaigns. We create, manage, and optimize ads that deliver more clicks, conversions, and real business growth.
            </p>
            
            <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-5 lg:justify-start">
              <Button href="#audit" size="lg" className="w-full sm:w-auto">
                Get Free Google Ads Audit
              </Button>
              <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                Talk to Google Ads Expert
              </Button>
            </div>

            {/* Benefits Row */}
            <div className="mt-10 grid grid-cols-2 gap-4 text-left sm:mt-12 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-4 lg:mt-14">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm text-white/90 sm:text-base">
                  <span className="mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-orange/30 text-brand-orange">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
            <div className="relative rounded-2xl bg-white/5 p-2 shadow-2xl backdrop-blur-sm sm:p-4">
              <img
                src={heroDashboard}
                alt="Google Ads performance analytics dashboard showing conversions and clicks"
                className="h-auto w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
