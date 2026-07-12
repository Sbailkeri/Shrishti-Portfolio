import { Canvas } from "@react-three/fiber";

import Character from "./Character";

import Lights from "./Lights";

import CameraController from "./CameraController";

import SceneTimeline from "./SceneTimeline";

import { useScene } from "./SceneContext";



export default function SceneController(){

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
  camera={{
    position: [0, 1.5, 10],
    fov: 45,
  }}
  events={undefined}
  style={{
    pointerEvents: "none",
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