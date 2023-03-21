import { useRef, useState } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Image } from '@react-three/drei'


export default function Wall(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const canvasRef = useRef()
  // Hold state for hovered and clicked events
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })

  const handleClick = (event) => {
    const { clientX, clientY } = event
    const rect = canvasRef.current ? canvasRef.current.getBoundingClientRect() : null;
 
    const x = ((clientX - rect.left) / rect.width) * 2 - 1
    const y = -((clientY - rect.top) / rect.height) * 2 + 1
    console.log(`Clicked on canvas at (${x}, ${y})`)
  }

  return (
    <>
    <mesh
    style={{ width: '100px', height: '100px' }}
      {...props}
      ref={canvasRef}
      onClick={handleClick}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    >
      <boxGeometry args={[3, 6, 1]} />
      <meshStandardMaterial color={hovered ? 'orange' : props.wallcolor} />
    </mesh>
    {clicked && (
        <Image
        url="../../vite.svg"
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
      
     
    )}
  </>
  )
}