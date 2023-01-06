import React from 'react'
import HomeContent from './components/HomeContent'
import InfoBar from './components/InfoBar'
import Menu from './components/Menu'
import { useState } from 'react'

export default function Home() {
  const [selectedView, setSelectedView] = useState("about");

  const changeSelectedView = (newView) => {
    console.log("newView: ", newView)
    if(newView){
      setSelectedView(newView)
      console.log(newView)
    }
  }

  return (
    <div className='home-container'>
      <InfoBar/>
      <HomeContent selectedView={selectedView}/>
      <Menu selectedView={selectedView} changeSelectedView={changeSelectedView}/>
    </div>
  )
}
