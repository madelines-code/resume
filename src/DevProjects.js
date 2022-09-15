
    const DevProjects = () => {
      return (
    
    <div className='devProjectsBoxes' style={{minWidth: '350px'}}>
          <div className='devProjectsContainer'>
          <div className='imageContainer'>
            <img className='projectImage' alt='PSA10 screenshot' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1649618355/PSA_Image_sffsz4.png'  style={{border: '1px solid lightgray'}}/>
            <a href=" https://psa-10.herokuapp.com/" target="_blank" rel="noreferrer"><div className='overlay'><button className='devButton'>Visit Website</button></div></a>
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
          <img className='projectImage' alt='Park Hop screenshot' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1646754304/Park_Hop.png.png'  style={{border: '1px solid lightgray'}}/>
          <a href="https://park-hop.herokuapp.com/" target="_blank" rel="noreferrer"><div className='overlay'><button className='devButton'>Visit Website</button></div></a>
        </div>
        <div className='textArea'>
          <h4>Park Hop</h4>
          <p>This web application, being built (work in progress) for the Greenville County Parks & Rec Dept., brings a summer-long scavenger hunt online in an easy to use format. </p>
          <p><strong>Tools:</strong> REACT, SQL, Ruby on Rails, Javasript, CSS, HTML, Trello, Figma, Github, Semantic UI, & VS Code.</p>
          <p><strong>Responsible for: </strong> entire application</p>
        </div>
        </div>
      </div>
        )
      }
      
      export default DevProjects;