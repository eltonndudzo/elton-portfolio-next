"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

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
              🎉 Thank you! Your message has been sent. I’ll get back to you soon.
            </div>
          ) : (
            <form
              action="https://formspree.io/f/mldbggyk"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b3832] bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b3832] bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#4b3832] bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4b3832] hover:bg-[#3a2f2b] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
