"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

export default function FloatingPackages() {
  const packagesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (packagesRef.current) {
      packagesRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.01
        child.rotation.y += 0.005
      })
    }
  })

  const packages = Array.from({ length: 8 }, (_, i) => ({
    position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 20] as [
      number,
      number,
      number,
    ],
    scale: 0.3 + Math.random() * 0.4,
    color: Math.random() > 0.5 ? "#FFD700" : "#8B4513",
  }))

  return (
    <group ref={packagesRef}>
      {packages.map((pkg, index) => (
        <Float key={index} speed={1 + Math.random()} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={pkg.position} scale={pkg.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={pkg.color} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}
