import * as THREE from "three";

export default function HolographicScreen() {

    const line = (x, y, width) => (

        <mesh position={[x, y, 0.012]}>

            <planeGeometry args={[width, 0.03]} />

            <meshBasicMaterial
                color="#B794F4"
                transparent
                opacity={0.85}
            />

        </mesh>

    );

    const card = (x, y, w, h) => (

        <mesh position={[x, y, 0.01]}>

            <planeGeometry args={[w, h]} />

            <meshBasicMaterial
                color="#6D28D9"
                transparent
                opacity={0.18}
            />

        </mesh>

    );

    return (

        <group
            position={[0,0,0]}
            scale={[0.18,0.18,0.18]}
        >

            {/* =========================
                MAIN GLASS PANEL
            ========================== */}

            <mesh>

                <planeGeometry args={[2.3,1.35]} />

                <meshPhysicalMaterial

                    transparent

                    transmission={1}

                    thickness={0.35}

                    roughness={0}

                    color="#A855F7"

                    opacity={0.08}

                    side={THREE.DoubleSide}

                />

            </mesh>

            {/* Glow */}

            <mesh position={[0,0,-0.002]}>

                <planeGeometry args={[2.36,1.41]} />

                <meshBasicMaterial

                    color="#8B5CF6"

                    transparent

                    opacity={0.12}

                />

            </mesh>

            {/* =========================
                  LEFT SIDEBAR
            ========================== */}

            <mesh position={[-0.88,0,0.01]}>

                <planeGeometry args={[0.32,1.15]} />

                <meshBasicMaterial

                    color="#7C3AED"

                    transparent

                    opacity={0.18}

                />

            </mesh>

            {/* Avatar */}

            <mesh position={[-0.88,0.46,0.012]}>

                <circleGeometry args={[0.07,32]} />

                <meshBasicMaterial color="#A855F7"/>

            </mesh>

            {/* Sidebar Buttons */}

            {[0.25,0.10,-0.05,-0.20,-0.35,-0.50].map((y,i)=>(

                <mesh
                    key={i}
                    position={[-0.88,y,0.012]}
                >

                    <planeGeometry args={[0.18,0.025]} />

                    <meshBasicMaterial
                        color="#A78BFA"
                    />

                </mesh>

            ))}

            {/* =========================
                TOP BAR
            ========================== */}

            {[-0.1,0.2,0.5].map((x,i)=>(

                <mesh
                    key={i}
                    position={[x,0.55,0.012]}
                >

                    <planeGeometry args={[0.22,0.035]} />

                    <meshBasicMaterial

                        color="#A78BFA"

                    />

                </mesh>

            ))}

            {[0.78,0.87,0.96].map((x,i)=>(

                <mesh
                    key={i}
                    position={[x,0.55,0.012]}
                >

                    <circleGeometry args={[0.018,20]} />

                    <meshBasicMaterial

                        color="#60A5FA"

                    />

                </mesh>

            ))}

            {/* =========================
                DASHBOARD CARDS
            ========================== */}

            {card(-0.25,0.22,.38,.22)}
            {card(0.25,0.22,.38,.22)}
            {card(0.75,0.22,.38,.22)}

            {card(-0.32,-0.25,.58,.45)}
            {card(0.45,-0.25,.78,.45)}

            {/* =========================
                GRAPH LINES
            ========================== */}

            {line(-0.35,0.26,.18)}
            {line(-0.35,0.18,.10)}

            {line(0.18,0.26,.18)}
            {line(0.18,0.18,.12)}

            {line(0.68,0.26,.18)}
            {line(0.68,0.18,.10)}

            {/* =========================
                MAP PLACEHOLDER
            ========================== */}

            <mesh position={[-0.32,-0.22,0.012]}>

                <circleGeometry args={[0.12,5]} />

                <meshBasicMaterial

                    color="#8B5CF6"

                />

            </mesh>

            {/* =========================
                CHART LINES
            ========================== */}

            {[-0.02,0.08,0.18,0.28].map((x,i)=>(

                <mesh
                    key={i}
                    position={[x,-0.1,0.012]}
                >

                    <planeGeometry
                        args={[0.04,0.08+i*0.05]}
                    />

                    <meshBasicMaterial

                        color="#60A5FA"

                    />

                </mesh>

            ))}

            {/* =========================
                HOLOGRAPHIC KEYBOARD
            ========================== */}

            <group

                position={[0,-0.98,0]}

                rotation={[-1.2,0,0]}

            >

                <mesh>

                    <planeGeometry args={[1.2,.45]} />

                    <meshPhysicalMaterial

                        color="#8B5CF6"

                        transparent

                        opacity={0.12}

                        transmission={1}

                        roughness={0}

                    />

                </mesh>

                {Array.from({length:8}).map((_,r)=>

                    Array.from({length:16}).map((_,c)=>(

                        <mesh

                            key={`${r}${c}`}

                            position={[
                                -0.52+c*.07,
                                .16-r*.045,
                                .01
                            ]}

                        >

                            <planeGeometry args={[.05,.025]} />

                            <meshBasicMaterial

                                color="#B794F4"

                            />

                        </mesh>

                    ))

                )}

            </group>

            {/* =========================
                FLOATING RIGHT PANEL
            ========================== */}

            <group position={[1.55,.35,0]}>

                <mesh>

                    <planeGeometry args={[0.48,.35]} />

                    <meshPhysicalMaterial

                        color="#7C3AED"

                        transparent

                        transmission={1}

                        opacity={0.10}

                    />

                </mesh>

                {line(0,.08,.22)}
                {line(0,0,.30)}
                {line(0,-.08,.18)}

            </group>

            {/* =========================
                FLOATING LEFT PANEL
            ========================== */}

            <group position={[-1.55,-.15,0]}>

                <mesh>

                    <planeGeometry args={[0.5,.3]} />

                    <meshPhysicalMaterial

                        color="#7C3AED"

                        transparent

                        transmission={1}

                        opacity={0.10}

                    />

                </mesh>

                {line(0,.05,.22)}
                {line(0,-.05,.30)}

            </group>

            {/* =========================
                FLOATING ORBS
            ========================== */}

            {[
                [1.2,0.7],
                [1.5,-0.2],
                [-1.2,0.55],
                [-1.35,-0.45]
            ].map((p,i)=>(

                <mesh
                    key={i}
                    position={[p[0],p[1],0]}
                >

                    <sphereGeometry args={[0.035,20,20]} />

                    <meshBasicMaterial

                        color="#A855F7"

                    />

                </mesh>

            ))}

        </group>

    );

}