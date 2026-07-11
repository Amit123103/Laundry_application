import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, Star, Sparkles, Droplet, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 dark:from-black dark:via-emerald-950/10 dark:to-black">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b bg-gradient-to-r from-emerald-100/90 via-white/90 to-emerald-50/90 backdrop-blur-xl dark:from-emerald-950/60 dark:via-black/60 dark:to-emerald-900/60 dark:border-white/10 transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tighter text-blue-700">
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
          </nav>
          <div className="flex gap-4 items-center">
            <Link href="/booking">
              <Button className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 w-[600px] h-[600px] bg-white/40 dark:bg-emerald-700/20 rounded-full blur-3xl opacity-70 pointer-events-none" />
          
          <div className="container px-6 relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 gap-2 text-sm shadow-sm font-medium">
                <Clock className="w-4 h-4" /> 24 Hours Delivery
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 gap-2 text-sm shadow-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> 24/7 Open
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 gap-2 text-sm shadow-sm font-medium">
                <Sparkles className="w-4 h-4" /> Summer Offer: 20% Off
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 pb-2">
              Lightning Fast <br/> Laundry.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-light">
              Get your clothes back pristine and fresh in under 24 hours. Premium care for your garments with Apple-level convenience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link href="/booking" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-xl shadow-black/10 transition-all hover:scale-105">
                  Book Your Laundry
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-500">
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
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="how-it-works" className="py-24 bg-emerald-50/50 dark:bg-emerald-950/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">How It Works</h2>
              <p className="text-gray-500 text-lg">Three simple steps to fresh clothes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Book a Pickup", desc: "Choose a time that works for you. We'll be there." },
                { step: "2", title: "We Wash & Care", desc: "Premium washing, drying, and ironing by professionals." },
                { step: "3", title: "Delivered in 24h", desc: "Fresh clothes delivered straight to your door." }
              ].map((s, i) => (
                <div key={i} className="bg-white dark:bg-black p-8 rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2 cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section id="pricing" className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
            <p className="text-gray-500 text-lg">No hidden fees, just sparkling clean clothes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Wash & Fold */}
            <div className="bg-emerald-50/30 dark:bg-emerald-950/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 flex flex-col text-center transition-transform hover:-translate-y-2">
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
            </div>
            
            {/* Dry Cleaning */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl shadow-blue-600/20 flex flex-col text-center relative transition-transform hover:-translate-y-2 scale-105 z-10">
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
            </div>

            {/* Ironing */}
            <div className="bg-emerald-50/30 dark:bg-emerald-950/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 flex flex-col text-center transition-transform hover:-translate-y-2">
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
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-emerald-50/50 dark:bg-emerald-950/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Loved by Customers</h2>
            <p className="text-gray-500 text-lg">Don't just take our word for it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Priya Sharma", role: "Working Professional", text: "LightningFast Laundry is a lifesaver! My clothes come back smelling amazing and perfectly ironed. Highly recommend their 24h service." },
              { name: "Rahul Verma", role: "Student", text: "Super affordable and convenient. The WhatsApp booking flow is genius, and they are always on time with pickups." },
              { name: "Sneha Patel", role: "Homemaker", text: "I tried their dry cleaning for my silk sarees and the results were phenomenal. Premium quality service at reasonable prices." }
            ].map((t, i) => (
              <div key={i} className="bg-white dark:bg-black p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How fast is the turnaround time?", a: "We guarantee a 24-hour turnaround for standard wash and fold services. Dry cleaning may take up to 48 hours depending on the garment." },
              { q: "Do you offer free pickup and delivery?", a: "Yes! Pickup and delivery are completely free for all orders above ₹300." },
              { q: "How do I pay for my order?", a: "You can pay via UPI, cash, or card at the time of delivery once you've checked your garments." },
              { q: "What if I'm not home during pickup?", a: "You can leave your laundry with your building guard or instruct us via WhatsApp to pick it up from outside your door." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-emerald-100 dark:border-emerald-900/30 py-12">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} LightningFast Laundry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
