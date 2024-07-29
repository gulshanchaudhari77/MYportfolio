import React from 'react'
import Navbar from './Navbar'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {AiFillInstagram,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare,FaWhatsapp} from "react-icons/fa"
import {RiTwitterXLine} from "react-icons/ri";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Home = ({show,setShow}) => {

  



  return (
    <div className="page homePage">
      <Navbar show={show}/>
      <TbGridDots onClick={()=> setShow(!show)} className='hamburger'></TbGridDots>

      <div className="banner">
        <h1>Gulshan</h1>
        <h1>Chaudahri</h1>


        <p className='gradient-text'>Web Developer</p>
        <div className="btns">
          <Link to="https://res.cloudinary.com/dqtp4nrwh/image/upload/v1720955558/resume_to2yfk.jpg" target='_blank'>Resume</Link>
          <Link to={'/portfolio'}>Portfolio</Link>
        </div>
      </div>
      <footer>
        <ul>
          <Link to={""} target='_blank'><AiFillInstagram/></Link>
          <Link to={""} target='_blank'><AiFillFacebook/></Link>
          <Link to={"https://www.linkedin.com/in/gulshan-chaudhari-5750b6239/"} target='_blank'><AiFillLinkedin/></Link>
          <Link to={""} target='_blank'><FaGithubSquare/></Link>
          <Link to={""} target='_blank'><FaWhatsapp/></Link>
          <Link to={""} target='_blank'><RiTwitterXLine/></Link>
        </ul>
      </footer>
      
    </div>
  )
}

export default Home