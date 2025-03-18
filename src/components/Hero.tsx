'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen cyber-gradient cyber-pattern">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient">
              Secure Your Digital Future
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced cybersecurity solutions powered by cutting-edge technology and expert consultants
            </p>
            <div className="flex gap-4">
              <button className="cyber-button bg-primary px-8 py-4 rounded-lg text-white font-semibold">
                Get Started
              </button>
              <button className="cyber-button glass-effect px-8 py-4 rounded-lg text-white font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="relative cyber-pulse">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src="/img/hero.png" 
                alt="Cybersecurity" 
                className="relative z-10 w-full max-w-lg mx-auto"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
        >
          {[
            { number: '500+', text: 'Clients Protected' },
            { number: '99.9%', text: 'Success Rate' },
            { number: '24/7', text: 'Support' },
            { number: '50+', text: 'Expert Consultants' }
          ].map((stat, index) => (
            <div key={index} className="cyber-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-gradient mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}