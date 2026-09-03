
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// import HeroScene from "../three/HeroScene";
import "../styles/Hero.css";
import "../styles/style.css";

export default function Hero() {

  const titleRef = useRef();
  const subtitleRef = useRef();
  const paraRef = useRef();
  const buttonsRef = useRef();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  // -----------------------------------------
  // MOBILE CHARACTER FINISHED EVENT
  // -----------------------------------------

  useEffect(() => {

    const handleHeroCharacterExit = () => {
      setShowIntro(true);
    };

    window.addEventListener(
      "hero-character-exit",
      handleHeroCharacterExit
    );

    return () => {
      window.removeEventListener(
        "hero-character-exit",
        handleHeroCharacterExit
      );
    };

  }, []);


  // -----------------------------------------
  // INTRO ANIMATION
  // -----------------------------------------

  useEffect(() => {

    if (!showIntro) return;

    const elements = [
      titleRef.current,
      subtitleRef.current,
      paraRef.current,
      buttonsRef.current
    ];

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      }
    );

  }, [showIntro]);


  // -----------------------------------------
  // CLOSE MENU WHEN LINK IS CLICKED
  // -----------------------------------------

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <>

      {/* =====================================
          FIXED NAVBAR
      ====================================== */}

      <nav className="mobile-navbar">

        <a
          href="#home"
          className="mobile-logo"
          onClick={closeMenu}
        >
          SHRISHTI
        </a>


        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </nav>


      {/* =====================================
          MOBILE SIDE MENU
      ====================================== */}

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >

        <div className="mobile-menu-inner">

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>

      </div>


      {/* =====================================
          HERO
      ====================================== */}

      <section
        id="home"
        className={`hero-section ${showIntro ? "intro-visible" : ""}`}
      >

        <div className="section-stage"></div>


        {/* 3D CHARACTER */}

        <div className="hero-left">
          {/* <HeroScene /> */}
        </div>


        {/* INTRO */}

        <div className="hero-right">

          <h1 ref={titleRef}>

            <span className="title-word">
              Hi,
            </span>

            <br />

            <span className="title-word">
              I'm Shrishti
            </span>

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

    </>
  );
}

