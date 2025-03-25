import './index.css';
import { Canvas } from '@react-three/fiber';
import ViewerMenu from './components/ViewerMenu';
import { SidebarProvider } from './components/ui/sidebar';
import { CameraControls } from '@react-three/drei'
import { Vector3 } from 'three';
import { AppProvider } from './contexts/AppContext';
import EntitiesGroup from './components/EntitiesGroup';
import Floor from './components/Floor';

function App() {
  return (
    <SidebarProvider>
      <AppProvider>
        <ViewerMenu />
        <div className='w-full'>
          <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: new Vector3(5, 10, 10) }}>
            <CameraControls />

            <EntitiesGroup />

            <Floor />

            <ambientLight intensity={0.1} />
            <directionalLight position={[10, 20, 10]} intensity={3} castShadow />
          </Canvas>
        </div>
      </AppProvider>
    </SidebarProvider>
  )
}

export default App
