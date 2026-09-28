import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ChatTeardropText } from '@phosphor-icons/react'

function ContactHero() {
  const [isClient, setIsClient] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Smooth spring for the custom floating cursor orb
  const springConfig = { damping: 25, stiffness: 150 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsClient(true)
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[70vh] flex items-center cursor-default">
      
      {/* Unique Attention Grabber: Custom glowing orb following cursor (hidden on small screens) */}
      {/* {isClient && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full bg-brand-orange mix-blend-screen pointer-events-none z-50 hidden lg:block blur-sm"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        />
      )} */}

      {/* Abstract Animated Background Shapes */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-orange opacity-10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="w-20 h-20 mx-auto bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-8 border border-brand-orange/20 shadow-[0_0_50px_rgba(249,93,10,0.2)]"
        >
          <ChatTeardropText size={40} weight="fill" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let's Start a <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">
            Conversation
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-lg sm:text-xl text-brand-text max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you.
        </motion.p>
        
      </div>

      {/* Curved bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-12 lg:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,132.8,204.3,129.5,244.66,127.7,284.14,117.4,321.39,56.44Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  )
}

export default ContactHero
