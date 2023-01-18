import { React } from 'react'
import gitHubLogo from '../resources/github.png'
import gmailLogo from '../resources/gmail.png'
import linkedinLogo from '../resources/linkedin.png'

export default function InfoBar() {

  return (
    <div className='info-bar'>
      <div className='info-bar-container'>
        <div className='info-bar-logos'>
         <a target="_blank" rel="noopener noreferrer" href="https://github.com/franciscomedinaag">
            <img className='info-bar-logo' src={gitHubLogo} alt="" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:franciscomedinaag@gmail.com">
            <img className='info-bar-logo' src={gmailLogo} alt="" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/franciscomedinaag">
            <img className='info-bar-logo' src={linkedinLogo} alt="" />
          </a>
        </div>
        <span className='info-bar-sign'> ©/2023 franciscomedina.mx </span>
      </div>
    </div>
  )
}
