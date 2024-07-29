


import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
const About = ({ show, setShow }) => {
  return (
    <>
      <section className="page aboutPage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />

        <div className="banner">
          <div className="content">
            <div>
              <h1>ABOUT</h1>
              <h3>gulshanchaudhari77@gmail.com</h3>
            </div>
            <div>
            Hello, I'm Gulshan Kumar, MERN Stack Developer include learning front-end languages HTML, CSS, and JavaScript, mastering front-end tools like Visual Studio Code and Git, understanding the basics of website design, and learning how to use React. The back-end components of the MERN stack, Node. js, Express.
            </div>
            <div>
              <p>Nagpur, India</p>
              
            </div>
          </div>
          <div className="profileImage">
            <img src="https://scontent.fdel4-2.fna.fbcdn.net/v/t39.30808-6/451283643_850943026964614_2293174540074889848_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z13Hrp-LgDQQ7kNvgFDj-NP&_nc_ht=scontent.fdel4-2.fna&oh=00_AYA4iMKn_IHJNmWlqs_q610nKsKXtMBe5Xf0yLrZEWki-w&oe=669994B1" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
