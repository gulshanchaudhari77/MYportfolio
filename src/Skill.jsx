import React from 'react'
import {FaRegCheckCircle} from "react-icons/fa"

const Skill = () => {

    const skill =[
        {
        title :'HTML',
        pregress:90
       },
       {
        title :'CSS',
        pregress:90
       }, {
        title :'JavaScript',
        pregress:70
       }, {
        title :'BootStrap',
        pregress:90
       }, 
       {
        title :'React',
        pregress:90
       },
       {
        title :'Node.js',
        pregress:10
       },
       {
        title :'MongoDb',
        pregress:50
       },
]


  return (
    <div>
        <h3>Development skill</h3>

       {
        skill.map((element)=>{
            return(
                <div key={element.title} className='progressBar'>
                   <p>{element.title}</p>
                    <span><FaRegCheckCircle style={{right : `${element.progress > 85 ? 0 : 100-element.pregress}`}} /></span>
                    </div>
            )
        })
       }
        
    </div>
  )
}

export default Skill