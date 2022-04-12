import React, { useRef } from 'react';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { Button, Card, Image } from 'semantic-ui-react';
import ResumeSlider from './ResumeSlider';
import Portfolio from './Portfolio';


const Home = () => {

  return (
<>
  <div className='homepage'>
    <div className='homeHeader'>
        <h1 className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1em', fontSize: '6vh', margin: '0px'}}>Madeline Armstrong</h1>
        <h3 style={{fontFamily: 'Urbanist', lineHeight: '1vh', fontSize: '3vh', margin: '20px 0px 0px 0px'}} >Full-Stack Developer</h3>
        <h4 style={{fontFamily: 'Urbanist', lineHeight: '1vh', fontSize: '4vh'}} >Oh, the possibilities</h4>
        <div className= 'homeHeaderP'>
        <p className='headerDesc' style={{fontFamily: 'Urbanist', lineHeight: '1.3em', fontSize: '2.5vh'}}>Breaking into tech is my way of changing the landscape of life. 
        More efficient, simply designed, and aestetically peaceful tools will exist because
        of me. In 11 weeks, I have learned to build web applications using full stack deveoplment.
        I look forward to seeing what I'll do with next 11 years, and who will join me.
        </p>
        </div>
        </div>
      
      <div className='devProjects'>
      <h2 style={{fontFamily: 'Urbanist', fontSize: '4vh', margin: '30px 0px 0px 0px'}}>Development Projects</h2>
      <div className='devProjectsBoxes' style={{minWidth: '250px'}}>
          <div className='devProjectsContainer'>
            <div className='imageContainer'>
              <img className='projectImage' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1649618355/PSA_Image_sffsz4.png'  style={{border: '1px solid lightgray'}}/>
              <div className='overlay'><button className='devButton'>Visit Website</button></div>
            </div>
            <div className='textArea'>
            <h4>PSA-10</h4>
              <p>A place where collectors can meet and showcase their physical collections digitally. </p>
              <p><strong>Tools:</strong> REACT, SQL, Ruby on Rails, Javasript, CSS, HTML, Trello, Figma, Github, Material UI, & VS Code.</p>
              <p><strong>Responsible for: </strong> showcases, overview and update sections and CSS throughout</p>
              </div>
          </div>

          <div className='devProjectsContainer'>
            <div className='imageContainer'>
              <img className='projectImage' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1646754304/Park_Hop.png.png'  style={{border: '1px solid lightgray'}}/>
              <div className='overlay'><button className='devButton'>Visit Website</button></div>
            </div>
            <div className='textArea'>
              <h4>Park Hop</h4>
              <p>This web application, being built for the Greenville County Parks & Rec Dept., brings a summer-long scavenger hunt online in an easy to use format. </p>
              <p><strong>Tools:</strong> REACT, SQL, Ruby on Rails, Javasript, CSS, HTML, Trello, Figma, Github, Semantic UI, & VS Code.</p>
              <p><strong>Responsible for: </strong> entire application</p>
            </div>
          </div>

  
        </div>
      </div>
  
    <div className='designPortfolioContainer'>
      <h2 style={{fontFamily: 'Urbanist', lineHeight: '3vh', fontSize: '4vh', padding: '40px 0px 0px 0px'}}>Design Portfolio</h2>
      <Portfolio/>
    </div>
    <div className='designPortfolioContainer'>
      
      <ResumeSlider/>
      </div>
      <div>
      <h2>Contact</h2>
      </div>
    </div>
</>

  )
}


export default Home;