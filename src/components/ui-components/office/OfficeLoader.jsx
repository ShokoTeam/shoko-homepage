import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Office from "../../../models/Office.js";

const OfficeLoader = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
      <OrbitControls />
      <color attach="background" args={["lightblue"]} />
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <Suspense fallback={null} path={"/scene.gltf"}>
        <Office />
      </Suspense>
    </Canvas>
  );
};

export default OfficeLoader;
