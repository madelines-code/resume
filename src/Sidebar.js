import React, { useState } from "react";
import { Icon} from 'semantic-ui-react'
import { SlideBars } from './SlideBars'
import { HashLink as Link} from 'react-router-hash-link';
import { IconContext } from "react-icons";


const Sidebar = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    


  return (
    <>
    <IconContext.Provider>
    <div className="navbar" >
    <Link to='#' className='menuBars'>
    <Icon className='menuBars' style={{color: '#DBC8B6'}} enabled name='bars' size='medium' onClick={showSidebar}/>
    </Link>
    </div>
<nav className={sidebar ? 'navMenu active' : 'navMenu'} style={{padding: '0'}}>
  <ul className='navMenuItems' onClick={showSidebar}>
    <li className='navbarToggle'>
    <Link to="#" className='menuBars'>
    <Icon className='navButton' style={{color: '#DBC8B6'}} enabled name='window close' size='medium' onClick={props.onToggleMenu}/>
    </Link>
    </li>
    {SlideBars.map((item, index) => {
      return (
        <li key={index} className={item.cName}>
          <Link style={{color: '#DBC8B6'}}to={item.path}>{item.icon}<span>{item.title}</span></Link>
          </li>
      )
    })}
  </ul>
</nav>
</IconContext.Provider>
      </>    
  );
}

export default Sidebar;