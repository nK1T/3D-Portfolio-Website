import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Digital from './Digital'
function Digitalmarketing() {
  return (
    <Canvas>
        <Stage environment={'city'}  intensity={0.6}>
            <Digital/>
        </Stage>
        <OrbitControls autoRotate enableZoom={false}/>
      </Canvas>
  )
}

export default Digitalmarketing
