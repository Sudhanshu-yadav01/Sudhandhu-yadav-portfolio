import React from 'react'
import Dock from '../Reactbits/Dock/Dock.jsx';


import { VscHome } from 'react-icons/vsc';   

import { VscSettingsGear } from 'react-icons/vsc';   
import { VscCallIncoming } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";


const App = () => {
  const items = [
    { icon: <VscHome size={28} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <CiLinkedin size={28} />, label: 'LinkedIn', onClick: () => alert('Archive!') },
    { icon: <VscCallIncoming size={28} />, label: 'Contact', onClick: () => alert('Profile!') },
    { icon: <MdWorkOutline size={28} />, label: 'Projects', onClick: () => alert('Settings!') },
  ];

  return (
    <div className='z-10 w-full fixed bottom-0 flex items-center justify-center'>
      <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
    </div>
  )
}

export default App