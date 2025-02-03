import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}  // Ensure each ProjectItem has a unique key
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
