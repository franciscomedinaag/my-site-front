import React from 'react'
import avatarLogo from '../../resources/avatar.png'

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-info'>
        <img className='avatar-logo' src={avatarLogo} alt="" />
        <div className='avatar-data' >
          <h1> José Francisco Medina Aguayo </h1>
          <h2> Fullstack Developer </h2>
        </div>
      </div>
      <div className='about-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. <br></br> <br></br>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}
