import * as THREE from 'three'
import React, { useMemo } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import styled from 'styled-components'

const CanvasContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
const Image = () => {
  const { viewport } = useThree()
  const texture = useMemo(() => new THREE.TextureLoader().load('./hero.jpg'), [
    './hero.jpg',
  ])
  console.log(texture)

  return (
    <mesh>
      <planeBufferGeometry
        attach="geometry"
        args={[viewport.width, viewport.height]}
      />
      <meshBasicMaterial attach="material" depthTest={false} transparent>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  )
}

const AnimatedHero = () => (
  <CanvasContainer>
    <Canvas camera={{ position: [0, 0, 50] }}>
      >
      <Image />
    </Canvas>
  </CanvasContainer>
)

export default AnimatedHero
