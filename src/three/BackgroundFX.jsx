import "../styles/BackgroundFX.css";
import { useScene } from "../three/SceneContext";

export default function BackgroundFX() {
     
    return (
       

        <div className="background-fx">

            {/* =========================
                Base Atmospheric Layers
            ========================== */}

            {/* <div className="hero-blue-glow"></div>
            <div className="hero-purple-glow"></div>
            <div className="hero-bottom-glow"></div> */}

            {/* =========================
                Nebula Clouds
            ========================== */}

            {/* <div className="nebula nebula1"></div>
            <div className="nebula nebula2"></div>
            <div className="nebula nebula3"></div> */}

            {/* =========================
                Aurora Layer
            ========================== */}

            <div className="aurora"></div>

            {/* =========================
                Giant Blurred Blobs
            ========================== */}

            {/* <div className="bg-blob blob1"></div>
            <div className="bg-blob blob2"></div>
            <div className="bg-blob blob3"></div> */}

            {/* =========================
                Giant Rings
            ========================== */}

            {/* <div className="ring r1"></div>
            <div className="ring r2"></div>
            <div className="ring r3"></div>
            <div className="ring r4"></div>
            <div className="ring r5"></div>
            <div className="ring r6"></div>
            <div className="ring r7"></div>
            <div className="ring r8"></div> */}

            {/* =========================
                Light Streaks
            ========================== */}

            {/* <div className="light-streak streak1"></div>
            <div className="light-streak streak2"></div>
            <div className="light-streak streak3"></div> */}

            {/* =========================
                Character Stage
            ========================== */}

            {/* <div id="stage-floor" className="stage-floor"></div> */}

            {/* =========================
                Floating Ambient Orbs
            ========================== */}

            <div className="floating-orbs">

                {[...Array(12)].map((_, i) => (

                    <span key={i}></span>

                ))}

            </div>

            {/* =========================
                Dust Particles
            ========================== */}

            <div className="dust">

                {[...Array(70)].map((_, i) => (

                    <i key={i}></i>

                ))}

            </div>

        </div>

    );

}