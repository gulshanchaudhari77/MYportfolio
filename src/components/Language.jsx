import React from 'react'
import {FaRegCheckCircle} from "react-icons/fa"


const Language = () => {
    const lanaguage =[
        
             {
                id:1,
                title :'English',
                pregress:70
               },
               {
                id:1,
                title :'Hindi',
                pregress:90
               },
               {
                id:1,
                title :'Marathi',
                pregress:90
               },
               {
                id:1,
                title :'c',
                pregress:90
               },

        
    ]
  return (
    <div style ={{marginTop:"2rem"}}>
        <h3>Language</h3>
        {
            lanaguage.map((element)=>{
                return(
                    <div className='progressBar'>
                        <p>{element.title}</p>
                        <span><FaRegCheckCircle style={{right : `${element.progress > 85 ? 0 : 100-element.pregress}`}} /></span>

                        </div>
                )
            })
        }


    </div>
  )
}

export default Language