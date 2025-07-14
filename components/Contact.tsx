"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-xl text-black">Available across Pakistan (City-Wide)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-black mb-3">Phone / WhatsApp</h3>
            <a href="tel:03139803041" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              0313-9803041
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-black mb-3">Email</h3>
            <a
              href="mailto:swiftgodeliveryservices@gmail.com"
              className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm"
            >
              swiftgodeliveryservices@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="text-4xl mb-4">📘</div>
            <h3 className="text-xl font-bold text-black mb-3">Facebook</h3>
            <a
              href="https://facebook.com/SwiftGoDeliveryServices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              SwiftGo Delivery Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="text-4xl mb-4">🇵🇰</div>
            <h3 className="text-xl font-bold text-black mb-3">Coverage</h3>
            <p className="text-gray-600 font-semibold">Available across Pakistan</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/923139803041"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-black text-yellow-400 font-bold text-xl rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🚀 Start Your Delivery Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
