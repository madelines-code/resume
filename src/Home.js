import React, {useEffect} from 'react';
import ResumeSlider from './ResumeSlider';
import Portfolio from './Portfolio';
// import DevProjects from './DevProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

const Home = () => {
  useEffect(()=> {
    AOS.init({duration: 3000});
  }, []);

  return (

  <div className='homepage'>
    <div data-aos="fade" className='homeHeader' id='about'>
        <h1 className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1em', fontSize: '6vh', margin: '0px'}}>Madeline Armstrong</h1>
        <h3 className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1em', fontSize: '3vh', margin: '8px 0px 0px 0px'}} >Full-Stack Developer</h3>
        <div className= 'homeHeaderP'>
        <p className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1.3em', fontSize: '1.2em', paddingTop: '8px'}}>Seeking to create more efficient, simply designed, and aesthetically peaceful tools.
        </p>
        </div>
        <a href = "mailto: armstrong.madeline@gmail.com" target="_blank" rel="noreferrer"><button className='contactButton' >Email Me</button></a>
        </div>
      
      {/* <div data-aos="fade" className='devProjects' id='devprojects'>
      <h2 style={{fontFamily: 'Urbanist', fontSize: '4vh', margin: '30px 0px 30px 0px', color: 'rgba(55, 104, 129, 0.8)'}}>Development Projects</h2>
      <div className='devProjectsBoxes' style={{minWidth: '350px'}}>
         {/* <DevProjects/> */}
         {/* <Portfolio/> */}
        {/* </div> */}
      {/* </div> */} 
  
    <div data-aos="fade" className='designPortfolioContainer' id='portfolio'>
      <h2 style={{fontFamily: 'Urbanist', fontSize: '4vh', padding: '40px 0px 40px 0px'}}>Design Portfolio</h2>
      <Portfolio/>
    </div>
    <div className='resumeContainer' id='resume'>
      <ResumeSlider/>
      </div>
      <Footer/>
    </div>

  )
}


export default Home;