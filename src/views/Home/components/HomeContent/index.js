import { React } from 'react'
import About from './About'
import Work from './Work'

export default function HomeContent({selectedView}) {

  return (
    <div className='home-content'>
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
