import { Canvas } from "@react-three/fiber";

import { Loader } from "@react-three/drei";

import { useEffect, useState } from "react";

import Character from "./Character";

import Lights from "./Lights";

import CameraController from "./CameraController";

import SceneTimeline from "./SceneTimeline";

import { useScene } from "./SceneContext";



export default function SceneController(){

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
);

useEffect(() => {

    const handleResize = () => {

        setIsMobile(
            window.innerWidth <= 768
        );

    };

    window.addEventListener(
        "resize",
        handleResize
    );

    return () => {
        window.removeEventListener(
            "resize",
            handleResize
        );
    };

}, []);

    const {

    characterRef,
    laptopRef,
    projectSceneRef

} = useScene();

return(
  <>
    <div
      style={{
        position:"fixed",
        inset:0,
        zIndex:9999,
        pointerEvents: "none",
      }}
    >

      <Canvas
        dpr={isMobile ? 1 : [1, 2]}
        style={{
          pointerEvents: "none",
        }}
        camera={{
          position: isMobile
            ? [0, 1.5, 10]
            : [0, 1.5, 10],
          fov: isMobile
            ? 50
            : 45,
        }}
      >

        <Lights />

        <Character ref={characterRef} />

        <CameraController />

        <SceneTimeline />

      </Canvas>

    </div>

    <Loader
  containerStyles={{
    background: "#040611",
  }}
  innerStyles={{
    width: "300px",
    background: "rgba(255,255,255,0.15)",
  }}
  barStyles={{
    height: "2px",
    background: "white",
  }}
  dataStyles={{
    color: "white",
    fontSize: "14px",
    letterSpacing: "3px",
  }}
  dataInterpolation={(p) => `LOADING ${p.toFixed(0)}%`}
/>

  </>
);

}