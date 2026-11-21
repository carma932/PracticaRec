
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import type { Mesh } from 'three'

function Cubo() {
  const cubo = useRef<Mesh>(null)
  const [encima, setEncima] = useState(false)

  useFrame((_state, delta) => {
    if (cubo.current) {
      cubo.current.rotation.y += delta * 0.8
      cubo.current.rotation.x += delta * 0.35
    }
  })

  return (
    <mesh
      ref={cubo}
      position={[-2.5, 0, -3]}
      scale={encima ? 1.4 : 1}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color="tomato" />
    </mesh>
  )
}

function Esfera() {
  const esfera = useRef<Mesh>(null)
  const [encima, setEncima] = useState(false)

  useFrame((_state, delta) => {
    if (esfera.current) {
      esfera.current.rotation.y += delta * 0.8
    }
  })

  return (
    <mesh
      ref={esfera}
      position={[0, 0, -3]}
      scale={encima ? 1.4 : 1}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  )
}

function Cono() {
  const cono = useRef<Mesh>(null)
  const [encima, setEncima] = useState(false)

  useFrame((_state, delta) => {
    if (cono.current) {
      cono.current.rotation.y += delta * 0.8
      cono.current.rotation.x += delta * 0.35
    }
  })

  return (
    <mesh
      ref={cono}
      position={[2.5, 0, -3]}
      scale={encima ? 1.4 : 1}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <coneGeometry args={[0.8, 1.5, 32]} />
      <meshStandardMaterial color="limegreen" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <Environment files="/fondo3.jpg" background />

      <Cubo />
      <Esfera />
      <Cono />

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
