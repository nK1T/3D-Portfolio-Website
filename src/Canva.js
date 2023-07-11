import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Game from './Game'

function Canva() {
  return (
    <Canvas>
        <Stage environment={'city'}  intensity={0.6}>
            <Game/>
        </Stage>
        <OrbitControls autoRotate enableZoom={false}/>
      </Canvas>
  )
}

export default Canva
