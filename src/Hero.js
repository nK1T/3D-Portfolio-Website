import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import line from './images/line.png'
import bat from './images/bat.png'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei'
import { Material } from 'three'

function Hero() {
  return (
    <div className='hero-container'>
      <Navbar/>
      <div className='hero-items'>
        <div className='left'>
          <h1 className='title'>Think. Solve. Build.</h1>
          <div className='desc'>
            <img alt="" src={line}></img>
            <h2>What We Do</h2>
          </div>
          <p>we enjoy creating delightful, human-centered digital experiences.</p>
          <button>Learn more</button>
        </div>
        <div className='right'>
        <Canvas camera={{position:[5,5,5]}}>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
              <Sphere args={[1.2,50,100]} scale={3}>
              <MeshDistortMaterial
              color={'#220736'} attach={"material"} distort={0.5} speed={2}
              />
              </Sphere>
          </Canvas>
          <img alt="" src={bat}></img>
        </div>
      </div>
    </div>
  )
}

export default Hero
