import React, { useRef } from 'react';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { Button, Card, Image } from 'semantic-ui-react';
import ResumeSlider from './ResumeSlider';


const Home = () => {

  return (
<>
  <div className='homepage'>
    <div className='homeHeader'>
        <h1  i>Madeline Armstrong</h1>
        <h3  >Full-Stack Developer</h3>
        <h4  >Oh, the possibilities</h4>
        <p>Breaking into tech is my way of changing the landscape of life. 
        More efficient, simply designed, and aestetically peaceful tools will exist because
        of me.</p>
        <p>In 11 weeks, I have learned to build web applications using a full stack of technology.
        I can only imagine what I'll do with next 11 years, and who will join me.
        </p>
        </div>
      
      <div className='devProjects'>
      <h2 >Development Projects</h2>
      <div className='devProjectsBoxes'>
          <div className='devProjectsContainer'>
            <div className='imageContainer'>
              <img className='projectImage' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1646590281/PSA_Image_lcygha.png'  style={{border: '1px solid lightgray'}}/>
              <div className='overlay'><button>Visit Website</button></div>
            </div>
        
            <h4>PSA-10</h4>
              <p>A place where collectors can meet and showcase their physical collections digitally. </p>
              <p><strong>Tools:</strong> REACT, SQL, Ruby on Rails, Javasript, CSS, HTML, Trello, Figma, Github, Material UI, & VS Code.</p>
              <p><strong>Responsible for: </strong> showcases, overview and update sections and CSS throughout</p>
              
          </div>
            <div className='devProjectsContainer' >
              <div className='imageContainer'>
              <img className='projectImage' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1646590281/PSA_Image_lcygha.png'  style={{border: '1px solid lightgray'}}/>
              <div className='overlay'><button>Visit Website</button></div>
              </div>
                <h4>Park Hop</h4>
                <p>
                This web application, built for the Greenville County Parks & Rec Dept., brings a summer-long scavenger hunt online in an easy to use format.
                </p>
                <p><strong>Tools:</strong> REACT, SQL, Ruby on Rails, Javasript, CSS, HTML, Trello, Figma, Github, Semantic UI, & VS Code.</p>
                <p><strong>Responsible for: </strong> entire application</p>
            </div>
        </div>
      </div>
  
    <div>
      <h2>Design Portfolio</h2>
    </div>
   
      <ResumeSlider/>
 
    </div>
</>

  )
}


export default Home;