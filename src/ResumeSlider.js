import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'
import Arrowbullets from './bullets.svg'

const ResumeSlider = () => {
  const [id, setId] = useState(1)
  const [dotClass, setDotClass] = useState('dot1')

  const pastJobs = [
    {
      id: 1,
      title: "Full-Time Student",
      company: "DEVPOINT LABS",
      dates: "NOV 2021 - FEB 2022",
      location: "Salt Lake City, UT",
      description: ["Built CRUD websites using Ruby on Rails and React.", "Designed UI/UX optimized websites and apps using wireframes, data maps, Ruby, Javascrpt, JQuery, HTML, CSS, Semantic UI and Material UI.", "Interacted with databases using SQL.", "Built web applications on teams using Agile workflow."]
  },
  {
    id: 2,
    title: "Self-Employed",
    company: "FREELANCE MARKETING",
    dates: "MAY 2021 - CURRENT",
    location: "Various Locations",
    description: ["Designs logos and graphics for local government agencies and businesses.", "Produces websites for private organizations using Wordpress."]
  },
  {
    id: 3,
    title: "Marketing & Social Media Coordinator",
    company: "COUNTY OF GREENVILLE",
    dates: "AUG 2014 - MAY 2021",
    location: "Greenville, SC",
    description: ["Planned and executed communication strategy and brand identity for the most populous county in South Carolina, Greenville County.", "Produces websites for private organizations using Wordpress.", "Maintained websites for Greenville County Rec and Animal Care (approx. 180K monthly visitors).", 
  "Produced content and managed social media accounts with more than 100K followers.", "Designed and wrote content for digital and print graphics, newsletters, emails (42K subscribers) and blogs for the general public and stakeholders."]
  },
  {
    id: 4,
    title: "Development Coordinator",
    company: "AMERICAN RED CROSS",
    dates: "OCT 2013 - AUG 2014",
    location: "Greenville, SC",
    description: ["Maintained Salesforce database for Upstate South Carolina fundraisers.", "Designed marketing materials and newsletter for fundraising team.", 
  "Managed social media, updated website and coordinated fundraising events that met with national brand standards."]
  },
]

const renderSlider = (id) => {
  const renderDescription = (description) => {
    return description.map((b)=>{
      return(
      <div className='bulletPoint'><Image src={Arrowbullets} style={{height: '10px', margin: '5px 10px 0px 0px'}}/><li key={b} style={{textAlign: 'left', lineHeight: '1.5rem', margin: '0px', listStyleType:'none', fontSize: '1.2rem'}}>{b}</li></div>)
    })
    }
  return pastJobs.map((j)=> {if (j.id === id) {
    return (
      <div className='jobsSlider' key={j.id}>
        <h3 className='jobBullets' style={{fontFamily: 'Urbanist', lineHeight: '1em', margin: '0px 0px 8px 0px', textAlign: 'left'}}>{j.company}, {j.title}</h3>
        <h4 className='jobBullets' style={{fontFamily: 'Urbanist', lineHeight: '1em', margin: '0px 0px 5px 0px', textAlign: 'left'}}>{j.dates}, {j.location}</h4>
        <div className='jobBullets'>
        {renderDescription(j.description)}
      </div>
      </div>
      )} else {
        return ("")
      }
  })
}

const activeClass = (id) => {
  setId(id)
  let dot = `dot${id}`
  setDotClass(dot)
}
console.log(dotClass)

// {`${dotClass='dot1' ? "jobDots active" : "jobDots"}`}

return (
  <div className='resume'>
  <div >
    <h2 style={{fontFamily: 'Urbanist', lineHeight: '1px', margin: '40px'}}>Where I've Worked</h2>
    <div className='jobDotsBox'>
    <div className={dotClass === 'dot1' ? 'act jobDots' : 'jobDots'} onClick={()=>activeClass(1)}></div>
    <div className={dotClass === 'dot2' ? 'act jobDots' : 'jobDots'} onClick={()=>activeClass(2)}></div>
    <div className={dotClass === 'dot3' ? 'act jobDots' : 'jobDots'} onClick={()=>activeClass(3)}></div>
    <div className={dotClass === 'dot4' ? 'act jobDots' : 'jobDots'} onClick={()=>activeClass(4)}></div>
    </div>
  </div>
  {renderSlider(id)}
  </div>
)
}

export default ResumeSlider;
  