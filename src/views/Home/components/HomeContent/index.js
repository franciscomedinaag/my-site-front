import React from 'react'
import About from './About'
import Work from './Work'
import { useEffect } from 'react'

export default function HomeContent({selectedView}) {

  useEffect(()=>{
    console.log("the selected view is: ", selectedView)
  })

  return (
    <div>
      HomeContent
      {
        selectedView === "about"
        ?
        <About/>
        :
        <Work/>
      }
    </div>
  )
}
