'use client'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

export default function Testimonials() {
  const controls = useAnimationControls()

  const testimonials = [
    {
      name: "John Smith",
      role: "CTO at TechCorp",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "The cybersecurity solutions provided have significantly improved our security posture. Highly recommended!",
      company: "TechCorp"
    },
    {
      name: "Sarah Johnson",
      role: "IT Director",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      text: "Outstanding service! Their team helped us prevent several potential security breaches.",
      company: "Global Finance"
    },
    {
      name: "Michael Chen",
      role: "Security Manager",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      text: "Professional team with excellent knowledge in cybersecurity. They've been instrumental in securing our infrastructure.",
      company: "DataSafe Solutions"
    },
    {
      name: "Emma Williams",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      text: "Their proactive approach to security has given us peace of mind. Excellent service!",
      company: "Innovation Labs"
    }
  ]

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -100 * testimonials.length],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity
        }
      })
    }
    animate()
  }, [controls, testimonials.length])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[300px] p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}