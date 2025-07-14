"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">SwiftGo</h3>
            <p className="text-gray-400">Fast, Reliable, and Everywhere</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Become a Rider
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Food Delivery</span>
              </li>
              <li>
                <span className="text-gray-400">Grocery Delivery</span>
              </li>
              <li>
                <span className="text-gray-400">Pharmacy Delivery</span>
              </li>
              <li>
                <span className="text-gray-400">Document Dispatch</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/SwiftGoDeliveryServices"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                📘
              </motion.a>
              <motion.a
                href="https://wa.me/923139803041"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                📱
              </motion.a>
              <motion.a
                href="mailto:swiftgodeliveryservices@gmail.com"
                whileHover={{ scale: 1.2 }}
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                📧
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">© 2025 SwiftGo Delivery Services. All rights reserved.</p>
          <p className="text-yellow-400 font-semibold">Made with ❤️ in Pakistan</p>
        </div>
      </div>
    </footer>
  )
}
