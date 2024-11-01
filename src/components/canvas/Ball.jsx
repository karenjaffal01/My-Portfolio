import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal, //to put a 2d element on a 3d object
  Float,
  OrbitControls,
  Preload,
  useTexture, // loads image textures for applying decals
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={4.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {/*first arg for radius second for smoothness of faces */}
        <meshStandardMaterial
          color="#fff8eb"
          flatShading
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} //along x-axis allow full rotation on y axis no elongation and on z is for the alignment of the photo in correct position
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
