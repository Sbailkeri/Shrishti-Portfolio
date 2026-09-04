// Loader.jsx

import { useProgress } from "@react-three/drei";
import "./Loader.css";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-title">LOADING</div>

        <div className="loader-percent">
          {Math.round(progress)}%
        </div>

        <div className="loader-bar">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}