import * as THREE from 'three'
import React, { useMemo } from 'react'
import { Canvas } from 'react-three-fiber'

const Image = () => {
  const texture = useMemo(() => new THREE.TextureLoader().load('./bg.jpg'), [
    './bg.jpg',
  ])

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshLambertMaterial attach="material" transparent>
        <primitive attach="map" object={texture} />
      </meshLambertMaterial>
    </mesh>
  )
}

const Logo = () => (
  <Canvas>
    <Image />
  </Canvas>
)

export default Logo
