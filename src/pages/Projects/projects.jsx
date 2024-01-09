import React from 'react';
import "./index.css";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      <div id="GIS">
        <p>Finance Web-Page</p>
        <a href="https://github.com/your-username/your-repository" target="_blank" rel="noopener noreferrer">GitHub Link</a>
        <button><a href="https://your-live-page-url.com" target="_blank" rel="noopener noreferrer">Link to Live Page</a></button>
        <p>Javascript functions to perform financial calculations based on the user's input</p>
        <img src="default.jpg" alt="HTML" />
        <img src="default.jpg" alt="CSS" />
        <img src="default.jpg" alt="Javascript" />
      </div>

      <div id="SoftwareEngineering">
        <p>Another Project</p>
        <a href="https://github.com/another-username/another-repository" target="_blank" rel="noopener noreferrer">GitHub Link</a>
        <button><a href="https://another-live-page-url.com" target="_blank" rel="noopener noreferrer">Link to Live Page</a></button>
        <p>Description of the project</p>
        <img src="default.jpg" alt="HTML" />
        <img src="default.jpg" alt="CSS" />
        <img src="default.jpg" alt="Javascript" />
      </div>
    </div>
  );
}

export default Projects;