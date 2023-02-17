import React from 'react';
import '../styles/Project.css';

function Project({ projects }) {

  return (

    <div>
        <h3 className='my-projects'>Projects</h3>
      <div className='container'>
        <div className='display'>
          {projects.map((project) => (
            <div className='effect' key={project.id}>
              <div className='card border-0'>
                <img className='image responsive' src={project.image} alt={project.title} />
                <div className="card-img-overlay" id="text">
                  <a href={`https://saidou25.github.io/${project.title}`} >
                    <h4 className="card-title">{project.title}</h4>
                  </a>
                  <a href="https://github.com/Saidou25/seo-refactor">
                    <img className='logo' id="text" src='images/logo.png' alt="minicat" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div >
  )
};


export default Project;