import React, { useRef } from 'react';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { Button, Card, Image } from 'semantic-ui-react';


const Home = () => {

  return (
    <Parallax pages={3} style={{ top: '0', left: '0', backgroundColor: '#805E73'}}>
      {/* <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: '0.1', color: '#GBC8B6' }}> */}
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#DBC8B6'}}>
      <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ width: "50%", marginLeft: "20%" }}
            />
              </ParallaxLayer> */}
        
        
  <ParallaxLayer
    offset={0}
    speed={1}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#DBC8B6', backgroundImage: 'url("https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")', backgroundSize: 'cover'}}>
  </ParallaxLayer>
  <ParallaxLayer
    offset={0}
    speed={1}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#DBC8B6'}}>
  
  <div>
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
      </ParallaxLayer>
      {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} /> */}
      <ParallaxLayer
        offset={.99}
        speed={2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#305E74',
          backgroundColor: '#DBC8B6'
        }}>
      <div>
      <h2 >Development Projects</h2>
      <div className='devProjectsContainer'>
        <Card className='devProjects' style={{padding: '20px', margin: '20px', minWidth: '400px', }}>
       <div className='imageContainer'>
        <img className='projectImage' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1646590281/PSA_Image_lcygha.png'  style={{border: '1px solid lightgray'}}/>
        <div className='overlay'><Button>Visit Website</Button></div>
        </div>
        <Card.Content>
        <Card.Header>PSA-10</Card.Header>
          <p>A place where collectors can meet and showcase their physical collections digitally. </p>
          <p><strong>Tools:</strong> REACT, SQL, Ruby on Rails, Javasript, CSS, HTML, Trello, Figma, Github, Material UI, & VS Code.</p>
          <p><strong>Responsible for: </strong> showcases, overview and update sections and CSS throughout</p>
          </Card.Content>
        </Card>
        <Card className='devProjects' style={{padding: '20px', margin: '20px', minWidth: '400px'}}>
        <Image src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1646590281/PSA_Image_lcygha.png' wrapped ui={false} />
          <h4>Park Hop</h4>
          <Card.Description>
          This web application, built for the Greenville County Parks & Rec Dept., brings a summer-long scavenger hunt online in an easy to use format.
          </Card.Description>
          <Card.Description><strong>Tools:</strong> REACT, SQL, Ruby on Rails, Javasript, CSS, HTML, Trello, Figma, Github, Semantic UI, & VS Code.</Card.Description>
          <p><strong>Responsible for: </strong> entire application</p>
        </Card>
      </div>
      </div>
  </ParallaxLayer>
  
  {/* <ParallaxLayer offset={1.9} speed={2} style={{ backgroundColor: '#DBC8B6' }} /> */}
  
  
  
  <ParallaxLayer
    offset={1}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#805E73' }}>
      <div>
    <h2>Design Portfolio</h2>
    </div>
  </ParallaxLayer>
</Parallax>

  )
}


export default Home;