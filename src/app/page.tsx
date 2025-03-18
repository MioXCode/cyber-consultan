import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative">
        <Services />
        <WhyUs />
        <Testimonials />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}