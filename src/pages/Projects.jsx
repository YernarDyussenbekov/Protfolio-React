import React, { useState, useEffect } from "react";
import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";
import "./../styles/projects.css";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []); // Run effect only once

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              img={project.img}
              index={index}
              isActive={index === activeIndex}
              style={{ animationDelay: `${index * 0.1}s` }} // Adjust delay for each card
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
