import "../styles/Contact.css";

import { useEffect, useState } from "react";

import {
    FaEnvelope,
    FaPhoneAlt,
    FaLinkedin,
    FaGithub,
    FaFileDownload,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
     const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {

        const handleOutsideClick = (event) => {

            if (!event.target.closest(".contact-card")) {
                setActiveCard(null);
            }

        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };

    }, []);

    const handleCardClick = (event, index) => {

        // Desktop keeps its normal link behavior
        if (window.innerWidth > 768) return;

        // Mobile: don't immediately open the link
        event.preventDefault();
        event.stopPropagation();

        setActiveCard(activeCard === index ? null : index);
    };


    return (
        <section
            id="contact"
            className="contact-section"
        >
            <div className="section-stage contact-stage"></div>

            <div className="contact-container">

                <div className="contact-left">

                    <p className="contact-tag">
                        CONTACT
                    </p>

                    <h2 className="contact-title">
                        Let's Build Something Amazing Together.
                    </h2>

                    <p className="contact-description">
                        I'm always excited to discuss new ideas,
                        UI/UX projects, frontend development,
                        or simply connect with fellow creatives.
                    </p>

                    <div className="contact-grid">

                        {/* Email */}

                        <a
                            href="mailto:shrishti04112001@gmail.com"
                            className={`contact-card ${activeCard === 0 ? "active" : ""}`}
                            onClick={(event) => handleCardClick(event, 0)}
                        >
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3>Email</h3>
                                <p>shrishti04112001@gmail.com</p>
                            </div>
                        </a>

                        {/* Phone */}

                        <a
                            href="tel:+917875509444"
                            className={`contact-card ${activeCard === 1 ? "active" : ""}`}
                            onClick={(event) => handleCardClick(event, 1)}
                        >
                            <div className="contact-icon">
                               <FaPhoneAlt />
                            </div>

                            <div>
                                <h3>Phone</h3>
                                <p>+91 7875509444</p>
                            </div>
                        </a>

                        {/* Location */}

                        <a
                            href="https://maps.google.com/?q=Pune,Maharashtra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`contact-card ${activeCard === 2 ? "active" : ""}`}
                            onClick={(event) => handleCardClick(event, 2)}
                        >
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3>Location</h3>
                                <p>Pune, Maharashtra</p>
                            </div>
                        </a>

                        {/* LinkedIn */}

                        <a
                            href="https://linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`contact-card ${activeCard === 3 ? "active" : ""}`}
                            onClick={(event) => handleCardClick(event, 3)}
                        >
                            <div className="contact-icon">
                                <FaLinkedin />
                            </div>

                            <div>
                                <h3>LinkedIn</h3>
                                <p>linkedin.com/in/your-profile</p>
                            </div>
                        </a>


                        {/* resume */}


                        <a
                            href="./videos-pic/ShrishtiResume.pdf"
                            download
                            className={`contact-card ${activeCard === 4 ? "active" : ""}`}
                            onClick={(event) => handleCardClick(event, 4)}
                        >
                            <div className="contact-icon"><FaFileDownload /></div>

                            <div>
                                <h3>Resume</h3>
                                <p>Download PDF</p>
                            </div>
                        </a>


                        {/* github */}

                        <a
                            href="https://github.com/Sbailkeri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`contact-card ${activeCard === 5 ? "active" : ""}`}
                            onClick={(event) => handleCardClick(event, 5)}
                        >
                            <div className="contact-icon">
                                <FaGithub />
                            </div>

                            <div>
                                <h3>GitHub</h3>
                                <p>github.com/yourusername</p>
                            </div>
                        </a>

                    </div>

                </div>

                <div className="contact-right">
                    {/* Character lives here */}
                </div>

            </div>

        </section>
    );
}