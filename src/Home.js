import React from 'react';
import ResumeSlider from './ResumeSlider';
import Portfolio from './Portfolio';
import DevProjects from './DevProjects';


const Home = () => {

  return (

  <div className='homepage'>
    <div className='homeHeader'>
        <h1 className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1em', fontSize: '6vh', margin: '0px'}}>Madeline Armstrong</h1>
        <h3 className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1em', fontSize: '3vh', margin: '5px 0px 0px 0px'}} >Full-Stack Developer</h3>
        <h4 className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1em', fontSize: '4vh', margin: '5px 0px 5px 0px'}} >Oh, the possibilities</h4>
        <div className= 'homeHeaderP'>
        <p className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1.3em', fontSize: '1.2em'}}>Breaking into tech is my way of changing the landscape of life. 
        More efficient, simply designed, and aestetically peaceful tools will exist because
        of me. In 11 weeks, I have learned to build web applications using full stack deveoplment.
        I look forward to seeing what I'll do with next 11 years, and who will join me.
        </p>
        </div>
        <a href = "mailto: armstrong.madeline@gmail.com" target="_blank" rel="noreferrer"><button className='contactButton' >Email Me</button></a>
        </div>
      
      <div className='devProjects' id='devprojects'>
      <h2 style={{fontFamily: 'Urbanist', fontSize: '4vh', margin: '30px 0px 0px 0px', color: 'rgba(55, 104, 129, 0.8)'}}>Development Projects</h2>
      <div className='devProjectsBoxes' style={{minWidth: '350px'}}>
         <DevProjects/>
        </div>
      </div>
  
    <div className='designPortfolioContainer' id='portfolio'>
      <h2 style={{fontFamily: 'Urbanist', fontSize: '4vh', padding: '40px 0px 20px 0px', margin: 'auto'}}>Design Portfolio</h2>
      <Portfolio/>
    </div>
    <div className='resumeContainer' id='resume'>
      <ResumeSlider/>
      </div>
    </div>

  )
}


export default Home;