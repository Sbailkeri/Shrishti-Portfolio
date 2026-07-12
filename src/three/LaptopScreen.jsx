import { useEffect, useState } from "react";
import "../styles/LaptopScreen.css";

export default function LaptopScreen({

    project = {

        title:"",

        command:"",

        video:""

    }

}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        const timer = setTimeout(() => {

            setLoading(false);

        }, 1200);

        return () => clearTimeout(timer);

    }, [project]);

    return (

        <div className="laptop-screen">

            <div className="terminal-header">

                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>

            </div>

            {

            loading ?

            (

                <div className="terminal">

                    <p>

                        $ {project.command}

                    </p>

                    <p>

                        Initializing...

                    </p>

                    <p>

                        Loading Assets...

                    </p>

                    <p>

                        Compiling...

                    </p>

                    <span className="cursor">

                        █

                    </span>

                </div>

            )

            :

            (

                <video

                    src={project.video}

                    autoPlay

                    muted

                    loop

                    playsInline

                />

            )

            }

        </div>

    );

}