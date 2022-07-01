import './App.css';
import NavbarOld from './NavbarOld';
import Sidebar from './Sidebar';
import Home from './Home';
import useWindowSize from './useWindowSize';
import { useState } from "react";


function App() {
  const size = useWindowSize();

  return (

    <div >
      {size.width > 700 && 
      <NavbarOld/>}
      {size.width < 700 && 
        <Sidebar/>}
        <Home/>
    </div>

  );
}

export default App;