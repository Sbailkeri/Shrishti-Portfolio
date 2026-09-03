import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
// import BackgroundFX from "../three/BackgroundFX";

import "../styles/Skills.css";

const skills = [
  {
    id: 1,
    title: "React",
    subtitle: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    description:
      "Built modern React applications with reusable components, Context API and animations.",
  },

  {
    id: 2,
    title: "Three.js",
    subtitle: "Interactive 3D",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg",
    description:
      "Interactive 3D experiences using React Three Fiber and Drei.",
  },

  {
    id: 3,
    title: "Blender",
    subtitle: "3D Modeling",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg" ,
    description:
      "Character modelling, texturing and animation for this portfolio.",
  },

  {
    id: 4,
    title: "GSAP",
    subtitle: "Animations",
    image: `${import.meta.env.BASE_URL}videos-pic/gsap.svg`,
    description:
      "Premium page transitions, cinematic camera movement and scroll animations.",
  },

  {
    id: 5,
    title: "Figma",
    subtitle: "UI / UX",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    description:
      "Wireframing, prototyping and modern interface design.",
  },

  {
    id: 6,
    title: "Framer",
    subtitle: "No-Coding Website",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg",
    description:
      "Enterprise applications using Framer.",
  },

  {
    id: 7,
    title: "HTML / CSS",
    subtitle: "Responsive Design",
    image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    description:
      "Responsive layouts using Flexbox, Grid and modern CSS.",
  },
  {
    id: 8,
    title: "JavaScript",
    subtitle: "ES6+",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    description:
      "Modern JavaScript, asynchronous programming and DOM manipulation.",
  },
];

export default function Skills() {

  const [activeCard, setActiveCard] = useState(-1);

  const cardRefs = useRef([]);

  // -----------------------------
  // Entrance Animation
  // -----------------------------

  useEffect(() => {

    const animateSkills = () => {

      gsap.fromTo(

        ".skill-bar",

        {
          opacity: 0,
          x: -80
        },

        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out"
        }

      );

    };

    window.addEventListener(
      "skills-entered",
      animateSkills
    );

    return () => {

      window.removeEventListener(
        "skills-entered",
        animateSkills
      );

    };

  }, []);

  // -----------------------------
  // Hover Animation
  // -----------------------------

  useEffect(() => {

    cardRefs.current.forEach((card,index)=>{
      const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) return;


        if(!card) return;

        gsap.to(card,{

            width:
                activeCard===index
                ?360
                :82,

            duration:.55,

            ease:"power3.out"

        });

        const image=card.querySelector("img");
        const info=card.querySelector(".expanded-info");

        if(image){

            gsap.to(image,{

                opacity:
                    activeCard===index
                    ?1
                    :0,

                y:
                    activeCard===index
                    ?0
                    :20,

                scale:
                    activeCard===index
                    ?1
                    :.8,

                duration:.35

            });

        }

        if(info){

            gsap.to(info,{

                opacity:
                    activeCard===index
                    ?1
                    :0,

                y:
                    activeCard===index
                    ?0
                    :15,

                duration:.4

            });

        }

    });

},[activeCard]);

  return (

    <section
      id="skills"
      className="skills-section"
    >

       <div className="section-stage skills-stage"></div>

      {/* <BackgroundFX /> */}

      
      <div className="skills-container">

        <div className="skills-heading">

          <p>MY SKILLS</p>

          <h2>

            Technologies I Love Building With

          </h2>

        </div>

        <div className="skills-layout">

          {/* LEFT */}

          <div
              className="skills-bars"
              onMouseLeave={() => setActiveCard(-1)}
            >
            {skills.map((skill, index) => (

              <div

                key={skill.id}

                ref={(el) => (cardRefs.current[index] = el)}

                className={`skill-bar ${
                  activeCard === index ? "active" : ""
                }`}

                onMouseEnter={() => {

                  console.log("Hovered", index);

                  setActiveCard(index);

              }}

              >

                <div className="collapsed-title">

                  {skill.title}

                </div>

                <div className="expanded-content">

                  <img

                    src={skill.image}

                    alt={skill.title}

                  />

                  <div className="expanded-info">

                    <h3>{skill.title}</h3>

                    <span>{skill.subtitle}</span>

                    <p>{skill.description}</p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT */}

          <div className="skills-character-space">

            {/* Character renders here */}

          </div>

        </div>

      </div>

    </section>

  );

}