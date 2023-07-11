import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Batman from './Batman'

function Design3d() {
  return (
    <Canvas>
        <Stage environment={'city'} intensity={0.6}>
            <Batman/>
        </Stage>
        <OrbitControls autoRotate enableZoom={false}/>
      </Canvas>
  )
}

export default Design3d
