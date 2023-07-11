import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Reacts from './Reacts'
function SoftwareDesign() {
  return (
    <Canvas>
        <Stage environment={'city'} intensity={0.6}>
            <Reacts/>
        </Stage>
        <OrbitControls autoRotate enableZoom={false}/>
      </Canvas>
  )
}

export default SoftwareDesign
