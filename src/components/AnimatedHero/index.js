import React, { useState, useMemo } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
import * as THREE from 'three'

import image from '../../../static/hero.png'
import imageMap from '../../../static/hero-map.png'

import './styles.scss'

const aspectRatio = 781 / 1173
const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `

const fragmentShader = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  varying vec2 vUv;
  uniform vec2 threshold;
  uniform sampler2D texture;
  uniform sampler2D map;
  uniform float dispX;
  uniform float dispY;
  uniform float _rot;

  vec2 mirrored(vec2 v) {
    vec2 m = mod(v, 2.);
    return mix(m, 2.0 - m, step(1.0, m));
  }
  void main() {
    vec4 tex1 = texture2D(map, mirrored(vUv));
    vec2 fake3d = vec2(vUv.x + (tex1.r - 0.5) * dispX / threshold.x, vUv.y + (tex1.r - 0.5) * dispY / threshold.y);
    gl_FragColor = texture2D(texture, mirrored(fake3d));
  }
`

const AnimatedHero = () => {
  const [mouse, setMouse] = useState([0, 0])

  const onMouseMove = ({ clientX: x, clientY: y }) => {
    setMouse([x / window.innerWidth, y / window.innerHeight])
  }
  return (
    <div className="WebGLDemo">
      <div className="WebGLDemo__scene" onMouseMove={onMouseMove}>
        <Scene {...{ mouse }} />
      </div>
    </div>
  )
}

const Scene = ({ mouse, ...props }) => (
  <Canvas {...props}>
    <MainImage {...{ mouse }} />
  </Canvas>
)

const planeGeomArgs = [8, 8]
const scale = [1, aspectRatio, 1]

const MainImage = ({ mouse }) => {
  const { invalidate } = useThree()

  const { dispX, dispY } = useSpring({
    dispX: mouse[0],
    dispY: mouse[1],
  })

  const args = useMemo(() => {
    const loader = new THREE.TextureLoader()

    return [
      {
        uniforms: {
          texture: { type: 't', value: loader.load(image, invalidate) },
          map: { type: 't', value: loader.load(imageMap, invalidate) },
          threshold: {
            type: '2f',
            value: [35, 15],
          },
          dispX: { type: 'f', value: 0 },
          dispY: { type: 'f', value: 0 },
        },
        vertexShader,
        fragmentShader,
      },
    ]
  }, [invalidate])

  return (
    <mesh scale={scale} position={new THREE.Vector3(0, 1.25, 0)}>
      <planeBufferGeometry attach="geometry" args={planeGeomArgs} />
      <a.shaderMaterial
        attach="material"
        args={args}
        uniforms-dispX-value={dispX}
        uniforms-dispY-value={dispY}
      />
    </mesh>
  )
}

export default AnimatedHero
