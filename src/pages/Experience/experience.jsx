import GoogleMaps from "../../../src/Images/CSS/GoogleMaps.png";
import Forterra from "../../../src/Images/CSS/Forterra.png";
import PerScholas from "../../../src/Images/CSS/PerScholas.png";
import UniversityIllinois from "../../../src/Images/CSS/UIllinois_logo.png";
import UW from "../../../src/Images/CSS/UW_Logo.png";
import WWU from "../../../src/Images/CSS/WWU_Logo.png";
import UM from "../../../src/Images/CSS/UM_logo.png";


const Experience = () => {

  return (
    <div>
      
{/* Certificates */}
<h2 style ={{textAlign: "center", fontFamily: 'Kaisei Tokumin', margin: "15px"}}>Experience</h2>
<div className="container" style={{ padding: "15px", fontFamily: 'Kaisei Tokumin' }}>
        <div className="row justify-content-around">
          <div className="col-md-4">
            <div className="card" style={{ width: "100%"}}>
              <img className="card-img-top card-img-custom" style={{ padding: "10px" }} src={GoogleMaps} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">GIS Analyst/Project Team Lead</h5>
                <p className="card-text"style={{fontWeight: "lighter", fontSize: "13px"}}>
3 Years of experience optimizing and managing geo-data through SQL, Python, and ArcPro            </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Implemented 200+ Low Emission Zones in EU</li>
                <li className="list-group-item">High-Urban Dense road networks unnaccounted in countries like BR and IN</li>
                <li className="list-group-item">Safe destination routing for U.S. Trucking</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top card-img-custom" src={Forterra} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Forterra</h5>
                <p className="card-text" style={{fontWeight: "lighter", fontSize: "13px"}}>
Utilized Census Tract and Collector Data to create a web map revealing the correlation between socio-economic relations and food desert across Snohomish County                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Spatial Join between Census Tract and Collector</li>
                <li className="list-group-item">Detailed Metadata with precise Geodatabase management</li>
                <li className="list-group-item">Launched ArcGIS Online platform</li>
              </ul>
              <div className="card-body">
                <a href="https://forterra.maps.arcgis.com/apps/mapviewer/index.html?webmap=3238846d43634764b230283c2cd65d61" className="card-link">
                  Forterra ArcGIS Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 style ={{textAlign: "center", fontFamily: 'Kaisei Tokumin', margin: "15px" }}>Education</h2>
      <div className="container" style={{ padding: "15px", fontFamily: 'Kaisei Tokumin' }}>
        <div className="row justify-content-around">
          {/* First Card */}
          <div className="col-md-4">
          <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top card-img-custom" src={UW} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Geographic Information Systems</h5>
                <p className="card-text" style={{fontWeight: "lighter", fontSize: "13px"}}>
                  Utilized Esri Suite products (ArcMap, ArcGIS Pro, ArcGIS Surveyor) to deliver a range of products showcasing our skills in Cartography, Data Analysis, and Geospatial Data Management
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">GIS Modeling and Analysis</li>
                <li className="list-group-item">CAD/GIS integration</li>
                <li className="list-group-item">Python in GIS</li>
              </ul>
              <div className="card-body">
                <a href="https://www.pce.uw.edu/certificates/geographic-information-systems" className="card-link">
                 Program Overview
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top card-img-custom" style = {{backgroundColor: "#283e83"}}src={WWU} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Urban Planning</h5>
                <p className="card-text" style={{fontWeight: "lighter", fontSize: "13px"}}>
                  Comprehensive topics of ethical, inclusive urban-spaces, urban design and history of Urban Planning in U.S.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Conducted mock Comprehensive Plans/Community Meetings</li>
                <li className="list-group-item">Technical Writing and Ethical Practices in Planning</li>
                <li className="list-group-item">Planning For Sustainable Communities</li>
              </ul>
              <div className="card-body">
                <a href="https://www.wwu.edu/majors/urban-planning" className="card-link">
                  Program Overview
                </a>
              </div>
            </div>
          </div>

<h2 style ={{textAlign: "center", fontFamily: 'Kaisei Tokumin', margin: "15px" }}>Certificates</h2>
      <div className="container" style={{ padding: "15px", fontFamily: 'Kaisei Tokumin' }}>
        <div className="row justify-content-around">
          {/* First Card */}
          <div className="col-md-4">
          <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top card-img-custom" src={PerScholas} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Full-Stack Development</h5>
                <p className="card-text">
                  16-week bootcamp program located in Seattle, WA. 
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Vanilla HTML/CSS</li>
                <li className="list-group-item">Javascript/React</li>
                <li className="list-group-item">Back-End Development (Mondo DB)</li>
              </ul>
              <div className="card-body">
                <a href="https://perscholas.org/courses/software-engineer/seattle/" className="card-link">
                  Program Overview
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top card-img-custom" style={{ paddingBottom: "40px", justifyContent: "center", marginTop: "60px" }}src={UniversityIllinois} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">CyberGIS</h5>
                <p className="card-text">
                  Course offered through Coursera covering the fundamentals and advantages of utilizing CyberGIS
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">GIS API and SDKs</li>
                <li className="list-group-item">Utilizing Cloud Services</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a href="https://www.coursera.org/learn/cybergis" className="card-link">
                  Course Overview
                  </a>
                <a href="https://coursera.org/share/5938a3ed7ee49df6a5195c16218126a1" className="card-link">
                  Proof of Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%"}}>
              <img className="card-img-top card-img-custom" src={UM} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Python for Everybody Specialization</h5>
                <p className="card-text">
                  Extensive Course covering the structure syntax to incorporating API and web use integration. 
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Data Structure Principles</li>
                <li className="list-group-item">Database and manipulation using Regex and Functions</li>
                <li className="list-group-item">Object Oriented Python</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Experience;