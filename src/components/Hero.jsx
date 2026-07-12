import { useEffect, useRef } from "react";
import gsap from "gsap";

import HeroScene from "../three/HeroScene";
import "../styles/Hero.css";
import "../styles/style.css";
// import BackgroundFX from "../three/BackgroundFX";


export default function Hero() {

  const titleRef = useRef();
  const subtitleRef = useRef();
  const paraRef = useRef();
  const buttonsRef = useRef();



  return (
    <section className="hero-section">
      <div className="section-stage"></div>

      {/* <BackgroundFX /> */}
           
  
      <div className="hero-left">
        
      </div>

      <div className="hero-right">

        <h1 ref={titleRef}>
          <span className="title-word">Hi,</span>
          <br />
          
          
          <span className="title-word">I'm Shrishti</span>
        </h1>

        <h3 ref={subtitleRef}>
          UI/UX Designer & Developer
        </h3>

        <p ref={paraRef}>
          Designing intuitive user experiences and
          building interactive web applications with
          React, Three.js and modern frontend technologies.
        </p>

        <div
          ref={buttonsRef}
          className="hero-buttons"
        >
          <a
              href="./videos-pic/ShrishtiResume.pdf"
              download
              className="btn-primary"
          >
              Download Resume
          </a>

          <button
            className="secondary-btn"
            onClick={() => {
                document
                    .getElementById("contact")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            }}
        >
            Contact Me
        </button>
        </div>

      </div>

    </section>
  );
}