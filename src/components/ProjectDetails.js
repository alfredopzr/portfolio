import React from 'react';
import '../css/ProjectDetails.css';

const ProjectDetails = ({ projectId, goBack }) => {
  const projectDetails = {
    1: { title: 'Search Engine with Typesense', description: 'A custom search engine built with Typesense.' },
    2: { title: 'Responsive Portfolio Website', description: 'Built a fully responsive personal website using HTML, CSS, and JavaScript.' },
    3: { title: 'Data Visualizations with D3.js', description: 'Created interactive data visualizations using D3.js.' },
  };

  const project = projectDetails[projectId];

  return (
    <div className="project-expanded">
      <button className="back-arrow" onClick={goBack}>← Back to Projects</button>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
