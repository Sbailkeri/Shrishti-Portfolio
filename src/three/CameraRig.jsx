import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {

    const { camera } = useThree();

    const targetPosition = useRef(
        new THREE.Vector3(0, 1.5, 10)
    );

    const targetLookAt = useRef(
        new THREE.Vector3(0, 0, 0)
    );

    const orbit = useRef({
        enabled: false,
        angle: 0,
        radius: 0.6,
        speed: 0.2,
        center: new THREE.Vector3(0, 0.3, 0)
    });

    useFrame((state, delta) => {

        camera.position.lerp(
            targetPosition.current,
            delta * 2.5
        );

        camera.lookAt(targetLookAt.current);

        if (orbit.current.enabled) {

            orbit.current.angle +=
                delta * orbit.current.speed;

            camera.position.x =
                targetPosition.current.x +
                Math.cos(orbit.current.angle) *
                orbit.current.radius;

            camera.position.z =
                targetPosition.current.z +
                Math.sin(orbit.current.angle) *
                orbit.current.radius;

            camera.lookAt(
                orbit.current.center
            );

        }

    });

    window.cameraRig = {

        move(position, lookAt) {

            targetPosition.current.copy(position);
            targetLookAt.current.copy(lookAt);

        },

        enableOrbit(radius = .6, speed = .2) {

            orbit.current.enabled = true;
            orbit.current.radius = radius;
            orbit.current.speed = speed;

        },

        disableOrbit() {

            orbit.current.enabled = false;

        }

    };

    return null;

}