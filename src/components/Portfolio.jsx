import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaLaptop } from "react-icons/fa";




const Postfolio = ({show,setShow}) => {

  const projects =[
    {
      _id: "1",
      title: "Hospital Management System",
      category: "MERN STACK",
      thumbnail: "/hms.png",
      projectUrl: "/",
    },
    {
      _id: "2",
      title: "Job Seeking Application",
      category: "MERN STACK",
      thumbnail: "/job.png",
      
      projectUrl: "/",
    },
    {
      _id: "3",
      title: "Blogging Application",
      category: "MERN STACK",
      thumbnail: "/blogging.png",
      projectUrl: "/",
    },
    {
      _id: "4",
      title: "Portfolio With Dashboard",
      category: "MERN STACK",
      thumbnail: "/hms.png",
      projectUrl: "/",
    },
    {
      _id: "5",
      title: "Restaurant Reservation",
      category: "MERN STACK",
      thumbnail: "/restaurant.png",
      projectUrl: "/",
    },


    {
      _id: "4",
      title: "Portfolio With Dashboard",
      category: "MERN STACK",
      thumbnail: "/hms.png",
      projectUrl: "/",
    },
    {
      _id: "5",
      title: "Restaurant Reservation",
      category: "MERN STACK",
      thumbnail: "/restaurant.png",
      projectUrl: "/",
    },{
      _id: "4",
      title: "Portfolio With Dashboard",
      category: "MERN STACK",
      thumbnail: "/hms.png",
      projectUrl: "/",
    },
    {
      _id: "5",
      title: "Restaurant Reservation",
      category: "MERN STACK",
      thumbnail: "/restaurant.png",
      projectUrl: "/",
    },
    {
      _id: "4",
      title: "Portfolio With Dashboard",
      category: "MERN STACK",
      thumbnail: "/hms.png",
      projectUrl: "/",
    },
    {
      _id: "5",
      title: "Restaurant Reservation",
      category: "MERN STACK",
      thumbnail: "/restaurant.png",
      projectUrl: "/",
    },
    
    
  ]
  return (
    <div>
      <section className='page portfolioPage'>
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <div className="header">
            <img src="/star.png" alt="star" /> <h1>ALL project</h1>
            <img src="/star.png" alt="star" />
          </div>
          <div className="latest-projects">
            <div className="first-column">
              {
                projects.slice(0,3).map(element=>{
                  return(
                     <div className='card'>
                      <img src={element.thumbnail} alt="" />
                      <div>
                        <span><p>{element.category}</p>
                        <p>{projects.title}</p>
                        </span>
                        <span>
                          <Link to={element.projecturl}>
                          <img src="/arrow.svg" alt="" />
                          </Link>
                        </span>
                      </div>

                     </div>
                  )
                })
              }

            </div>

            <div className="second-column">
             <div className="header">
             <FaLaptop/><h1>All project</h1>
             <FaLaptop/>
             </div>

             <div className="projects">
             <div className="first-column">
              {
                projects.slice(3,5).map(element=>{
                  return(
                     <div className='card'>
                      <img src={element.thumbnail} alt="" />
                      <div>
                        <span><p>{element.category}</p>
                        <p>{projects.title}</p>
                        </span>
                        <span>
                          <Link to={element.projecturl}>
                          <img src="/arrow.svg" alt="" />
                          </Link>
                        </span>
                      </div>

                     </div>
                  )
                })
              }

            </div>

             </div>
            </div>
          </div>





          // REMAINING PROJECT

          <div className="remaining-projects">

          {
                projects.slice(5,10).map(element=>{
                  return(
                     <div className='card'>
                      <img src={element.thumbnail} alt="" />
                      <div>
                        <span><p>{element.category}</p>
                        <p>{projects.title}</p>
                        </span>
                        <span>
                          <Link to={element.projecturl}>
                          <img src="/arrow.svg" alt="" />
                          </Link>
                        </span>
                      </div>

                     </div>
                  )
                })
              }
          </div>
        </div>
        </section>

        
    </div>
  )
}

export default Postfolio