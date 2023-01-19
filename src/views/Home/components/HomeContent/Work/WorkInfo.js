import {React, useEffect} from 'react'

export default function WorkInfo({selectedWork}) {
    useEffect(()=>{
        console.log("use effect: ", selectedWork)
    })

  return (
    <>
        {
            selectedWork === "vass"
            ?
                <div className='work-info vass'>
                    <h3 className='work-info-title'> Fullstack Engineer <span>@ VASS</span></h3>
                    <span className='work-info-dates'> Jan 2022 - Present </span>
                    <p className='work-info-description'> 
                        Full Stack Developer building modern custom
                        web and mobile apps using Java and Javascript 
                        technologies. Collaborated closely with the Head of 
                        Product to track our tactical objectives, improve 
                        technical directions and shipping frequency. </p>
                    <div className='work-info-skills'>
                        <span> React </span>
                        <span> Java </span>
                    </div>
                </div>
            :
                selectedWork === "helium"
                ?
                    <div className='work-info helium'>
                        <h3 className='work-info-title'> Fullstack Engineer <span>@ HELIUM</span></h3>
                        <span className='work-info-dates'> Jan 2022 - Present </span>
                        <p className='work-info-description'> 
                            Full Stack Developer building modern custom
                            web and mobile apps using Java and Javascript 
                            technologies. Collaborated closely with the Head of 
                            Product to track our tactical objectives, improve 
                            technical directions and shipping frequency. </p>
                        <div className='work-info-skills'>
                            <span> React </span>
                            <span> Java </span>
                        </div>
                    </div>
                :
                selectedWork === "jarabe-soft"
                ?
                    <div className='work-info helium'>
                        <h3 className='work-info-title'> Fullstack Engineer <span>@ JARABE SOFT</span></h3>
                        <span className='work-info-dates'> Jan 2022 - Present </span>
                        <p className='work-info-description'> 
                            Full Stack Developer building modern custom
                            web and mobile apps using Java and Javascript 
                            technologies. Collaborated closely with the Head of 
                            Product to track our tactical objectives, improve 
                            technical directions and shipping frequency. </p>
                        <div className='work-info-skills'>
                            <span> React </span>
                            <span> Java </span>
                        </div>
                    </div>
                :
                <div></div>
        }
    </>
  )
}
