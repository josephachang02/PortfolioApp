import React from 'react';
import "./index.css";
import IconButton from '../../components/Icon/IconButton';
import { IoLogoJavascript , IoLogoCss3} from "react-icons/io";
import { FaHtml5 , FaReact , FaBootstrap , FaPython ,   } from "react-icons/fa"
import { TbApi , TbSql  } from "react-icons/tb";
import { SiMongodb , SiPandas , SiGdal  } from "react-icons/si";
import { DiGithubBadge , DiPostgresql } from "react-icons/di";
import Lottie from 'react-lottie'
import SE from "../../../src/Images/CSS/se_working.json";


const software = () => {
  
  const softwareAnimation = {
    loop: true,
    autoplay: true,
    animationData: SE,
  };

  return (
    <div>
      <div id ="intro">
      <Lottie options={softwareAnimation} height={180} width={180} style={{ margin: '2px !important', pointerEvents: "none"}} />
      <p> Over the past year I have started to develop my skills within Coding to pursue a role as a GIS Developer. My journey began through a Coding Bootcamp as many would in their first steps into the software engineering world. Through this Bootcamp i would gain a compound knowledge for the structure of Front-End and Back-End Development.</p>
    
  
    <h2>Software Engineering Projects</h2>
    <p>Here in this section, I have highlighted samples of the projects from my Bootcamp along with projects that I have independently undertaken.</p>
    </div>
        <div id="SE-Card">
          <div className = "card-content">
            <p>Finance Web-Page</p>
            <a href="https://github.com/josephachang02/FinanceApp" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            <button>
            <a href="https://peppy-custard-ae0f17.netlify.app" target="_blank" rel="noopener noreferrer">Link to Live Page</a></button>
            <p>Javascript functions to perform financial calculations based on the User's input</p>
            </div>
            <div className = "icon-image">
            <IconButton
              icon={<FaHtml5 />}
              className="html-button"
              href=""
              onClick={() => {}}/>
            <IconButton
              icon={<IoLogoCss3 />}
              className = "css3-button"
              href=""
              onClick={() => {}}/> 
             <IconButton
              icon={<IoLogoJavascript />}
              className="javascript-button"
              href=""
              onClick={() => {}}/>
            <IconButton
              icon={<DiGithubBadge />}
              className="github-button"
              href=""
              onClick={() => {}}/>
          </div>
        </div>
    
        <div id="SE-Card">
          <div className = "card-content">
            <p>NBA App</p>
            <a href="https://github.com/another-username/another-repository" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            <button><a href="https://another-live-page-url.com" target="_blank" rel="noopener noreferrer">Link to Live Page</a></button>
            <p>Description of the project</p>
            </div>
            <div className = "icon-image">
            <IconButton
              icon={<FaReact />}
              className="react-button"
              href=""
              onClick={() => {}}/>
            <IconButton
              icon={<TbApi />}
              className = "api-button"
              href=""
              onClick={() => {}}/> 
             <IconButton
              icon={<FaBootstrap />}
              className="bootstrap-button"
              href=""
              onClick={() => {}}/>
          </div>
        </div>

        <div id="SE-Card">
          <div className = "card-content">
            <p>Workout App</p>
            <a href="https://github.com/another-username/another-repository" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            <button><a href="https://another-live-page-url.com" target="_blank" rel="noopener noreferrer">Link to Live Page</a></button>
            <p>Description of the project</p>
            </div>
            <div className = "icon-image">
            <IconButton
              icon={<FaReact />}
              className="react-button"
              href=""
              onClick={() => {}}/>
            <IconButton
              icon={<TbApi />}
              className = "api-button"
              href=""
              onClick={() => {}}/> 
             <IconButton
              icon={<FaBootstrap />}
              className="bootstrap-button"
              href=""
              onClick={() => {}}/>
              <IconButton
              icon={<SiMongodb />}
              className="javascript-button"
              href=""
              onClick={() => {}}/>
          </div>
        </div>
        <h2>Python Projects</h2>
        <p>Python is arguably the most foundational syntax languages used to develop algorithms and scripts used in software engineering. Since the end of 2023, I took it upon myself to pursue learning Python to grasp a better understanding for the use of data analysis and automation.</p>
        <div id="Python-Card">
          <div className = "card-content">
            <p>Python Project Example Name</p>
            <a href="https://github.com/another-username/another-repository" target="_blank" rel="noopener noreferrer">GitHub Link</a>
            <button><a href="https://another-live-page-url.com" target="_blank" rel="noopener noreferrer">Link to Live Page</a></button>
            <p>Description of the project</p>
            </div>
            <div className = "icon-image">
            <IconButton
              icon={<FaPython />}
              className="python-button"
              href=""
              onClick={() => {}}/>
            <IconButton
              icon={<TbSql />}
              className = "sql-button"
              href=""
              onClick={() => {}}/> 
             <IconButton
              icon={<SiPandas />}
              className="pandas-button"
              href=""
              onClick={() => {}}/>
              <IconButton
              icon={<DiPostgresql />}
              className="postgres-button"
              href=""
              onClick={() => {}}/>
              <IconButton
              icon={<SiGdal />}
              className="gdal-button"
              href=""
              onClick={() => {}}/>
          </div>
        </div>






      </div>
      );
    }

export default software