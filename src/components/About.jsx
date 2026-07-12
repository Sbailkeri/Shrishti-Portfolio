import { useEffect } from "react";

import gsap from "gsap";
// import BackgroundFX from "../three/BackgroundFX";

import "../styles/About.css";
import "../styles/style.css";

export default function About() {

  useEffect(() => {

    const animateCards = () => {

      const tl = gsap.timeline({
            defaults:{
                ease:"power3.out"
            }
            });

      tl.fromTo(
            ".about-tag",
            {
                opacity:0,
                y:30
            },
            {
                opacity:1,
                y:0,
                duration:.5
            }
            )

            .fromTo(
            ".about-title",
            {
                opacity:0,
                y:30
            },
            {
                opacity:1,
                y:0,
                duration:.5
            },
            "-=.2"
            )

            .fromTo(
            ".about-description",
            {
                opacity:0,
                y:30
            },
            {
                opacity:1,
                y:0,
                duration:.6
            },
            "-=.2"
            )

            .fromTo(
            ".stat",
            {
                opacity:0,
                y:30
            },
            {
                opacity:1,
                y:0,
                stagger:.15,
                duration:.5
            },
            "-=.2"
            )

            .fromTo(
            ".philosophy-card",
            {
                opacity:0,
                x:80
            },
            {
                opacity:1,
                x:0,
                duration:.6
            },
            "-=.3"
            )

            .fromTo(
            ".education-card",
            {
                opacity:0,
                x:80
            },
            {
                opacity:1,
                x:0,
                duration:.6
            },
            "-=.3"
            );

    };

    window.addEventListener("character-landed", animateCards);

    return () => {
      window.removeEventListener("character-landed", animateCards);
    };

  }, []);

  return (
    <section id="about" className="about-section">

    <div className="section-stage about-stage"></div>
      {/* <BackgroundFX /> */}

  {/* Background Glows */}
  

  <div className="about-container">

    {/* LEFT SIDE */}

    <div className="about-left">

      <p className="about-tag">
        GET TO KNOW ME
      </p>

      <h2 className="about-title">
        About Me
      </h2>

      <p className="about-description">
        I'm a UI/UX Designer and Frontend Developer with
        2.5+ years of experience creating interactive
        web applications using React, Three.js, GSAP
        and modern frontend technologies.
      </p>

      <div className="about-stats">

        <div className="stat">
          <h3>2.5+</h3>
          <span>Years Experience</span>
        </div>

        <div className="stat">
          <h3>10+</h3>
          <span>Projects Built</span>
        </div>

        <div className="stat">
          <h3>Reliance</h3>
          <span>Jio</span>
        </div>

        <div className="stat">
          <h3>Open</h3>
          <span>To Work</span>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="about-right">

      <div className="about-card philosophy-card">
        <h3>My Philosophy</h3>

        <p>
          Designing intuitive user experiences that
          combine aesthetics with functionality while
          keeping users at the center.
        </p>
      </div>

      <div className="about-card education-card">
        <h3>Education</h3>

        <p>
          B.E Information Technology
          <br />
          UI / UX Designer
        </p>
      </div>

    </div>

  </div>

</section>
  );
}