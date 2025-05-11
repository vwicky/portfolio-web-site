import React from 'react'
import "./ProjectCard.css"

function ProjectCard({name, dateSpan, githubLink, description}) {
  return (
    <div className='project-card'>
      <h2 className='title'>{name}</h2>
          <h3 className='date-span'>from: {dateSpan.from} to {dateSpan.to}</h3>
          <h3 className='github-link'>github: {githubLink}</h3>
          <h3 className='summary-title'>Summary</h3>
          <p className='summary-text'>{description}</p>
    </div>
  )
}

export default ProjectCard
