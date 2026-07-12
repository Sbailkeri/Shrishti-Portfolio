import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function CharacterFX() {

    const group = useRef();

    const sizes = [0.06, 0.045, 0.05, 0.035, 0.04];
    const opacity = [0.85, 0.55, 0.75, 0.45, 0.6];

    const positions = [
        [0.18, 4.5, 0],     // Above head
        [-0.9, 3, 0.55],   // Left shoulder
        [2.5, 3, 0.55],    // Right shoulder
        [-0.65, 0.55, 0.65],  // Left hip
        [2.5, 0.8, 0.75],   // Right leg
    ];

    useFrame(({ clock }) => {

        if (!group.current) return;

        const t = clock.getElapsedTime();

        group.current.children.forEach((orb, i) => {

            const base = positions[i];

            orb.position.x =
                base[0] + Math.sin(t * 0.8 + i) * 0.12;

            orb.position.y =
                base[1] + Math.cos(t * 1.3 + i) * 0.12;

            orb.position.z =
                base[2] + Math.sin(t * 0.6 + i) * 0.05;

        });

    });

    return (

        <group
            ref={group}
            position={[0, 0.2, 0]}
        >

            {[...Array(5)].map((_, i) => (

                <mesh key={i}>

                    <sphereGeometry args={[sizes[i], 20, 20]} />

                    <meshBasicMaterial
                        color="#A970FF"
                        transparent
                        opacity={opacity[i]}
                    />

                    <mesh scale={2.8}>

                        <sphereGeometry args={[sizes[i], 20, 20]} />

                        <meshBasicMaterial
                            color="#A970FF"
                            transparent
                            opacity={0.12}
                        />

                    </mesh>

                </mesh>

            ))}

        </group>

    );

}