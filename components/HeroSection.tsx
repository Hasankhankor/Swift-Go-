"use client"

import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import Image from "next/image"
import { Suspense } from "react"
import { ArrowRight, Smartphone } from "lucide-react"
import DeliveryScene from "./3D/DeliveryScene"
import FloatingPackages from "./3D/FloatingPackages"

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 overflow-hidden">
      {/* Add animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"></div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            {/* Remove Environment preset to avoid HDR fetch error */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <DeliveryScene />
            <FloatingPackages />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl lg:text-8xl font-black text-black mb-6 leading-tight tracking-tight"
              >
                Swift<span className="text-white">Go</span>
                <span className="block text-4xl lg:text-6xl font-light text-black/80">Delivery Services</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl lg:text-4xl text-black font-medium mb-8 tracking-wide"
              >
                &quot;Fast, Reliable, and <span className="font-bold text-white">Everywhere</span>&quot;
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a
                  href="https://wa.me/923139803041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-4 bg-black text-yellow-400 font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Smartphone className="w-5 h-5 mr-3" />
                  <span>Order Now on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-3" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src="/images/new-rider-logo.png"
                alt="SwiftGo Delivery Rider"
                width={800}
                height={800}
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-3 bg-black rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
