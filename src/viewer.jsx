import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Ak } from "./ak";
import { Block } from "./block";
import { HueSaturation, BrightnessContrast, EffectComposer } from "@react-three/postprocessing"

// 🚨 This is an example of the skeleton in three.js
export const Viewer = () => {
  const ref = useRef();

  return (
    <Canvas
      camera={{
        position: [50, 0, 0],
        fov: 50,
      }}
      frameloop="demand"
      gl={{
        antialias: true,
        autoClear: true,
        failIfMajorPerformanceCaveat: true,
      }}
    >
      {/* <ambientLight
        intensity={Math.PI * 1.12}
      /> */}
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <directionalLight
        position={[2.3, 1.0, -4.4]}
        castShadow
        intensity={Math.PI * 1.2}
      />
      <directionalLight
        position={[-4.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI / 1.2}
      />
      <Ak />
      <Block />
      <gridHelper />
      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        enableDamping={false}
        camera={ref.current}
        makeDefault
      />
      <EffectComposer>
        <HueSaturation saturation={Math.PI / 10} />
        <BrightnessContrast
          brightness={0} // brightness. min: -1, max: 1
          contrast={0.1} // contrast: min -1, max: 1
        />
      </EffectComposer>
    </Canvas >
  );
};
