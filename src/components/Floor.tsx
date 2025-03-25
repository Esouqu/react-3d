import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";

export function Floor() {
  const appContext = useContext(AppContext);

  return (
    <mesh
      position={[0, -0.25, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <boxGeometry args={[appContext?.floorSize, appContext?.floorSize, 0.5]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  )
}

export default Floor;
