import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Home = () => {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}>
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
    <h2>Madeline Armstrong</h2>
    <h3>Full-Stack Developer</h3>
    <h4>Oh, the possibilities</h4>
    </div>
  </ParallaxLayer>
  

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      
    }}>
      <div>
        <h3>DEVPOINT LABS</h3>
        <h3>Full-Time Student</h3>
        <h3>NOV 2021 - FEB 2022</h3>
        <h3>Salt Lake City, UT</h3>
        <ul>
          <li>
          Built CRUD websites using Ruby on Rails and React. 
          </li>
          <li>
          Designed UI/UX optimized websites and apps using wireframes, data maps, Ruby, Javascrpt, JQuery, HTML, CSS, Semantic UI and Material UI. 
          </li>
          <li>
          Interacted with databases using SQL. 
          </li>
          <li>Built web applications on teams using Agile workflow.</li>
        </ul>
      </div>
  </ParallaxLayer>
</Parallax>
    // <div>
    //   <h2>
    //     Madeline Armstrong
    //   </h2>
    //   <h3>Full-Stack Developer</h3>
    //   <h4>Oh, the possibilities</h4>
    //   <p>Breaking into tech is my way of changing the landscape of life. 
    //     More efficient, simply designed, and aestetically peaceful tools will exist because
    //      of me.</p>
    //      <p>In 11 weeks, I have learned to build web applications using a full stack of technology.
    //        I can only imagine what I'll do with next 11 years, and who will join me.
    //      </p>
    // </div>
  )
}

export default Home;