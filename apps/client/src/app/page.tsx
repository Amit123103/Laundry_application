"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, Star, Sparkles, Droplet, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 dark:from-black dark:via-emerald-950/10 dark:to-black overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b bg-gradient-to-r from-emerald-100/90 via-white/90 to-emerald-50/90 backdrop-blur-xl dark:from-emerald-950/60 dark:via-black/60 dark:to-emerald-900/60 dark:border-white/10 transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tighter text-blue-700 hover:scale-105 transition-transform">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-md">
              <Droplet className="w-5 h-5 absolute" />
              <Zap className="w-3 h-3 text-yellow-400 absolute fill-yellow-400" />
            </div>
            LightningFast <span className="text-gray-500 font-light">Laundry</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-medium text-sm">
            <Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How it works</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link href="#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
            <Link href="#poster" className="hover:text-blue-600 transition-colors">Poster</Link>
          </nav>
          <div className="flex gap-4 items-center">
            <Link href="/booking">
              <Button className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-40 scale-105 pointer-events-none"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-washing-machine-cleaning-clothes-26691-large.mp4" type="video/mp4" />
            </video>
            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-emerald-50/70 to-white/95 dark:from-black/90 dark:via-emerald-950/60 dark:to-black/95 pointer-events-none" />
          </div>
          
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 w-[600px] h-[600px] bg-white/40 dark:bg-emerald-700/20 rounded-full blur-3xl opacity-70 pointer-events-none z-0" />
          
          <motion.div 
            className="container px-6 relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 gap-2 text-sm shadow-sm font-medium">
                <Clock className="w-4 h-4" /> 24 Hours Delivery
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 gap-2 text-sm shadow-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> 24/7 Open
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 gap-2 text-sm shadow-sm font-medium">
                <Sparkles className="w-4 h-4" /> Summer Offer: 20% Off
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 pb-2">
              Lightning Fast <br/> Laundry.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-light">
              Get your clothes back pristine and fresh in under 24 hours. Premium care for your garments with Apple-level convenience.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link href="/booking" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-xl shadow-black/10 transition-all hover:scale-105">
                  Book Your Laundry
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mt-8 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-200 flex items-center justify-center text-[10px] font-bold z-${10-i}`}>
                    U{i}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900 dark:text-white">4.9/5</span>
                <span>from 10k+ customers</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Choose Us & Image Showcase */}
        <section id="how-it-works" className="py-24 bg-emerald-50/50 dark:bg-emerald-950/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-bold tracking-tight mb-4">How It Works</h2>
                <p className="text-gray-500 text-lg mb-10">Three simple steps to fresh clothes without ever leaving your home.</p>
                
                <div className="space-y-8">
                  {[
                    { step: "1", title: "Book a Pickup", desc: "Choose a time that works for you. We'll be there." },
                    { step: "2", title: "We Wash & Care", desc: "Premium washing, drying, and ironing by professionals." },
                    { step: "3", title: "Delivered in 24h", desc: "Fresh clothes delivered straight to your door." }
                  ].map((s, i) => (
                    <motion.div key={i} className="flex gap-6" variants={fadeInUp}>
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-black shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 text-blue-600 flex items-center justify-center text-2xl font-bold">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                        <p className="text-gray-500">{s.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                variants={fadeInUp}
              >
                <Image 
                  src="/laundry-1.png" 
                  alt="Premium Folded Laundry" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl mb-1">Pristine Care</p>
                    <p className="text-white/80">Every garment is handled with perfection.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-white dark:bg-black">
          <motion.div 
            className="container mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
              <p className="text-gray-500 text-lg">No hidden fees, just sparkling clean clothes.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Wash & Fold */}
              <motion.div variants={fadeInUp} className="bg-emerald-50/30 dark:bg-emerald-950/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 flex flex-col text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-bold mb-2">Wash & Fold</h3>
                <div className="text-4xl font-extrabold mb-4 text-emerald-600">₹60<span className="text-lg text-gray-500 font-medium">/kg</span></div>
                <p className="text-gray-500 mb-6">Perfect for everyday laundry like t-shirts, jeans, and socks.</p>
                <ul className="text-left space-y-3 mb-8 flex-grow">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Machine Wash</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Tumble Dry</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Neatly Folded</li>
                </ul>
                <Link href="/booking">
                  <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black">Book Now</Button>
                </Link>
              </motion.div>
              
              {/* Dry Cleaning */}
              <motion.div variants={fadeInUp} className="bg-blue-600 text-white p-8 rounded-3xl shadow-2xl shadow-blue-600/30 flex flex-col text-center relative transition-transform hover:-translate-y-2 md:scale-105 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-md">Most Popular</div>
                <h3 className="text-xl font-bold mb-2">Dry Cleaning</h3>
                <div className="text-4xl font-extrabold mb-4">₹150<span className="text-lg text-blue-200 font-medium">/pc</span></div>
                <p className="text-blue-100 mb-6">Premium care for suits, dresses, and delicate fabrics.</p>
                <ul className="text-left space-y-3 mb-8 flex-grow">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-300"/> Stain Removal</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-300"/> Premium Solvents</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-300"/> Hand Pressed</li>
                </ul>
                <Link href="/booking">
                  <Button className="w-full rounded-full bg-white text-blue-700 hover:bg-gray-100">Book Now</Button>
                </Link>
              </motion.div>

              {/* Ironing */}
              <motion.div variants={fadeInUp} className="bg-emerald-50/30 dark:bg-emerald-950/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 flex flex-col text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-bold mb-2">Steam Ironing</h3>
                <div className="text-4xl font-extrabold mb-4 text-emerald-600">₹20<span className="text-lg text-gray-500 font-medium">/pc</span></div>
                <p className="text-gray-500 mb-6">Crisp, wrinkle-free finish for your shirts and trousers.</p>
                <ul className="text-left space-y-3 mb-8 flex-grow">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Steam Press</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Hanger Packed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Starch Optional</li>
                </ul>
                <Link href="/booking">
                  <Button variant="outline" className="w-full rounded-full border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">Book Now</Button>
                </Link>
              </motion.div>
            </div>
            
            {/* Added second image showcase */}
            <motion.div variants={fadeInUp} className="relative h-[400px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl group">
               <Image 
                  src="/laundry-2.png" 
                  alt="Premium Dry Cleaning" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white max-w-xl">
                    <p className="font-bold text-3xl mb-2">The Dry Cleaning Experts</p>
                    <p className="text-white/80 text-lg">Entrust us with your most valuable and delicate fabrics. Our state-of-the-art facilities ensure they are treated with the utmost care.</p>
                  </div>
                </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="testimonials" className="py-24 bg-emerald-50/50 dark:bg-emerald-950/20 backdrop-blur-sm overflow-hidden">
          <motion.div 
            className="container mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Loved by Customers</h2>
              <p className="text-gray-500 text-lg">Don't just take our word for it.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Priya Sharma", role: "Working Professional", text: "LightningFast Laundry is a lifesaver! My clothes come back smelling amazing and perfectly ironed. Highly recommend their 24h service." },
                { name: "Rahul Verma", role: "Student", text: "Super affordable and convenient. The WhatsApp booking flow is genius, and they are always on time with pickups." },
                { name: "Sneha Patel", role: "Homemaker", text: "I tried their dry cleaning for my silk sarees and the results were phenomenal. Premium quality service at reasonable prices." }
              ].map((t, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white dark:bg-black p-8 rounded-3xl shadow-md shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="faq" className="py-24 bg-white dark:bg-black">
          <motion.div 
            className="container mx-auto px-6 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-lg">Got questions? We've got answers.</p>
            </motion.div>
            
            <div className="space-y-4">
              {[
                { q: "How fast is the turnaround time?", a: "We guarantee a 24-hour turnaround for standard wash and fold services. Dry cleaning may take up to 48 hours depending on the garment." },
                { q: "Do you offer free pickup and delivery?", a: "Yes! Pickup and delivery are completely free for all orders above ₹300." },
                { q: "How do I pay for my order?", a: "You can pay via UPI, cash, or card at the time of delivery once you've checked your garments." },
                { q: "What if I'm not home during pickup?", a: "You can leave your laundry with your building guard or instruct us via WhatsApp to pick it up from outside your door." }
              ].map((faq, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Poster Section */}
        <section id="poster" className="py-24 bg-emerald-50/50 dark:bg-emerald-950/20 backdrop-blur-sm overflow-hidden">
          <motion.div 
            className="container mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={fadeInUp}>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Spread the Word</h2>
              <p className="text-gray-500 text-lg">Download our promotional poster and share it with your friends!</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-8">
              <div className="relative w-full max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                {/* 
                  To the Developer: 
                  Place the user's uploaded poster image as "poster.jpg" inside apps/client/public/ 
                */}
                <Image 
                  src="/poster.jpg" 
                  alt="Lightning Fast Laundry Promotional Poster" 
                  fill 
                  className="object-cover"
                />
              </div>
              <a href="/poster.jpg" download="LightningFastLaundry_Poster.jpg">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all hover:scale-105">
                  Download Poster
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-emerald-100 dark:border-emerald-900/30 py-12">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} LightningFast Laundry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
