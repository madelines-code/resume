import './App.css';
// import { createMedia } from "@artsy/fresnel";
import NavbarOld from './NavbarOld';
import Home from './Home';
import Footer from './Footer';
// import { HashLink as Link } from 'react-router-hash-link';
// // import { Icon } from 'semantic-ui-react';


function App() {

//   const AppMedia = createMedia({
//     breakpoints: {
//       mobile: 320,
//       tablet: 768,
//       computer: 992,
//       largeScreen: 1200,
//       widescreen: 1920
//     }
//   });
//   const mediaStyles = AppMedia.createMediaStyle();
//   const { Media, MediaContextProvider } = AppMedia;
  

//   const leftItems = [
//     {
//       as: Link, 
//       to:"/home#about",
//       name:'home',
//             // active:{activeItem === 'home'}
//             // onClick={this.handleItemClick}
//       style: {color: '#DBC8B6'},
//       className: 'navButton',
//       key: 'home',
//     },
//     {
//       as: Link, 
//       to:"/home#devprojects",
//       name:'devprojects',
//       // active:{activeItem === 'home'}
//       // onClick={this.handleItemClick}
//       style: {color: '#DBC8B6'},
//       className: 'navButton',
//       key: 'devprojects',
//     },
//     {
//       as: Link, 
//       to:"/home#portfolio",
//       name:'portfolio',
//       // active:{activeItem === 'home'}
//       // onClick={this.handleItemClick}
//       style: {color: '#DBC8B6'},
//       className: 'navButton',
//       key: 'portfolio',
//     },
//         {
//       as: Link, 
//       to:"/home#resume",
//       name:'resume',
//       // active:{activeItem === 'home'}
//       // onClick={this.handleItemClick}
//       style: {color: '#DBC8B6'},
//       className: 'navButton',
//       key: 'resume',
//     },
//   ];


  return (
    <>
    {/* <style>{mediaStyles}</style> */}
    {/* <MediaContextProvider> */}
    <div className="wholeSite" class='pushable'> 
    {/* <Navbar leftItems={leftItems}/> */}
    <NavbarOld/>
    <Home/>
    <Footer/>
    </div>
    {/* </MediaContextProvider> */}
</>
  );
}

export default App;