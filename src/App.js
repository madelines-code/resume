import './App.css';
import NavbarOld from './NavbarOld';
import Sidebar from './Sidebar';
import Home from './Home';
import useWindowSize from './useWindowSize';
import {Helmet} from "react-helmet";
import code from './code-solid.svg'



function App() {
  const size = useWindowSize();

  return (

    <div >
       <Helmet>
         <meta charSet="utf-8" />
         <title>Madeline Armstrong</title>
         <link id="favicon" rel="icon" href={code} type="svg" />
       </Helmet>
      {size.width > 700 && 
      <NavbarOld/>}
      {size.width < 700 && 
        <Sidebar/>}
        <Home/>
    </div>

  );
}

export default App;