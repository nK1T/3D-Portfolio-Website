import React, { useState } from "react";
import WebDesign from "./WebDesign";
import Digitalmarketing from "./Digitalmarketing";
import SoftwareDesign from "./SoftwareDesign";
import Design3d from "./Design3d";
import Canva from "./Canva";
// import "./App.css"

function Work() {
  const [work, setWork] = useState("Web Design");
  const jobs = [
    "Web Design",
    "Digital Marketing",
    "Software Design",
    "Unity",
    "3D Model",
  ];
  return (
    <div className="work-container">
      <div className="work-items">
        <div className="work-left">
          <ul>
            {jobs.map((job) => (
              <li key={job} text={job} onClick={() => setWork(job)}>
                {job}
              </li>
            ))}
          </ul>
        </div>
        <div className="work-right">
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Digital Marketing" ? (
            <Digitalmarketing />
          ) : work === "Software Design" ? (
            <SoftwareDesign />
          ) : work === "Unity" ? (
            <Canva />
          ) : (
            <Design3d />
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
