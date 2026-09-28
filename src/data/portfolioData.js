import { Desktop, DeviceMobile, ChartLineUp, ShoppingCart, Headset, CheckCircle } from '@phosphor-icons/react'

export const portfolioCategories = [
  { id: 'all', label: 'All Projects', icon: CheckCircle },
  { id: 'web', label: 'Web Development', icon: Desktop },
  { id: 'mobile', label: 'Mobile Apps', icon: DeviceMobile },
  { id: 'marketing', label: 'Digital Marketing', icon: ChartLineUp },
  { id: 'ecommerce', label: 'eCommerce', icon: ShoppingCart },
]

export const portfolioProjects = [
  {
    id: 1,
    title: 'Fintech Dashboard Application',
    category: 'web',
    client: 'Global Finance Corp',
    description: 'A comprehensive web-based financial dashboard for real-time asset tracking, data visualization, and reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Tailwind', 'D3.js']
  },
  {
    id: 2,
    title: 'Modern Apparel eCommerce Store',
    category: 'ecommerce',
    client: 'Urban Threads',
    description: 'A high-converting, headless Shopify storefront built with next-gen frontend technologies for lightning fast loading times.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Next.js', 'Framer Motion']
  },
  {
    id: 3,
    title: 'Health & Fitness Mobile App',
    category: 'mobile',
    client: 'FitLife Global',
    description: 'A cross-platform mobile application providing personalized workout plans, nutrition tracking, and community features.',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 4,
    title: 'B2B Lead Generation Campaign',
    category: 'marketing',
    client: 'Tech Solutions Inc',
    description: 'A full-scale digital marketing campaign utilizing Google Ads and SEO to generate a 300% increase in qualified B2B leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Google Ads', 'SEO', 'HubSpot']
  },
  {
    id: 5,
    title: 'Real Estate Listing Portal',
    category: 'web',
    client: 'Prime Properties',
    description: 'A scalable real estate platform featuring advanced search filters, interactive maps, and virtual tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Laravel', 'Google Maps API']
  },
  {
    id: 6,
    title: 'Artisan Coffee Roasters App',
    category: 'mobile',
    client: 'Brew Haven',
    description: 'A mobile ordering and loyalty rewards application for a regional chain of specialty coffee shops.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Flutter', 'AWS', 'Stripe']
  }
]

export const clientTestimonials = [
  {
    name: 'Robert Fox',
    role: 'CEO at Global Finance',
    text: 'Atom Technology Solution completely transformed our digital presence. The dashboard they built is flawlessly designed and incredibly performant.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
  },
  {
    name: 'Esther Howard',
    role: 'Founder of Urban Threads',
    text: 'Our online sales skyrocketed after Atom launched our new eCommerce store. Their attention to detail and UI/UX expertise is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
  },
  {
    name: 'Jacob Jones',
    role: 'Marketing Director',
    text: 'The marketing strategies implemented by Atom resulted in our most successful quarter ever. They are truly data-driven and results-oriented.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
  },
  {
    name: 'Leslie Alexander',
    role: 'Product Manager',
    text: 'Working with this team was a breeze. They communicate clearly, hit their deadlines, and the final mobile app exceeded all our expectations.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
  }
]
