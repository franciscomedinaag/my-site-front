import { React, useState } from 'react'
import WorkInfo from './WorkInfo';

export default function Work() {
  const [selectedWork, setSelectedWork] = useState("vass");

  const changeSelectedWork = (workClass) => {
    console.log(workClass)
    setSelectedWork(workClass)
  }

  return (
    <div className='work-container'>
      <div className='work-list'>
          <h4 onClick={() => changeSelectedWork("vass")}>VASS</h4>
          <h4 onClick={() => changeSelectedWork("helium")}>Helium</h4>
          <h4 onClick={() => changeSelectedWork("jarabe-soft")}>Jarabe Soft</h4>
      </div>
      <div className='work-info-container'>
          <WorkInfo selectedWork={selectedWork}/>
      </div>
    </div>
  )
}
