import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";

const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
});

export default function ITPage() {
  return (
    <div className={`${calSans.variable} font-sans bg-[#0e0e11] text-[#e4dfda] min-h-screen px-4`}>
      
      {/* Hero */}
      <section className="text-center py-24 border-b border-[#2a2724]">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Web Development & Digital Solutions
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-[#a89d93] mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Engineering precision meets soulful creativity. I build digital experiences that work and feel right.
        </motion.p>
      </section>

      {/* Services */}
      <section className="py-20 border-b border-[#2a2724]">
        <h2 className="text-2xl font-semibold text-center mb-12 text-[#d8c4ae]">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { title: "Custom Websites", desc: "Personal, business, or portfolio websites crafted with clarity and identity." },
            { title: "Web Apps", desc: "Full-stack solutions using Django + Next.js for scale and security." },
            { title: "E-Commerce", desc: "Functional storefronts with payment systems and easy management." },
            { title: "API Integration", desc: "Smart systems that talk to each other — from CRMs to payment tools." },
            { title: "Deployment", desc: "From Vercel to Render, I make sure your site is fast and stable." },
            { title: "Redesigns", desc: "Modernize your web presence with improved speed, SEO, and UX." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-[#2a2724] rounded-lg hover:bg-[#1a1816] transition"
            >
              <h3 className="text-lg font-medium mb-2 text-[#f3efe9]">{s.title}</h3>
              <p className="text-sm text-[#a89d93]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Me */}
      <section className="py-20 border-b border-[#2a2724]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-semibold mb-4 text-[#d8c4ae]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Work With Me?
          </motion.h2>
          <p className="text-base mb-2 text-[#b0a59c]">
            I design, build, and refine web products that carry intention.
          </p>
          <p className="text-base text-[#b0a59c]">
            Whether launching something new or reimagining the old, I blend clarity, aesthetic, and function.
          </p>
        </div>
      </section>

      {/* Stack & Tools */}
      <section className="py-20 border-b border-[#2a2724]">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#d8c4ae]">Stack & Tools</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {[
            "react", "nextdotjs", "tailwindcss", "django", "javascript", "html5", "git"
          ].map((tech, i) => (
            <motion.img
              key={tech}
              src={`/tech/${tech}.svg`}
              alt={tech}
              className="w-12 h-12 grayscale hover:grayscale-0 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 border-b border-[#2a2724]">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#d8c4ae]">Simple Pricing</h2>
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto justify-center">
          {[
            {
              title: "Starter",
              price: "$100+",
              features: ["1–3 pages", "Mobile-optimized", "Live on web"]
            },
            {
              title: "Pro",
              price: "$250+",
              features: ["Custom backend", "API integrations", "More pages"]
            },
            {
              title: "Premium",
              price: "Custom",
              features: ["Complex systems", "Ongoing support", "E-Commerce"]
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className="flex-1 border border-[#2a2724] p-6 rounded-lg hover:bg-[#1a1816] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-[#f3efe9]">{plan.title}</h3>
              <p className="text-xl font-bold mb-4">{plan.price}</p>
              <ul className="text-sm text-[#a89d93] space-y-1">
                {plan.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#d8c4ae]">Let’s build something smart</h2>
          <p className="text-[#a89d93] mb-6">
            Reach out and we’ll shape something simple, elegant, and powerful.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#f4eee6] text-black text-sm rounded-full hover:bg-white transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
