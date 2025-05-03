import { motion } from "framer-motion";
import Link from "next/link";

export default function ITPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f8f5f2] to-[#e0dfdb] text-gray-800 px-4">
      
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Web Development & Digital Solutions
        </motion.h1>
        <motion.p 
          className="text-lg max-w-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Blending engineering precision with soulful creativity, I help individuals, startups, and organizations build beautiful, functional digital experiences.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Custom Websites", desc: "Personal, business, and portfolio websites built with clean design and strong identity." },
            { title: "Full-Stack Web Apps", desc: "Dynamic and scalable apps using Django and React/Next.js." },
            { title: "E-Commerce Solutions", desc: "Modern storefronts with payment integration and inventory control." },
            { title: "API Integration", desc: "Connecting services and automating data flow with RESTful APIs." },
            { title: "Hosting & Deployment", desc: "Secure, optimized deployment to Render, Vercel, or custom servers." },
            { title: "Site Redesigns & Optimization", desc: "Give your current website a speed, SEO, and design upgrade." },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-gradient-to-r from-[#e0dfdb] to-[#d1cfca] text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
          <p className="text-gray-700 text-lg mb-4">
            I understand the power of design, storytelling, and technology. Whether you're building from scratch or modernizing your online presence, I bring creativity, clarity, and technical strength to the table.
          </p>
          <p className="text-gray-700 text-lg">
            I don’t just write code, I craft experiences that resonate.
          </p>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-10">Technologies I Use</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {[
              { name: "React", src: "/tech/react.svg" },
              { name: "Next.js", src: "/tech/nextdotjs.svg" },
              { name: "Tailwind CSS", src: "/tech/tailwindcss.svg" },
              { name: "Django", src: "/tech/django.svg" },
              { name: "JavaScript", src: "/tech/javascript.svg" },
              { name: "HTML5", src: "/tech/html5.svg" },
              { name: "Git", src: "/tech/git.svg" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="w-16 h-16"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" title={tech.name} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Flexible Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {[
            { title: "Starter", price: "$100+", features: ["1–3 pages", "Responsive Design", "Deployed & Delivered"] },
            { title: "Pro", price: "$250+", features: ["5+ pages or app", "Backend + API", "Custom Features"] },
            { title: "Premium", price: "Custom", features: ["Complex systems", "E-Commerce", "Ongoing support"] },
          ].map((plan, index) => (
            <Link key={index} href={`/contact?plan=${plan.title.toLowerCase()}`} passHref>
              <motion.div
                className="cursor-pointer bg-white rounded-xl shadow-lg p-8 text-center flex-1 hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="text-gray-600 space-y-2">
                  {plan.features.map((f, i) => <li key={i}>✅ {f}</li>)}
                </ul>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f8f5f2] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Let’s bring your ideas to life with elegance and performance. Reach out today and let’s build something impactful together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-gray-700 text-white py-3 px-6 rounded-full transition duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
