import React from 'react'
import HomeContent from './components/HomeContent'
import InfoBar from './components/InfoBar'
import Menu from './components/Menu'
import { useState } from 'react'
import "./home.css"

export default function Home() {
  const [selectedView, setSelectedView] = useState("about");

  const changeSelectedView = (newView) => {
    if(newView)
      setSelectedView(newView)
  }

  return (
    <div className='home-container'>
      <div>
        <InfoBar/>
        <HomeContent selectedView={selectedView}/>
        <Menu selectedView={selectedView} changeSelectedView={changeSelectedView}/>
      </div>
    </div>
  )
}
