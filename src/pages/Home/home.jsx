
import Resume from "../../../src/Images/CSS/GIS_Resume.pdf";
import ProfilePicture from "../../../src/Images/CSS/Profile.jpg";
import './index.css';

const Home = () => {
    const onButtonClick = () => {
        const pdfUrl = "../../../src/Images/CSS/GIS_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "JoeResume.pdf"; //name shown in url
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
        
        <div id="content-split-container">
        <div id="profilepic">
            <img id="profilePicture" src ={ProfilePicture} />
        </div>
        <div id="aboutMe">
            <h1>About Me</h1>
        </div>
        <div id="aboutContent">
            <p>Hello everyone, my name is Joe and I would like to welcome to my personal portfolio website that I created through React. A little bit about me, I currently living in Lynnwood, WA. I received my Bachelor's degree in Urban Planning from Western Washington University and a GIS certificate from the University of Washington. I began my professional career as a GIS Specialist at Google, quickly taking on roles in data quality control and workflow management. I eventually led specialized projects, such as Low Emission Zones, U.S. Trucking Routes, Biking Lanes, and Plus Codes Roads. However, I realized I needed to expand my skills to advance further, I enrolled myself into a full-stack development bootcamp and this has propelled the start of my career transition into a software engineer. My next goals is to develop a fundamental understanding of Python, which will propel my career in both GIS and Software Engineering. </p>
        </div>
        </div>





            <center>
                <h3>
                    Click below to download my resume PDF
                </h3>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </>
    );
};
 
export default Home;