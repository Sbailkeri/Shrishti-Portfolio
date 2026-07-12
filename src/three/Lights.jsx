import { Float } from "@react-three/drei";

export default function Lights(){

    return(

        <>

            <ambientLight intensity={1.8}/>

            <directionalLight

                position={[4,8,4]}

                intensity={2.5}

            />

            <pointLight

                position={[-5,3,4]}

                color="#4f9dff"

                intensity={20}

            />

            <pointLight

                position={[5,3,4]}

                color="#8b5cf6"

                intensity={18}

            />

            <Float
                speed={2}
                rotationIntensity={0}
                floatIntensity={0.5}
            >

                <pointLight

                    position={[0,5,-5]}

                    color="#8b5cf6"

                    intensity={10}

                />

            </Float>

        </>

    );

}