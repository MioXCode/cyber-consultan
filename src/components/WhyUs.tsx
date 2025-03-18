'use client'
import { motion } from 'framer-motion'
import { Trophy, Zap, Shield, CheckCircle } from 'lucide-react'

export default function WhyUs() {
  const features = [
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Expert Team",
      description: "Certified security professionals with years of experience"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Quick Response",
      description: "24/7 support with rapid incident response time"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Comprehensive Protection",
      description: "End-to-end security solutions for your business"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "Proven Track Record",
      description: "Successfully protected hundreds of businesses"
    }
  ]

  return (
    <section className="py-20 cyber-gradient">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gradient"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card p-8 rounded-xl text-center hover-translate"
            >
              <div className="mb-6 cyber-pulse flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}