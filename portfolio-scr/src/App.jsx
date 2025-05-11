import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'

import projects from '../data/projects.json'

function App() {
  
  return (
    <>
      <Header />

      <div className="my-info">
        <h1 className='my-name'>Victor Zozulia</h1>
        <h2>projects</h2>
      </div>
      
      <div className="projects-container">
        {
          projects.map(project => (
            <ProjectCard 
              name={project.name}
              dateSpan={project.dateSpan} 
              githubLink={project.githubLink} 
              tags = {project.tags}
              description={project.description} 
            />
          ))
        }
      </div>
      
      <Footer />
    </>
  )
}

export default App
