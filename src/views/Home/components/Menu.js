import React from 'react'

export default function Menu({selectedView, changeSelectedView}) {



  return (
    <div>
      Menu Options:
      <button onClick={() => changeSelectedView("about")}>
        <h2 className={`menu-item-text ${selectedView==="about" ? "menu-item-text-active" : ""}`}>About</h2>
      </button>
      <button onClick={() => changeSelectedView("work")}>
        <h2 className={`menu-item-text ${selectedView==="work" ? "menu-item-text-active" : ""}`}>Work</h2>
      </button>
      <button>
        <h2 className="menu-item-text">Contact</h2>
      </button>
    </div>
  )
}
