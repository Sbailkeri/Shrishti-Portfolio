import "../styles/Projects.css";
import { useScene } from "../three/SceneContext";
import LaptopScreen from "../three/LaptopScreen";
// import BackgroundFX from "../three/BackgroundFX";

const projects = [
  {
    id: 1,
    title: "NetFlow",
    command: "open NetFlow",
    subtitle: "Network Monitoring Platform",
    description:
      "A comprehensive monitoring dashboard that visualizes assigned tasks , status of the tasks, and tracking upadates regularly.",
    tech: ["HTML", "CSS", "Django", "Jquery", "Bootstrap"],
    video:`${import.meta.env.BASE_URL}videos-pic/netflow.mp4`,
    live: "#",
    github: "#",
    animation:"Meeting"
  },
  
  {
    id: 2,
    title: "Heaven Stay",
    command: "open HeavenStay",
    subtitle: "PG Accommodation Website",
    description:
      "A modern Framer website designed for a PG owner with booking details, contact information and responsive layouts.",
    tech: ["Framer", "UI Design", "Responsive"],
    video:`${import.meta.env.BASE_URL}videos-pic/heavenstay.mp4`,
    live: "#",
    github: "#",
    animation:"Talking"
  },
  {
    id: 3,
    title: "Interactive Portfolio",
    command: "open Portfolio",
    subtitle: "React • Three.js • GSAP",
    description:
      "Interactive portfolio featuring a fully animated 3D character synchronized with page scrolling.",
    tech: ["React", "Three.js", "GSAP", "Blender"],
    video:  `${import.meta.env.BASE_URL}videos-pic/portfolio.mp4`,
    live: "#",
    github: "#",
    animation:"Talking1"
  },
  {
    id: 4,
    title: "My Design Work",
    command: "open Design Work",
    subtitle: "Creative Design snippets",
    description:
      "A collection of my Design work",
    tech: ["Figma"],
    video:  `${import.meta.env.BASE_URL}videos-pic/bbwork.mp4`,
    live: "#",
    github: "#",
    animation:"Talking2"
  },
];

export default function Projects() {
  const { activeProject, setActiveProject, characterRef } = useScene();

  const current =
    activeProject ||
    projects[0];

  return (
    <section
      id="projects"
      className="projects-section"
    >

      <div className="section-stage projects-stage"></div>

       {/* <BackgroundFX /> */}
      {/* Background Glow */}

       {/* MOBILE PROJECTS */}
  <div className="projects-mobile">

    <div className="projects-mobile-header">

  <span className="section-tag">
    PROJECTS
  </span>

  <h2>
    Things I've Built So Far
  </h2>

  <p>
    A collection of projects that showcase my
    skills, creativity and problem-solving
    abilities.
  </p>

</div>

    <div className="projects-mobile-preview">
      <LaptopScreen project={current} />
    </div>

    <div className="projects-mobile-capsules">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          className={`project-capsule ${
            current.id === project.id ? "active" : ""
          }`}
          onClick={() => setActiveProject(project)}
        >
          {project.title}
        </button>
      ))}
    </div>

    <div className="projects-mobile-details">

      <div className="project-heading">
        <h3>{current.title}</h3>
        <span className="heading-line"></span>
        <h4>{current.subtitle}</h4>
      </div>

      <p className="project-description">
        {current.description}
      </p>

      <div className="tech-stack">
        {current.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-buttons">
    <a
        href={current.live}
        target="_blank"
        rel="noreferrer"
        className="btn-primary"
    >
        Live Demo
    </a>

    <a
        href={current.github}
        target="_blank"
        rel="noreferrer"
        className="btn-secondary"
    >
        GitHub
    </a>
</div>

    </div>

  </div>
    

      <div className="projects-wrapper">

        {/* LEFT PANEL */}

        <div className="projects-sidebar">

          <span className="section-tag">
            PROJECTS
          </span>

          <h2>
            Things I've Built
            <br />
            So Far
          </h2>

          <p>
            A collection of projects that showcase my
            skills, creativity and problem-solving
            abilities.
          </p>

          {/* Timeline */}

          <div className="timeline">

            {projects.map((project) => (

              <div
                key={project.id}
                className={`timeline-item ${
                  current.id === project.id
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() => {

    setActiveProject(project);

    
}}
              >
                <div className="timeline-dot"></div>

                <div className="timeline-card">

                  {/* <span className="command">
                    {project.command}
                  </span> */}

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.subtitle}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CENTER PANEL */}

        <div className="projects-main">

          <div className="preview-window">
            <LaptopScreen project={current} />
            {/* Your LaptopScreen component
                will appear behind this.
                This box simply reserves the space.
            */}

          </div>

          <div className="project-details">

            <div className="project-heading">
                <h3>{current.title}</h3>
                <span className="project-divider">—</span>
                <h4>{current.subtitle}</h4>
            </div>

            

            <p>
              {current.description}
            </p>

            <div className="tech-stack">

              {current.tech.map((item) => (

                <span key={item}>
                  {item}
                </span>

              ))}

            </div>

            <div className="project-buttons">

              <a
                href={current.live}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Live Demo
              </a>

              <a
                href={current.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="projects-right">

          {/* <div className="focus-card">

            <h4>
              ✦ Focus Areas
            </h4>

            <ul>

              <li>Problem Solving</li>

              <li>Clean UI / UX</li>

              <li>Performance</li>

              <li>Scalability</li>

            </ul>

          </div> */}

          {/* Empty space for your 3D character */}

          <div className="character-space"></div>

        </div>

      </div>

    </section>
  );
}