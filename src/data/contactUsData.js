import { Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react'

export const contactMethods = [
  {
    id: 'phone',
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm.',
    value: '+91 6289571495',
    link: 'tel:+916289571495',
    icon: Phone
  },
  {
    id: 'email',
    title: 'Email Us',
    description: 'We usually respond within 24 hours.',
    value: 'atomtechnologysolution@gmail.com',
    link: 'mailto:atomtechnologysolution@gmail.com',
    icon: EnvelopeSimple
  },
  {
    id: 'location',
    title: 'Visit Us',
    description: 'Come say hello at our office HQ.',
    value: 'Kolkata, West Bengal, India',
    link: '#',
    icon: MapPin
  },
  {
    id: 'hours',
    title: 'Working Hours',
    description: 'Available for client meetings.',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    link: '#',
    icon: Clock
  }
]

export const contactFaqs = [
  {
    question: 'How quickly can we start a project?',
    answer: 'Once the contract is signed and the initial deposit is made, we typically kick off projects within 1-2 weeks depending on our current pipeline.'
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes! We offer customized maintenance and support packages to ensure your website or app remains secure, fast, and up-to-date.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'A standard corporate website takes 4-6 weeks, while complex eCommerce or web applications can take 3-6 months. We will provide a detailed timeline during the discovery phase.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely. We work with clients all over the world and are highly experienced in managing asynchronous communication across different time zones.'
  }
]
