const Portfolio = () => {

  return (
  <div className='devProjectsBoxes'>
    <div className='designImgContainer'>
        <img className='projectImage' alt='GG Ventures site screenshot' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1663262657/ggv-01_yhw1kl.png'  style={{border: '1px solid lightgray'}}/>
        <p></p>
        <p><strong>GG Ventures</strong><br/>Trust-inspiring, responsive design for a venture capital firm. <br/> 
        Built & maintained using Wordpress.
        </p>
        <a className='links' target="_blank" rel="noreferrer" href='https://amp-sys.com/'><strong>Visit Site</strong></a>
    </div>

    <div className='designImgContainer'>
        <img className='projectImage' alt='AMPS site screenshot' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1649774789/AMPSYS_h0pg2s.png'  style={{border: '1px solid lightgray'}}/>
        <p></p>
        <p><strong>AMPS</strong><br/>Clean, modern design for an energy-efficient generator company. <br/> 
        Built & maintained using Wordpress.
        </p>
        <a className='links' target="_blank" rel="noreferrer" href='https://amp-sys.com/'><strong>Visit Site</strong></a>
    </div>

    <div className='designImgContainer'>
        <img className='projectImage' alt='Livewell Site screenshot' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1649774792/Livewell_eghbst.png'  style={{border: '1px solid lightgray'}}/>
        <p></p>
        <p><strong>LiveWell Greenville</strong><br/>Simple and engaging design for a local non-profit organization.<br/> 
        Built & maintained using Wordpress.
        </p>
        <a className='links' target="_blank" rel="noreferrer" href='https://livewellgreenville.org/'><strong>Visit Site</strong></a>
    </div>

    <div className='designImgContainer'>
        <img className='projectImage' rel="noreferrer" alt='Rec site screenshot' src='https://res.cloudinary.com/dkkwdvec2/image/upload/v1649790853/Rec_feekav.png'  style={{border: '1px solid lightgray'}}/>
        <p></p>
        <p><strong>Greenville County Rec</strong><br/>Fun, playful design for a parks and recreation department.<br/> 
        Updated & maintained using Wordpress.
        </p>
        <a className='links' target="_blank" rel="noreferrer" href='https://greenvillerec.com/'><strong>Visit Site</strong></a>
    </div>
    
  </div>
  )
}

export default Portfolio;