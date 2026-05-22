"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Mail, MapPin, Smartphone } from "lucide-react"

const cards = [
  {
    icon: <Smartphone className="w-5 h-5" />,
    label: "Phone / WhatsApp",
    content: (
      <a href="tel:03139803041" className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline">
        0313-9803041
      </a>
    ),
    delay: 0.1,
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    content: (
      <a
        href="mailto:swiftgodeliveryservices@gmail.com"
        className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline break-all"
      >
        swiftgodeliveryservices@gmail.com
      </a>
    ),
    delay: 0.2,
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
    content: (
      <a
        href="https://facebook.com/SwiftGoDeliveryServices"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline"
      >
        SwiftGo Delivery Services
      </a>
    ),
    delay: 0.3,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Coverage",
    content: (
      <div className="flex flex-col gap-1">
        {["Chakdara", "Thana", "Batkhela", "Shergarh"].map((city) => (
          <p key={city} className="text-sm font-medium text-gray-700">{city}</p>
        ))}
      </div>
    ),
    delay: 0.4,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Get in touch</h2>
          <p className="text-black/60 mt-2 text-base">Available across Pakistan — city-wide delivery</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {cards.map(({ icon, label, content, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay }}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:border-gray-200 transition-colors duration-150"
            >
              {/* Icon badge */}
              <div className="w-9 h-9 rounded-xl bg-black text-yellow-400 flex items-center justify-center shrink-0">
                {icon}
              </div>

              <div>
                {/* Label */}
                <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-2">{label}</p>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-3" />

                {/* Value */}
                {content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://wa.me/923139803041"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-yellow-400 font-semibold text-sm rounded-full hover:opacity-85 transition-opacity duration-150"
          >
            <Smartphone className="w-4 h-4" />
            Start your delivery now
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}