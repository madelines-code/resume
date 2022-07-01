import './App.css';
import NavbarOld from './NavbarOld';
import Sidebar from './Sidebar';
import Home from './Home';
import useWindowSize from './useWindowSize';
import SlideBars from "./SlideBars";
import { useState } from "react";


function App() {
  const size = useWindowSize();
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () =>
  {
    setToggle(!toggle);
  }


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