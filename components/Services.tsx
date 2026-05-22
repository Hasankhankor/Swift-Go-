"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Coffee, MapPin, Package, Pill, ShoppingCart } from "lucide-react"

const services = [
  {
    icon: <Coffee className="w-12 h-12 text-yellow-500" />,
    title: "Food Delivery",
    description: "Hot meals delivered fresh to your doorstep.",
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-yellow-500" />,
    title: "Grocery Delivery",
    description: "Daily essentials and groceries delivered.",
  },
  {
    icon: <Pill className="w-12 h-12 text-yellow-500" />,
    title: "Pharmacy & Medicine",
    description: "Medicines and healthcare products.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-yellow-500" />,
    title: "Bookstore Delivery",
    description: "Books and educational materials.",
  },
  {
    icon: <Package className="w-12 h-12 text-yellow-500" />,
    title: "Parcel & Document",
    description: "Safe dispatch of parcels and documents.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-yellow-500" />,
    title: "Custom City Errands",
    description: "Local deliveries across the city.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Add background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Services We
            <span className="block text-yellow-500">Offer</span>
          </h2>
          <p className="text-xl text-gray-600">Comprehensive delivery solutions for all your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-sm font-bold text-yellow-600">Starting from Rs. 25/km</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
