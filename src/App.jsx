
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Wall from "./Component/Wall"
export default function App() {
  
  return (

    <Canvas style={{display:"flex", width:1800 , height:1000 , backgroundColor:'blueviolet',alignItems:'center'}}>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Wall position={[-9, 0, 6]} wallcolor={'green'} />
      <Wall position={[-5,0, 3]} wallcolor={'yellow'} />
      <Wall position={[-0.8, 0, 1]} wallcolor={'blue'} />
      <Wall position={[4,-0, 3]}  wallcolor={'violet'}/>
      <Wall position={[10, 0, 6]} wallcolor={'white'}/>
      <OrbitControls />
    </Canvas>

  )
}

