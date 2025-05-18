'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const SERVICE_ID = 'service_8ofjqps';
const TEMPLATE_ID = 'template_rqwvkng';
const PUBLIC_KEY = 'UdvOoAJbVxc1OVeGR';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const prefillName = searchParams.get('name') || '';
  const prefillMessage =
    searchParams.get('message') ||
    (searchParams.get('plan')
      ? `I'm interested in the ${searchParams.get('plan')} plan. Please tell me more about it.`
      : '');

  const [formData, setFormData] = useState({
    name: prefillName,
    email: '',
    message: prefillMessage,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSubmitted(true);
    } catch (error) {
      alert('Failed to send message. Please try again.');
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
        className={`min-h-screen px-6 py-24 bg-gradient-to-br from-[#2e1a15] via-[#1c1f2b] to-[#0e0e11] text-[#f2e8df] flex items-center justify-center ${inter.variable} font-sans`}
      >
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-[#3d2c1e]/40">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#f9f5f0]">
            Let’s Connect
          </h1>

          {submitted ? (
            <div className="text-center text-xl text-[#f4e9dc]">
              🎉 Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#e8ded3]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-[#c8bcb0] rounded-md bg-[#f6f1ea] text-[#2e1a15] focus:outline-none focus:ring-2 focus:ring-[#32507a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#e8ded3]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-[#c8bcb0] rounded-md bg-[#f6f1ea] text-[#2e1a15] focus:outline-none focus:ring-2 focus:ring-[#32507a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#e8ded3]">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What’s on your mind?"
                  className="w-full px-4 py-2 border border-[#c8bcb0] rounded-md bg-[#f6f1ea] text-[#2e1a15] h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#32507a]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#3a1e18] to-[#1c2a44] hover:from-[#2d1612] hover:to-[#141d2f] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
