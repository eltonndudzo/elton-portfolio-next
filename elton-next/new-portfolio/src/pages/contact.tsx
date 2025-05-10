"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_8ofjqps";       // from EmailJS
const TEMPLATE_ID = "template_rqwvkng";     // from EmailJS
const PUBLIC_KEY = "UdvOoAJbVxc1OVeGR";       // from EmailJS

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const prefillName = searchParams.get("name") || "";
  const prefillMessage = searchParams.get("message") || "";
  const plan = searchParams.get("plan");

  const [formData, setFormData] = useState({
    name: prefillName,
    email: "",
    message: prefillMessage || (plan ? `I'm interested in the ${plan} plan. Please tell me more about it.` : ""),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSubmitted(true);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Elton Ndudzo</title>
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen px-6 py-24 bg-[#f9f6f0] text-[#3d2c1e] flex items-center justify-center"
      >
        <div className="max-w-3xl w-full bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#e5e0d6]">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Let's Connect
          </h1>

          {submitted ? (
            <div className="text-center text-xl text-[#4b3832]">
              🎉 Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#4b3832]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#4b3832]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none bg-white focus:outline-none focus:ring-2 focus:ring-[#4b3832]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#4b3832] hover:bg-[#3a2f2b] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
