import React from 'react';
import "./index.css";
import IconButton from '../../components/Icon/IconButton';
import { IoLogoJavascript, IoLogoCss3} from "react-icons/io";
import { FaHtml5 } from "react-icons/fa"

const software = () => {
    return (
        <div>
          <h1>Projects in SE</h1>
    
          <div id="GIS">
            <p>Finance Web-Page</p>
            <a href="https://github.com/josephachang02/FinanceApp" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            <button><a href="https://peppy-custard-ae0f17.netlify.app" target="_blank" rel="noopener noreferrer">Link to Live Page</a></button>
            <p>Javascript functions to perform financial calculations based on the User's input</p>
            <IconButton
              icon={<FaHtml5 />}
              className="html-button"
              href=""
              onClick={() => {
                // Handle button click for JavaScript
              }}
            />
            <IconButton
              icon={<IoLogoCss3 />}
              className = "css3-button"
              href=""
              onClick={() => {
                // Handle button click for CSS3
              }}
            /> 
             <IconButton
              icon={<IoLogoJavascript />}
              className="javascript-button"
              href=""
              onClick={() => {
                // Handle button click for JavaScript
              }}
            />
            
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

export default software