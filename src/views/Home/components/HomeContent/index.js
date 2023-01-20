import { React, useEffect, useState } from 'react'
import About from './About'
import Work from './Work'

export default function HomeContent({selectedView}) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className='home-content'>
      {
        isDesktop ? (
          selectedView === "about"
          ?
          <About/>
          :
          <Work/>
        ) : (
          <>
            <About/>
            <Work/>
          </>
        )
      }
    </div>
  )
}
