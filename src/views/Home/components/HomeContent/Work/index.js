import { React, useState } from 'react'
import WorkInfo from './WorkInfo';

export default function Work() {
  const [selectedWork, setSelectedWork] = useState("vass");

  const changeSelectedWork = (event, workClass) => {
    let activeWorks = document.getElementsByClassName("work-list-active");
    while (activeWorks.length)
        activeWorks[0].classList.remove("work-list-active");

    event.currentTarget.classList.toggle("work-list-active");
    setSelectedWork(workClass)
  }

  return (
    <div className='work-container'>
      <div className='work-list'>
          <h4 className='work-list-active' onClick={(event) => changeSelectedWork(event, "vass")}>VASS</h4>
          <h4 onClick={(event) => changeSelectedWork(event, "helium")}>Helium</h4>
          <h4 onClick={(event) => changeSelectedWork(event, "jarabe-soft")}>Jarabe Soft</h4>
      </div>
      <div className='work-info-container'>
          <WorkInfo selectedWork={selectedWork}/>
      </div>
    </div>
  )
}
