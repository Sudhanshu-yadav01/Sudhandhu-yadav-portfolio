import React from 'react';
import Dock from '../Reactbits/Dock/Dock.jsx';

import { VscHome } from 'react-icons/vsc';   
import { VscSettingsGear, VscCallIncoming } from 'react-icons/vsc';
import { MdWorkOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

import Navmenu from './Navmenu.jsx';
import Homepage from './Homepage.jsx';
import Skills from './Skills.jsx';
import Projectscard from './Projectscard.jsx';
import Contact from './Contact.jsx';
import Threads from '../Reactbits/Threads/Threads.jsx';

const App = () => {
  const items = [
    {
      icon: <VscHome size={28} />,
      label: 'Home',
      onClick: () => {
        const element = document.getElementById('home');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <CiLinkedin size={28} />,
      label: 'LinkedIn',
      onClick: () =>
    window.open(
      "https://www.linkedin.com/in/sudhanshu-yadav-015167290/",
      "_blank",
      "noopener,noreferrer"
    )
    },
    {
      icon: <VscCallIncoming size={28} />,
      label: 'Contact',
      onClick: () => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <MdWorkOutline size={28} />,
      label: 'Projects',
      onClick: () => {
        const element = document.getElementById('projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  return (
    <div className="relative">
      {/* Background Threads Layer */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Main App Content */}
      <div className="relative z-10">
        <Navmenu /> 
        <Homepage /> 

        {/* Dock */}
        <div className="z-20 w-full fixed bottom-0 flex items-center justify-center">
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>

        <Skills /> 
        <Projectscard />
        <Contact /> 
      </div>
    </div>
  );
};

export default App;
