import { Canvas } from "@react-three/fiber";

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

<div

style={{

position:"fixed",

inset:0,

zIndex:9999,

pointerEvents: "none",

}}

>

<Canvas
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

<Lights/>


<Character

ref={characterRef}

/>

{/* <LaptopScreen project={current} /> */}


<CameraController/>

<SceneTimeline/>

</Canvas>

</div>

);

}