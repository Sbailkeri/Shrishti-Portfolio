import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Character from "./Character";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ContactShadows } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CameraController from "./CameraController";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  

  

  return (
    <Canvas
      camera={{
        position: [0, 1.5, 10],
        fov: 45,
        }}
    >
         <CameraController/>


      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <Character />
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.5}
        scale={10}
        blur={2}
        />
      <OrbitControls />
    </Canvas>
  );
}