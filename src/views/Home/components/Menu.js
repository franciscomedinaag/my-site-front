import {React, useEffect, useState} from 'react'

export default function Menu({selectedView, changeSelectedView}) {
  
  return (
    <div className='menu'>
      <button onClick={() => changeSelectedView("about")}>
        <h2 className={`menu-item-text ${selectedView==="about" ? "menu-item-text-active" : ""}`}>About</h2>
      </button>
      <button onClick={() => changeSelectedView("work")}>
        <h2 className={`menu-item-text ${selectedView==="work" ? "menu-item-text-active" : ""}`}>Work</h2>
      </button>
      <button>
        <a target="_blank" rel="noopener noreferrer" href="mailto:franciscomedinaag@gmail.com">
          <h2 className="menu-item-text">Contact</h2>
        </a>
      </button>
    </div>
  )
}
