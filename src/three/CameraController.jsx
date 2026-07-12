import { useThree } from "@react-three/fiber";

import { useEffect } from "react";

import { useScene } from "./SceneContext";

export default function CameraController(){

    const { camera } = useThree();

    const { cameraRef } = useScene();

    useEffect(()=>{

        cameraRef.current=camera;

    },[]);

    return null;

}