import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const CustomObject = () => {
  // Define a custom 3D object using GLTF
  const object = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Add lighting */}
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight position={[20, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Render the custom object */}
      <primitive object={object.scene} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </mesh>
  );
};

const CustomCanvas = () => {
  // State variable to determine if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 10, 20], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

        {/* Render your custom 3D object */}
        <CustomObject />
      </Suspense>

      {/* Preload assets */}
      <Preload all />
    </Canvas>
  );
};

export default CustomCanvas;
