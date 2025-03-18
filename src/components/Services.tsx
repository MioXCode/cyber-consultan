'use client'
import { motion } from 'framer-motion'
import { Search, ShieldCheck, Siren, Users, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessment to identify vulnerabilities in your systems",
      icon: <Search className="w-8 h-8 text-primary" />
    },
    {
      title: "Security Audit",
      description: "Detailed evaluation of your security infrastructure and policies",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />
    },
    {
      title: "Incident Response",
      description: "24/7 support for handling and mitigating security incidents",
      icon: <Siren className="w-8 h-8 text-primary" />
    },
    {
      title: "Security Training",
      description: "Employee cybersecurity awareness and best practices training",
      icon: <Users className="w-8 h-8 text-primary" />
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
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card p-6 rounded-xl hover-translate group"
            >
              <div className="text-4xl mb-4 cyber-pulse">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-primary group-hover:text-primary-dark transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}