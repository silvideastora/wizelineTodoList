import React from 'react';
import logo from '../images/logo.png';

export default function LogoWizeline() {
    return (
        <div className= 'logo-container'>
        <img 
          src={logo} 
          className='wizeline-logo'
          alt="logo"
        />
      </div>
    )
}
