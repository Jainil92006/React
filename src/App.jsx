import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-indigo-600"
        >
          MindGrow
        </motion.div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["About", "Programs", "Features", "Contact"].map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <a href={`#${link.toLowerCase()}`} className="hover:text-indigo-600">
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Start Free Trial
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 px-6 bg-gradient-to-br from-indigo-50 via-white to-pink-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Fun & Mindful Learning for Kids
            </h1>
            <p className="text-gray-600 text-lg">
              Build focus, creativity, and confidence through guided activities
              designed for young minds. Safe, engaging, and screen-friendly.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition"
              >
                Explore Programs
              </motion.button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="w-full h-72 md:h-96 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-xl flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-2xl text-gray-500">🎨 Illustration / Image</span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose MindGrow?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our programs are crafted by experts to support mental well-being,
            reduce stress, and spark curiosity — helping kids thrive both in
            school and life.
          </p>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        id="programs"
        className="py-20 px-6 bg-indigo-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Programs We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Focus & Memory", "Creativity Boost", "Calm & Relax"].map((prog, i) => (
              <motion.div
                key={prog}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-indigo-600">{prog}</h3>
                <p className="text-gray-600 mt-2">
                  Engaging exercises designed to nurture {prog.toLowerCase()} in
                  kids through fun and mindful practices.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Features that Kids Love 💜
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Fun, story-based learning</li>
              <li>✔ Safe & ad-free environment</li>
              <li>✔ Designed by child development experts</li>
              <li>✔ Works across devices</li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full h-72 bg-gradient-to-br from-pink-100 to-indigo-100 rounded-xl flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📱 App Preview
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 bg-indigo-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions? Reach out and we’ll be happy to help you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>© 2025 MindGrow. All rights reserved.</p>
      </footer>

      {/* Popup Form */}
      {showForm && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Start Your Free Trial
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
              <input type="text" placeholder="Class" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
              <textarea placeholder="Message" rows="3" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
