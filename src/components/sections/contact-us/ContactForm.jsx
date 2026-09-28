import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PaperPlaneRight, WarningCircle, CheckCircle, CaretDown } from '@phosphor-icons/react'

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formState.name.trim()) newErrors.name = 'Name is required'
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      setStatus('submitting')
      
      // Simulate API call
      setTimeout(() => {
        // Randomly succeed or fail just to show error handling as requested
        if (Math.random() > 0.2) {
          setStatus('success')
          setFormState({ name: '', email: '', service: '', message: '' })
          setTimeout(() => setStatus('idle'), 5000) // Reset after 5s
        } else {
          setStatus('error')
        }
      }, 1500)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6 leading-tight">
              Ready to collaborate? <br />
              <span className="text-brand-orange">Drop us a line.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
              Fill out the form to the right and our team will get back to you within 24 hours to discuss your project requirements in detail.
            </p>
            
            <div className="bg-brand-light rounded-3xl p-8 border border-gray-100">
              <h4 className="font-heading font-bold text-brand-dark text-xl mb-4">What happens next?</h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <p className="text-sm text-gray-600 pt-1">We schedule a quick 15-minute discovery call.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <p className="text-sm text-gray-600 pt-1">We prepare a custom proposal and project roadmap.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <p className="text-sm text-gray-600 pt-1">We kick off the project and start building.</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 sm:p-12 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Top corner decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-bl-full pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand-dark">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><WarningCircle /> {errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-brand-dark">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><WarningCircle /> {errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-brand-dark">Service Required</label>
                <div className="relative">
                  <select 
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service (Optional)</option>
                    <option value="web">Web Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="marketing">Digital Marketing / SEO</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                    <CaretDown size={16} weight="bold" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand-dark">Project Details *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-colors resize-none`}
                  placeholder="Tell us about your project goals and requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><WarningCircle /> {errors.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>Send Message <PaperPlaneRight size={20} weight="fill" /></>
                )}
              </button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-50 text-green-700 p-4 rounded-xl flex items-start gap-3 mt-4"
                  >
                    <CheckCircle size={24} weight="fill" className="shrink-0" />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm text-green-600">We'll get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-red-50 text-red-700 p-4 rounded-xl flex items-start gap-3 mt-4"
                  >
                    <WarningCircle size={24} weight="fill" className="shrink-0" />
                    <div>
                      <p className="font-semibold">Failed to send message.</p>
                      <p className="text-sm text-red-600">Please try again later or email us directly.</p>
                      <button type="button" onClick={() => setStatus('idle')} className="text-xs font-bold underline mt-1">Try again</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm
