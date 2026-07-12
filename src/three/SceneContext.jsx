import { createContext, useContext, useRef, useState } from "react";

const SceneContext = createContext();

export function SceneProvider({ children }) {

    const characterRef = useRef(null);

    const characterApi = useRef(null);

    const cameraRef = useRef(null);

    const laptopRef = useRef(null);

    const projectSceneRef = useRef(null);

    const [currentSection, setCurrentSection] = useState("hero");
    const [showLaptop, setShowLaptop] = useState(false);
    //----------------------------------------
    // Active Project
    //----------------------------------------

    const [activeProject, setActiveProject] = useState({

    id:1,

    title:"NetFlow",

    subtitle:"Network Monitoring Platform",

    command:"open NetFlow",

    description:
        "A comprehensive monitoring dashboard that visualizes alarms and network performance.",

    tech:[
        "React",
        "Three.js",
        "Django",
        "GSAP",
        "Bootstrap"
    ],

    live:"#",

    github:"#",

    video:"/projects/netflow.mp4"

});

    return (

        <SceneContext.Provider

            value={{

                characterRef,
                characterApi,
                cameraRef,
                laptopRef,
                projectSceneRef,

                currentSection,
                setCurrentSection,

                activeProject,
                setActiveProject,

                 showLaptop,
                setShowLaptop

            }}

        >

            {children}

        </SceneContext.Provider>

    );

}

export function useScene() {

    return useContext(SceneContext);

}