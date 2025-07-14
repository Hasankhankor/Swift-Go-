"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: "🛒",
    title: "Choose Your Items",
    description: "Food, Pharmacy, Grocery, Books, etc.",
  },
  {
    icon: "📍",
    title: "Send Your Location",
    description: "via WhatsApp or Call",
  },
  {
    icon: "✅",
    title: "Confirm Order & Charges",
    description: "Flat Delivery Rate: Rs. 25/km",
  },
  {
    icon: "🚚",
    title: "Sit Back & Get It Delivered",
    description: "Fast and reliable delivery to your door",
  },
]

export default function HowToOrder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            How to
            <span className="block text-yellow-500">Order</span>
          </h2>
          <p className="text-xl text-gray-600">Simple steps to get your items delivered</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group relative"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-5xl mb-6 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
