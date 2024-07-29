import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import Skill from "../Skill";
import Language from "./Language";
import Experience from "./Experience";
import Education from "./Education";
import Hobbies from "./Hobbies";

// import Skills from './components/sub-components/Skills.jsx'

// import Languages from "./sub-components/Languages";
// import Experience from "./sub-components/Experience";
// import Education from "./sub-components/Education";
// import Hobbies from "./sub-components/Hobbies";

const Resume = ({ show, setShow }) => {
  return (
    <>
      <section className="page resumePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <div className="first-column">
            <Skill/>
            <Language/> 
            <div className="personal-skills">
              <h3>PERSONAL SKILLS</h3>
              <p>Creativity - Team Work - Organization</p>
            </div>
          </div>
          <div className="second-column">
             <Experience />
             <Education/>

      
          </div>
          <div className="third-column">
            <div>
              <h3>WHAT CAN I DO</h3>
              <p>
                Web Development - Frontend Development{" "}
                <span>Website Optimization - Problem Solving</span>
                <span>Code Debugging - Project Management</span>
              </p>
            </div>
            <div>
              <h3>ADDITIONAL EXPERTIES</h3>
              <p>
                Database Management - Responsive Design{" "}
                <span>Version Control - API Integration</span>
              </p>
            </div>
            <div>
              <h3>HOBBIES AND INTERESTS</h3>
               <Hobbies/> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
