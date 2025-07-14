"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const pickDropServices = [
  {
    icon: "🏠➡️🏢",
    title: "Home to Office",
    description: "Documents, files, and personal items",
    time: "30-60 mins",
  },
  {
    icon: "🏪➡️🏠",
    title: "Store to Home",
    description: "Shopping items and purchases",
    time: "45-90 mins",
  },
  {
    icon: "🏥➡️🏠",
    title: "Hospital to Home",
    description: "Medical reports and prescriptions",
    time: "20-45 mins",
  },
  {
    icon: "🎓➡️🏠",
    title: "School to Home",
    description: "Books, assignments, and supplies",
    time: "25-50 mins",
  },
  {
    icon: "🏦➡️📍",
    title: "Bank Services",
    description: "Document collection and submission",
    time: "40-80 mins",
  },
  {
    icon: "📦➡️📍",
    title: "Custom Pickup",
    description: "Any legal item within city limits",
    time: "Variable",
  },
]

export default function PickDropServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-6"
          >
            Pick & Drop Services
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Door-to-Door
            <span className="block text-yellow-500">Delivery</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional pickup and delivery services across the city
          </p>

          {/* Pricing Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center bg-black text-yellow-400 px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl"
          >
            <span className="text-3xl mr-3">💰</span>
            <span>Only Rs. 25 per KM</span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pickDropServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-6xl mb-6 filter drop-shadow-lg">
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                    ⏱️ {service.time}
                  </span>
                  <motion.div whileHover={{ x: 5 }} className="text-yellow-500 font-bold text-lg">
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://wa.me/923139803041"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl rounded-2xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform"
          >
            <span className="text-2xl mr-3">📞</span>
            Book Your Pickup Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
