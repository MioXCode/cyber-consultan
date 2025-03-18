'use client'
import { motion } from 'framer-motion'

export default function BlogSection() {
  const blogs = [
    {
      title: "Latest Cybersecurity Trends 2024",
      excerpt: "Discover the emerging threats and solutions in the cybersecurity landscape",
      image: "/img/blog1.jpg",
      category: "Trends"
    },
    {
      title: "Zero Trust Security Model",
      excerpt: "Understanding the principles of Zero Trust architecture",
      image: "/img/blog2.jpg",
      category: "Security"
    },
    {
      title: "AI in Cybersecurity",
      excerpt: "How artificial intelligence is revolutionizing cyber defense",
      image: "/img/blog3.jpg",
      category: "Technology"
    }
  ]

  return (
    <section className="py-20 cyber-gradient">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Latest Insights
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden hover:glow-effect transition-all duration-300 cyber-card"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-primary mb-2 inline-block">{blog.category}</span>
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-400">{blog.excerpt}</p>
                <button className="mt-4 text-primary hover:text-primary-dark transition-colors">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}