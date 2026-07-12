import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScene } from "./SceneContext";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function SceneTimeline() {
    
// =======================================
// HERO SECTION
// =======================================
 const {

    characterRef,
    cameraRef,
    projectSceneRef,

    currentSection,
    setCurrentSection,

    showLaptop,
    setShowLaptop,
    activeProject

        } = useScene();
useEffect(() => {

    // setCurrentSection("hero");

    const character = characterRef.current;

    if (!character) return;

    const { actions, group } = character;

    //------------------------------------
    // Start Walk
    //------------------------------------

    character.playAnimation("Walk");

    //------------------------------------
    // Walk into Hero
    //------------------------------------

    gsap.fromTo(

        group.position,

        {
            x:-8,
            y:-2.5,
            z:-10
        },

        {

            x:-4,
            y:-2.5,
            z:0,

            duration:4,

            ease:"power2.out",

            onComplete:()=>{

                //--------------------------------
                // Stop Walk
                //--------------------------------

                character.playAnimation("Wave", {

                    loop: false

                });

                gsap.to(group.scale,{

                    x:.9,
                    y:.9,
                    z:.9,

                    duration:1

                });

                //--------------------------------
                // Pose
                //--------------------------------

                const poseDelay = gsap.delayedCall(2, () => {
                    character.playAnimation("Pose");
                });

                return () => {
                    poseDelay.kill();
                };

            }

        }

    );

},[]);    

   
// =======================================
// ABOUT SECTION
// =======================================

   useEffect(() => {

    const character = characterRef.current;

    if (!character) return;

    const { actions, group } = character;

    const trigger = ScrollTrigger.create({

        trigger:"#about",

        start:"top bottom",

        once:false,

        onEnter:()=>{
            // setCurrentSection("about");

            console.log("ABOUT ENTERED");

            character.playAnimation("Jump",{

                loop:false

            });

           
            gsap.to(group.scale,{

                x:.8,
                y:.8,
                z:.8,

                duration:1.5

            });

                    gsap.to(group.position,{
                x:0,
                y:-2,
                z:0,
                duration:2,
                ease:"power2.inOut"
            });

            gsap.delayedCall(2,()=>{

                character.playAnimation("Point");

                window.dispatchEvent(
                    new Event("character-landed")
                );

            });

        },

onLeaveBack:()=>{

    const character = characterRef.current;

    if(!character) return;

    // gsap.to(camera.position, {

    //             x: 0,
    //             y: 1.5,
    //             z: 12,

    //             duration: 2,

    //             ease: "power2.inOut",

    //             onUpdate: () => {

    //                 camera.lookAt(0, 0, 0);

    //             }

    //         });

    gsap.to(character.group.position,{
        x:-4,
        y:-2.5,
        z:0,
        duration:1
    });

    gsap.to(character.group.rotation,{
        y:0,
        duration:1
    });

    gsap.to(character.group.scale,{
        x:.9,
        y:.9,
        z:.9,
        duration:1
    });

    character.playAnimation("Pose");

}

    });

    return ()=>trigger.kill();

},[]);

// =======================================
// SKILLS SECTION
// =======================================
 

useEffect(() => {

   

    const trigger = ScrollTrigger.create({

        trigger: "#skills",

        start: "top center",

        once: false,

        onEnter: () => {
            //  setCurrentSection("skills");

            const character = characterRef.current;
            const camera = cameraRef.current;

            if (!character || !camera) return;

            console.log("🎬 Skills Timeline Started");

            //------------------------------------------
            // Stop About Animation
            //------------------------------------------
            
           character.playAnimation("Typing");

            //------------------------------------------
            // Character Position
            //------------------------------------------


            
            gsap.to(character.group.position, {

                x: 7,
                y: -1,
                z: 0.1,

                duration: 1.8,

                ease: "power2.inOut"

            });

            //------------------------------------------
            // Character Rotation
            //------------------------------------------

            gsap.to(character.group.rotation, {

                x: 0,
                y: -1.5,
                z: -0.1,

                duration: 1.8,

                ease: "power2.inOut"

            });

            //------------------------------------------
            // Camera Move
            //------------------------------------------

            gsap.to(camera.position, {

                x: 2.2,
                y: 2.0,
                z: 6,

                duration: 2,

                ease: "power2.inOut",

                onUpdate: () => {

                    camera.lookAt(
                        3.6,
                        0.8,
                        0
                    );

                }

            });

            //------------------------------------------
            // Animate Skill Cards
            //------------------------------------------

            window.dispatchEvent(
                new Event("skills-entered")
            );

        },

onLeaveBack:()=>{

    const character = characterRef.current;

    if(!character) return;
    // gsap.to(camera.position, {

    //             x: 0,
    //             y: 1.5,
    //             z: 12,

    //             duration: 2,

    //             ease: "power2.inOut",

    //             onUpdate: () => {

    //                 camera.lookAt(0, 0, 0);

    //             }

    //         });

    gsap.to(character.group.position,{
        x:0,
        y:-2,
        z:0,
        duration:1
    });

    gsap.to(character.group.rotation,{
        y:0,
        duration:1
    });

    character.playAnimation("Point");

}

    });

    return () => trigger.kill();

}, []);


// =======================================
// PROJECT SECTION
// =======================================

useEffect(() => {

    const trigger = ScrollTrigger.create({

        trigger: "#projects",

        start: "top center",

        once: false,

        onEnter: () => {

            const character = characterRef.current;
            const camera = cameraRef.current;

            if (!character || !camera) return;

            console.log("🎬 Projects Started");

            //----------------------------------------
            // Hide Laptop
            //----------------------------------------

            setShowLaptop(false);

            //----------------------------------------
            // Jump into Projects
            //----------------------------------------

            character.playAnimation("Walk", {

                loop: false

            });

            //----------------------------------------
            // Move Character
            //----------------------------------------

            gsap.to(character.group.position, {

                x: 8.5,
                y: -3.5,
                z: 0,

                duration: 1.5,

                ease: "power2.inOut"

            });

            //----------------------------------------
            // Rotate towards preview
            //----------------------------------------

            gsap.to(character.group.rotation, {

                x: 0,
                y: -1.3,
                z: 0,

                duration: 1.5,

                ease: "power2.inOut"

            });

            //----------------------------------------
            // Scale
            //----------------------------------------

            gsap.to(character.group.scale, {

                x: 1,
                y: 1,
                z: 1,

                duration: 1.5

            });

            //----------------------------------------
            // Explain Animation
            //----------------------------------------

            gsap.delayedCall(1.4, () => {

                character.playAnimation("Meeting");


            });

            //----------------------------------------
            // Camera
            //----------------------------------------

            gsap.to(camera.position, {

                x: 0,
                y: 3,
                z: 12,

                duration: 2,

                ease: "power2.inOut",

                onUpdate: () => {

                    camera.lookAt(0, 0, 0);

                }

            });

        },

        onLeaveBack: () => {

            const character = characterRef.current;

            if (!character) return;

            //----------------------------------------
            // Return to Skills
            //----------------------------------------
            //  gsap.to(camera.position, {

            //     x: 2.2,
            //     y: 2.0,
            //     z: 6,

            //     duration: 2,

            //     ease: "power2.inOut",

            //     onUpdate: () => {

            //         camera.lookAt(
            //             3.6,
            //             0.8,
            //             0
            //         );

            //     }

            // });
            gsap.to(character.group.position, {

                x: 5,
                y: -2,
                z: 3,

                duration: 1

            });

            gsap.to(character.group.rotation, {

                x: 0,
                y: -1.5,
                z: -0.1,

                duration: 1

            });

            gsap.to(character.group.scale, {

                x: 1,
                y: 1,
                z: 1,

                duration: 1

            });

            character.playAnimation("Typing");

        }

    });

    return () => trigger.kill();

}, []);

// =======================================
// PROJECT CARD ANIMATIONS
// =======================================

useEffect(() => {

    const character = characterRef.current;

    if (!character || !activeProject) return;
    

    // gsap.delayedCall(0.08, () => {

    //     character.playAnimation(activeProject.animation);

    // }


character.playAnimation(
    activeProject.animation,
    {
        fade:0
    }
);

}, [activeProject]);
// =======================================
// CONTACT SECTION
// =======================================

useEffect(() => {

    const trigger = ScrollTrigger.create({

        trigger: "#contact",

        start: "top center",

        once: false,

        onEnter: () => {

            const character = characterRef.current;
            const camera = cameraRef.current;
            const projectScene = projectSceneRef.current;

            if (!character || !camera) return;

            console.log("📞 Contact Started");

            //----------------------------------------
            // Hide Project Laptop
            //----------------------------------------
                setShowLaptop(false);
                    if (projectScene) {

                        projectScene.visible = false;

                    }

            //----------------------------------------
            // Walk into Contact
            //----------------------------------------

            character.playAnimation("Walk");

            //----------------------------------------
            // Character Position
            //----------------------------------------

            gsap.to(character.group.position, {

                x: 5,
                y: -4,
                z: 0,

                duration: 2.5,

                ease: "power2.inOut",

                onComplete: () => {

                    //----------------------------------------
                    // Phone / Scroll Animation
                    //----------------------------------------

                    if (character.actions.Phone) {

                        character.playAnimation("Phone");

                    }

                    else if (character.actions.Scroll) {

                        character.playAnimation("Scroll");

                    }

                    else {

                        character.playAnimation("Pose");

                    }

                }

            });

            //----------------------------------------
            // Character Rotation
            //----------------------------------------
            gsap.to(character.group.scale, {

                x: 1.2,
                y: 1.2,
                z: 1.2,

                duration: 1

            });
            gsap.to(character.group.rotation, {

                x: 0,
                y: -1,
                z: 0,

                duration: 2.5,

                ease: "power2.inOut"

            });

            

            //----------------------------------------
            // Camera (Optional)
            //----------------------------------------

            gsap.to(camera.position, {

                x: 0,
                y: 1.5,
                z: 12,

                duration: 2,

                ease: "power2.inOut",

                onUpdate: () => {

                    camera.lookAt(0, 0, 0);

                }

            });

        },

onLeaveBack: () => {

    const character = characterRef.current;
    // const projectScene = projectSceneRef.current;

    if (!character) return;

    // setShowLaptop(true);

    // if (projectScene) {
    //     projectScene.visible = true;
    // }
            

            gsap.to(character.group.position, {
                x: 8,
                y: -3.5,
                z: 0,
                duration: 0.1,
                ease: "power2.inOut",
                onComplete: () => {
                    character.playAnimation("Meeting", {
                        fade: 0
                    });
                }
            });
                // gsap.to(character.group.rotation, {
                //     x: 0,
                //     y: -1.3,
                //     z: 0,
                //     duration: 1,
                //     ease: "power2.inOut"
                // });

                // gsap.to(character.group.scale, {
                //     x: 1,
                //     y: 1,
                //     z: 1,
                //     duration: 1
                // });

}

    });

    return () => trigger.kill();

}, []);

    return null;

}