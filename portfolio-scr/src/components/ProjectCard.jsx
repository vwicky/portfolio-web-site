import React from 'react'
import "./ProjectCard.css"

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function ProjectCard({name, dateSpan, githubLink, tags, description}) {
  const colors = [
    "#A4B465", "#73946B", "#BE5B50", "#C95792",
    
  ] 
  
  return (
    <div className='project-card'>
      <h2 className='title'>{name}</h2>
      <h3 className='date-span'>from: {dateSpan.from} to {dateSpan.to}</h3>
      <h3 className='github-link'>github: <a href={githubLink}><i>{githubLink}</i></a></h3>

      <div className='tags-container'>
        {
          tags.map(tag => (
            <p className='tag-container' style={{ backgroundColor: colors.random() }}>{tag}</p>
          ))
        }
      </div>

      <h3 className='summary-title'>Summary</h3>
      <p className='summary-text'>{description}</p>
    </div>
  )
}

export default ProjectCard
