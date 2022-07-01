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
          <Link style={{color: '#DBC8B6'}} to={item.path}>{item.icon}<span className='icon'>{item.title}</span></Link>
          </li>
      )
    })}
    <li className='navText' >
    <a style={{color:'#DBC8B6'}} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/madelinea/'>
        <Icon class='link' enabled name='linkedin' size='large'/></a>
    </li>
    <li className='navText' >
    <a style={{color:'#DBC8B6'}} target="_blank" rel="noreferrer" href='https://github.com/madelines-code'>
         <Icon class='link' enabled name='github' size='large' /></a>
    </li>
  </ul>
</nav>
</IconContext.Provider>
      </>    
  );
}

export default Sidebar;