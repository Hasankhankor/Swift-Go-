"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Text3D, Center } from "@react-three/drei"
import type * as THREE from "three"

export default function DeliveryScene() {
  const bikeRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (bikeRef.current) {
      bikeRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2
      bikeRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group>
      {/* Animated Delivery Bike */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={bikeRef} position={[3, -2, -5]}>
          {/* Bike Body */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 0.5, 0.3]} />
            <meshStandardMaterial color="#FFD700" />
          </mesh>

          {/* Wheels */}
          <mesh position={[-0.8, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.1]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          <mesh position={[0.8, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.1]} />
            <meshStandardMaterial color="#333" />
          </mesh>

          {/* Delivery Box */}
          <mesh position={[0, 0.5, -0.2]}>
            <boxGeometry args={[1, 0.8, 0.8]} />
            <meshStandardMaterial color="#FFD700" />
          </mesh>
        </group>
      </Float>

      {/* Floating 3D Text */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        <Center position={[-4, 2, -3]}>
          <Text3D font="/fonts/Geist_Bold.json" size={0.5} height={0.1} curveSegments={12}>
            FAST
            <meshStandardMaterial color="#000" />
          </Text3D>
        </Center>
      </Float>

      <Float speed={1.8} rotationIntensity={0.1} floatIntensity={0.4}>
        <Center position={[4, 1, -4]}>
          <Text3D font="/fonts/Geist_Bold.json" size={0.4} height={0.1} curveSegments={12}>
            RELIABLE
            <meshStandardMaterial color="#000" />
          </Text3D>
        </Center>
      </Float>
    </group>
  )
}
