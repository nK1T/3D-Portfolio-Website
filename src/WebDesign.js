import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Laptop from './Laptop'
function WebDesign() {
  return (
      <Canvas>
        <Stage environment={'city'}  intensity={0.6}>
            <Laptop/>
        </Stage>
        <OrbitControls autoRotate enableZoom={false}/>
      </Canvas>
  )
}

export default WebDesign
