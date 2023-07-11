import React, { useRef } from 'react'
import styled from 'styled-components'
import { BoxGeometry } from 'three'
import { PerspectiveCamera ,Text,RenderTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Cube() {
  const textRef = useRef();
  useFrame((state)=>textRef.current.position.x=Math.sin(state.clock.elapsedTime)*2);
  return (
    <mesh>
        <boxGeometry args={[3,3,3]}/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera 
                    makeDefault 
                    position={[0,0,2]}
                    />
                    <color attach="background" args={["#dc9dcd"]}/> 
                    <Text ref={textRef} fontsize ={1} color="#555">
                        Hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
    </mesh>
  )
}

export default Cube
