import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScene } from "./SceneContext";
import * as THREE from "three";


gsap.registerPlugin(ScrollTrigger);
if (typeof window !== "undefined") {
    ScrollTrigger.config({
        ignoreMobileResize: true
    });
}

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

    const character = characterRef.current;

    if (!character) return;

    const { group } = character;


    // =================================================
    // MOBILE HERO INTRO
    // =================================================

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;


        // -----------------------------------------
    // HERO POSITIONS
    // -----------------------------------------

    const startX = isMobile ? -5 : -8;

    const endX = isMobile ? 0 : -4;
    const endRotationY = isMobile ? -0.5 : 0;


    // =================================================
    // START WALK
    // =================================================

    character.playAnimation("Walk");


    // =================================================
    // WALK INTO HERO
    // =================================================

    const walkAnimation = gsap.fromTo(

        group.position,

        {
            x: startX,
            y: -2.5,
            z: -10
        },

        {

            x: endX,
            y: isMobile ? -3 : -2.5,
            z: 0,

            duration: isMobile ? 2.8 : 4,

            ease: "power2.out",

            onComplete: () => {

    // =====================================
    // WAVE
    // =====================================

    character.playAnimation("Wave", {
        loop: false
    });


    // =====================================
    // SMALLER CHARACTER
    // =====================================

    gsap.to(group.scale, {

        x: .9,
        y: .9,
        z: .9,

        duration: 1

    });


    // =====================================
    // POSE
    // =====================================

    gsap.delayedCall(2, () => {

        character.playAnimation("Pose");


        // =================================
        // MOBILE ONLY
        // =================================

        if (isMobile) {

            gsap.delayedCall(0.2, () => {


                // First fade all character
                // meshes

                group.traverse((child) => {

                    if (child.isMesh) {

                        gsap.to(child.material, {

                            opacity: 0,

                            duration: 0.8,

                            ease: "power2.out"

                        });

                    }

                });


                // Then shrink group

                gsap.to(group.scale, {

                    x: 0,
                    y: 0,
                    z: 0,

                    duration: 1,

                    delay: 0.2,

                    ease: "power3.in",

                    onComplete: () => {

                        window.dispatchEvent(
                            new Event(
                                "hero-character-exit"
                            )
                        );

                    }

                });

            });

        }

    });

}

        }

    );
    gsap.to(group.rotation, {

    y: endRotationY,

    duration: isMobile ? 1.2 : -0.5,

    ease: "power2.out"

});


    // =================================================
    // CLEANUP
    // =================================================

    return () => {

        walkAnimation.kill();

        if (group.userData.poseDelay) {

            group.userData.poseDelay.kill();

        }

    };


}, []);

   

   
// =======================================
// ABOUT SECTION
// =======================================

   useEffect(() => {

    const character = characterRef.current;

    if (!character) return;

    const { actions, group } = character;
    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    const trigger = ScrollTrigger.create({

        trigger:"#about",

        start: isMobile ? "top 85%" : "top center",

        once:false,

        onEnter: () => {


    const character = characterRef.current;

    if (!character) return;

    const { group } = character;

    // -----------------------------------------
    // CHECK MOBILE
    // -----------------------------------------

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

        gsap.killTweensOf(group.position);
  gsap.killTweensOf(group.scale);
  gsap.killTweensOf(group.rotation);



    // -----------------------------------------
    // JUMP
    // -----------------------------------------

    character.playAnimation("Jump", {
        loop: false
    });


    // -----------------------------------------
    // CHARACTER SCALE
    // -----------------------------------------

    gsap.to(group.scale, {

        x: .8,
        y: .8,
        z: .8,

        duration: 1.5

    });


    // -----------------------------------------
    // CHARACTER POSITION
    // -----------------------------------------

    gsap.to(group.position, {

        x: 0,
        y: -2,
        z: 0,

        duration: 2,

        ease: "power2.inOut"

    });


    // -----------------------------------------
    // AFTER JUMP
    // -----------------------------------------

    gsap.delayedCall(2, () => {


        // =====================================
        // MOBILE
        // =====================================

        if (isMobile) {

            // Don't play Point.

            gsap.to(group.scale, {

                x: 0,
                y: 0,
                z: 0,

                duration: .7,

                ease: "power3.in",

                onComplete: () => {

                    window.dispatchEvent(
                        new Event("character-landed")
                    );

                }

            });

        }


        // =====================================
        // DESKTOP
        // =====================================

        else {

            // Keep your existing Point animation.

            character.playAnimation("Point", { loop: true });


            window.dispatchEvent(new Event("character-landed"));

        }

    });

},

onLeaveBack: () => {
    const character = characterRef.current;

    if (!character) return;

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    // Stop any running character transitions
    gsap.killTweensOf(character.group.position);
    gsap.killTweensOf(character.group.scale);
    gsap.killTweensOf(character.group.rotation);

    // MOBILE
    if (isMobile) {
        // Hero on mobile should keep the character hidden
        gsap.set(character.group.scale, {
            x: 0,
            y: 0,
            z: 0
        });
        // Tell Hero to show its content again
    window.dispatchEvent(
        new Event("hero-content-show")  );

        return;
    }

    // DESKTOP — keep existing behavior
    gsap.to(character.group.position, {
        x: -4,
        y: -2.5,
        z: 0,
        duration: 1
    });

    gsap.to(character.group.rotation, {
        y: 0,
        duration: 1
    });

    gsap.to(character.group.scale, {
        x: 0.9,
        y: 0.9,
        z: 0.9,
        duration: 1
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
    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    const trigger = ScrollTrigger.create({

        trigger: "#skills",
        start: isMobile ? "top 85%" : "top center",
        once: false,

        onEnter: () => {

            const character = characterRef.current;
            const camera = cameraRef.current;

            if (!character || !camera) return;

            const isMobile =
                window.matchMedia("(max-width: 768px)").matches;

            console.log("🎬 Skills Timeline Started");

            //------------------------------------------
            // Start Typing Animation
            //------------------------------------------

            character.playAnimation("Typing");


            //------------------------------------------
            // MOBILE
            //------------------------------------------

            if (isMobile) {

                // Character moves to bottom-right
                gsap.to(character.group.position, {

                    x: 0.6,
                    y: -2.5,
                    z: 0.1,

                    duration: 1.8,

                    ease: "power2.inOut"

                });


                // Keep the same slight turn
                gsap.to(character.group.rotation, {

                    x: 0,
                    y: -0.8,
                    z: -0.1,

                    duration: 1.8,

                    ease: "power2.inOut"

                });


                // Smaller character
                gsap.to(character.group.scale, {

                    x: .78,
                    y: .78,
                    z: .78,

                    duration: 1.8,

                    ease: "power2.inOut"

                });


                // Keep camera simple on mobile
                gsap.to(camera.position, {

                    x: 0,
                    y: 1.5,
                    z: 10,

                    duration: 1.5,

                    ease: "power2.inOut",

                    onUpdate: () => {

                        camera.lookAt(
                            0,
                            1,
                            0
                        );

                    }

                });

            }


            //------------------------------------------
            // DESKTOP
            //------------------------------------------

            else {

                // Character Position

                gsap.to(character.group.position, {

                    x: 7,
                    y: -1,
                    z: 0.1,

                    duration: 1.8,

                    ease: "power2.inOut"

                });


                // Character Rotation

                gsap.to(character.group.rotation, {

                    x: 0,
                    y: -1.5,
                    z: -0.1,

                    duration: 1.8,

                    ease: "power2.inOut"

                });


                // Camera

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

            }


            //------------------------------------------
            // Animate Skill Cards
            //------------------------------------------

            window.dispatchEvent(
                new Event("skills-entered")
            );

        },


        //------------------------------------------
        // RETURN TO ABOUT
        //------------------------------------------

        onLeaveBack: () => {

    const character = characterRef.current;
    const camera = cameraRef.current;

    if (!character || !camera) return;

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;


    // Stop any running transitions
    gsap.killTweensOf(character.group.position);
    gsap.killTweensOf(character.group.scale);
    gsap.killTweensOf(character.group.rotation);
    gsap.killTweensOf(camera.position);


    // ==========================================
    // MOBILE
    // ==========================================

    if (isMobile) {

        // About on mobile should have NO character.
        // Keep the character completely hidden.

        gsap.set(character.group.scale, {
            x: 0,
            y: 0,
            z: 0
        });

        return;
    }


    // ==========================================
    // DESKTOP
    // ==========================================

    gsap.to(character.group.position, {
        x: 0,
        y: -2,
        z: 0,
        duration: 1,
        ease: "power2.inOut"
    });


    gsap.to(character.group.rotation, {
        x: 0,
        y: 0,
        z: -0.1,
        duration: 1,
        ease: "power2.inOut"
    });


    gsap.to(character.group.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        duration: 1,
        ease: "power2.inOut"
    });


    gsap.to(camera.position, {
        x: 0,
        y: 1.5,
        z: 10,
        duration: 1.5,
        ease: "power2.inOut",

        onUpdate: () => {
            camera.lookAt(0, 0, 0);
        }
    });


    character.playAnimation("Point", {
        loop: true
    });

}

    });


    return () => trigger.kill();

}, []);


// =======================================
// PROJECT SECTION
// =======================================



useEffect(() => {
    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    const trigger = ScrollTrigger.create({

        trigger: "#projects",

        start: isMobile ? "top 85%" : "top center",
        end: "bottom center",

        once: false,

        scrub: false,

        onEnter: () => {

            const character = characterRef.current;
            const camera = cameraRef.current;

            if (!character || !camera) return;

            const isMobile = window.innerWidth <= 768;

            console.log("🎬 Projects Started");

            // ----------------------------------------
            // Hide Laptop
            // ----------------------------------------

            setShowLaptop(false);


            // ----------------------------------------
            // Walk
            // ----------------------------------------

            character.playAnimation("Walk", {
                loop: false
            });


            // ----------------------------------------
            // Character Position
            // ----------------------------------------

            if (isMobile) {

                gsap.to(character.group.position, {

                    x: 1.3,
                    y: -6,
                    z: 0,

                    duration: 1.5,

                    ease: "power2.inOut"

                });

            } else {

                gsap.to(character.group.position, {

                    x: 8.5,
                    y: -3.5,
                    z: 0,

                    duration: 1.5,

                    ease: "power2.inOut"

                });

            }


            // ----------------------------------------
            // Rotation
            // ----------------------------------------

            gsap.to(character.group.rotation, {

                x: 0,
                y: -1,
                z: 0,

                duration: 1.5,

                ease: "power2.inOut"

            });


            // ----------------------------------------
            // Scale
            // ----------------------------------------

            gsap.to(character.group.scale, {

                x: isMobile ? 0.45 : 1,
                y: isMobile ? 0.45 : 1,
                z: isMobile ? 0.45 : 1,

                duration: 1.5

            });


            // ----------------------------------------
            // Meeting Animation
            // ----------------------------------------

            gsap.delayedCall(1.4, () => {

                if (characterRef.current) {

                    characterRef.current.playAnimation("Meeting");

                }

            });


            // ----------------------------------------
            // Camera
            // ----------------------------------------

            if (isMobile) {

                camera.position.set(
                    0,
                    1.5,
                    13
                );

                camera.lookAt(
                    0,
                    -0.5,
                    0
                );

            } else {

                gsap.to(camera.position, {

                    x: 0,
                    y: 3,
                    z: 12,

                    duration: 2,

                    ease: "power2.inOut",

                    onUpdate: () => {

                        camera.lookAt(
                            0,
                            0,
                            0
                        );

                    }

                });

            }

        },


        // ==================================================
        // MOBILE CHARACTER MOVEMENT WHILE SCROLLING
        // ==================================================

        onUpdate: (self) => {

            const character = characterRef.current;

            if (!character) return;

            const isMobile = window.innerWidth <= 768;

            if (!isMobile) return;


            const progress = self.progress;


            gsap.set(character.group.position, {

                x: 1.3,

                y: -6 + (progress * 5),

                z: 0

            });

        },


        // ==================================================
        // RETURN TO SKILLS
        // ==================================================

 onLeaveBack: () => {

    const character = characterRef.current;
    const camera = cameraRef.current;

    if (!character || !camera) return;

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;


    // ==========================================
    // STOP PREVIOUS TRANSITIONS
    // ==========================================

    gsap.killTweensOf(character.group.position);
    gsap.killTweensOf(character.group.rotation);
    gsap.killTweensOf(character.group.scale);
    gsap.killTweensOf(camera.position);


    // ==========================================
    // MOBILE
    // ==========================================

    if (isMobile) {

        // Character position
        gsap.to(character.group.position, {
            x: 0.6,
            y: -2.5,
            z: 0.1,
            duration: 1,
            ease: "power2.inOut"
        });


        // Character rotation
        gsap.to(character.group.rotation, {
            x: 0,
            y: -0.8,
            z: -0.1,
            duration: 1,
            ease: "power2.inOut"
        });


        // Character scale
        gsap.to(character.group.scale, {
            x: 0.78,
            y: 0.78,
            z: 0.78,
            duration: 1,
            ease: "power2.inOut"
        });


        // Mobile Skills camera
        gsap.to(camera.position, {
            x: 0,
            y: 1.5,
            z: 10,
            duration: 1.5,
            ease: "power2.inOut",

            onUpdate: () => {
                camera.lookAt(0, 1, 0);
            }
        });

    }


    // ==========================================
    // DESKTOP
    // ==========================================

    else {

        // Character position
        gsap.to(character.group.position, {
            x: 7,
            y: -1,
            z: 0.1,
            duration: 1,
            ease: "power2.inOut"
        });


        // Character rotation
        gsap.to(character.group.rotation, {
            x: 0,
            y: -1.5,
            z: -0.1,
            duration: 1,
            ease: "power2.inOut"
        });


        // Character scale
        gsap.to(character.group.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "power2.inOut"
        });


        // Desktop Skills camera
        gsap.to(camera.position, {
            x: 2.2,
            y: 2,
            z: 8,
            duration: 1.5,
            ease: "power2.inOut",

            onUpdate: () => {
                camera.lookAt(3.0, 0.8, 0);
            }
        });

    }


    // ==========================================
    // SKILLS ANIMATION
    // ==========================================

    character.playAnimation("Typing", {
        loop: true
    });

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

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;
    const trigger = ScrollTrigger.create({

        trigger: "#contact",

       start: isMobile ? "top 85%" : "top center",

        once: false,

        onEnter: () => {

            const character = characterRef.current;
            const camera = cameraRef.current;
            const projectScene = projectSceneRef.current;

            if (!character || !camera) return;
            const isMobile = window.innerWidth <= 768;

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

                x: isMobile ? 1 : 5,
                y: isMobile ? -4.2 : -4,
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

                x: isMobile ? 0.75 : 1.2,
                y: isMobile ? 0.75 : 1.2,
                z: isMobile ? 0.75 : 1.2,

                duration: 1
            });
            gsap.to(character.group.rotation, {

                x: 0,
                y: isMobile ? -0.5 : -1,
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
    const camera = cameraRef.current;

    if (!character || !camera) return;

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    // Stop any running transitions
    gsap.killTweensOf(character.group.position);
    gsap.killTweensOf(character.group.scale);
    gsap.killTweensOf(character.group.rotation);
    gsap.killTweensOf(camera.position);

    // =========================================
    // MOBILE → BACK TO PROJECTS
    // =========================================

    if (isMobile) {

        gsap.to(character.group.position, {
            x: 1.3,
            y: -6,
            z: 0,
            duration: 1,
            ease: "power2.inOut"
        });

        gsap.to(character.group.rotation, {
            x: 0,
            y: -1,
            z: 0,
            duration: 1,
            ease: "power2.inOut"
        });

        gsap.to(character.group.scale, {
            x: 0.45,
            y: 0.45,
            z: 0.45,
            duration: 1,
            ease: "power2.inOut"
        });

        gsap.to(camera.position, {
            x: 0,
            y: 1.5,
            z: 13,
            duration: 1.2,
            ease: "power2.inOut",
            onUpdate: () => {
                camera.lookAt(0, -0.5, 0);
            }
        });

        character.playAnimation("Meeting", {
            loop: true
        });

        return;
    }

    // =========================================
    // DESKTOP — KEEP EXISTING BEHAVIOR
    // =========================================

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
}

    });

    return () => trigger.kill();

}, []);

    return null;

}