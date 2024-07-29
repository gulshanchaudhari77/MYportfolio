import React from 'react'
import {SiEpicgames} from "react-icons/si"
import{AiFillCamera} from "react-icons/ai";
import{BiSolidPlaneAlt} from "react-icons/bi";
import{MdSportsBaseball} from "react-icons/md";


const Hobbies = () => {
  return (
    <div>
        
        <div className="hobbies">
            <span>
                <div>
                   <SiEpicgames/>
                   Gaming
                </div>
                <div>
                   <AiFillCamera/>
                   photography
                </div>

            </span>

            <span>
                <div>
                   <BiSolidPlaneAlt/>
                   ptraveling
                </div>
                <div>
                   <MdSportsBaseball/>
                   sports
                </div>

            </span>
        </div>
    </div>
  )
}

export default Hobbies