import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
//computer is for handling the model itself and computerCanvas is for the scene
const Computers = ({ isTablet }) => {
  const computer = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isTablet ? 2.5 : 6.5}
        position={isTablet ? [-2, 1, -2.2] : [1, 1, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 768px)"); //we need this initial value since if the component renders in specified size the initial is false and that is not true
    const visibilityQuery = window.matchMedia("(min-width: 426px)");

    setIsTablet(tabletQuery.matches);
    setIsVisible(visibilityQuery.matches);

    const handleTabletChange = (event) => {
      setIsTablet(event.matches);
    };
    const handleVisibilityChange = (event) => {
      setIsVisible(event.matches);
    };

    tabletQuery.addEventListener("change", handleTabletChange);
    visibilityQuery.addEventListener("change", handleVisibilityChange);

    return () => {
      tabletQuery.removeEventListener("change", handleTabletChange);
      visibilityQuery.removeEventListener("change", handleVisibilityChange);
    };
  }, []);

  if (!isVisible) return null; // Render nothing if screen width is less than 426px
  return (
    <Canvas
      frameloop="demand" //make scene render only when necessary for performance
      shadows
      dpr={[1, 2]} //pixel ratios for visuals
      camera={{ position: [30, 3, 5], fov: 40 }} //fov represent how wide the camera view is
      gl={{ preserveDrawingBuffer: true }}
      // This option is a WebGL context setting that tell the renderer to keep the drawing buffer intact after rendering. By default, the drawing buffer is cleared after each frame is rendered, which can optimize performance. However, if preserveDrawingBuffer is set to true, the buffer retains the last frame drawn, allowing you to capture the image or create effects that rely on the previous frame's content but it decreases performance since it takes memory
    >
      <Suspense fallback={<CanvasLoader />}>
        {/*used to wait for computers component to load and provides a loader till the actual component is there */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isTablet={isTablet} />
      </Suspense>
      <Preload all />
      {/*to let the 3d scenes to preload in background before they are required to provide a more seamless transition */}
    </Canvas>
  );
};

export default ComputersCanvas;
