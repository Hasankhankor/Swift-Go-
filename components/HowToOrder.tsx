"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, MapPin, ShoppingCart, Truck } from "lucide-react"

const steps = [
  {
    icon: <ShoppingCart className="w-12 h-12 text-black" />,
    title: "Choose Your Items",
    description: "Food, pharmacy, grocery, books, and more.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-black" />,
    title: "Send Your Location",
    description: "Via WhatsApp or a quick call.",
  },
  {
    icon: <CheckCircle2 className="w-12 h-12 text-black" />,
    title: "Confirm Order & Charges",
    description: "Flat delivery rate: Rs. 25/km.",
  },
  {
    icon: <Truck className="w-12 h-12 text-black" />,
    title: "Sit Back & Get It Delivered",
    description: "Fast, secure delivery to your door.",
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center group relative rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 transition-colors group-hover:text-yellow-600">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
