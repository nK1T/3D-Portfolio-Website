import React from 'react'
import "./App.css"
import line from './images/line.png'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'


function Hero() {
  return (
    <div className='me-container'>
      <div className='me-items'>
        <div className='me-right'>
          <Canvas camera={{position:[5,5,5]}}>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
              <Cube/>
          </Canvas>
        </div>
        <div className='me-left'>
          <h1 className='title2'>Think outside the square space</h1>
          <div className='desc2'>
            <img alt="" src={line}></img>
            <h2>Who We Are</h2>
          </div>
          <p>A creative group of designers and developers with the passion for art.</p>
          <button>See our Art</button>
        </div>
      </div>
    </div>
  ) 
}

export default Hero


