'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Twitter, Github, Instagram, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-20 cyber-gradient relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-gray-400 text-lg">
            Ready to secure your digital assets? Let's start a conversation about your security needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="cyber-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">contact@cybershield.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+62 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="cyber-card p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-[#1d4ed8] focus:border-primary/50 transition-colors outline-none text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-[#1d4ed8] focus:border-primary/50 transition-colors outline-none text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-[#1d4ed8] focus:border-primary/50 transition-colors outline-none text-white"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>
              </div>
              <button className="cyber-button w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}