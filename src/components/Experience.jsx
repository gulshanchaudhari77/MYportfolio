import React from 'react'

const Experience = () => {
    const experience =[
        {
            id:1,
            title:'************',
            from:"**-**-****",
            to:"**-**-****",
            desc:"***************************",

        },
        {
            id:2,
            title:'************',
            from:"**-**-****",
            to:"**-**-****",
            desc:"***************************",

        },

    ];
  return (
    <div>
        <div className="experience_component">
            <h3>EXPERINCE</h3>
            <div className="experiences_container">
                {
                    experience.map((element)=>{
                        return(
                        <div className="experience">
                            <div className="duration">
                                {element.from} <span>to</span> {element.to}
                            </div>
                            <div className="organization">
                                <p>{element.title}</p>
                                <p>{element.desc}</p>
                            </div>
                        </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Experience