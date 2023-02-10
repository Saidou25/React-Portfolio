import React from 'react';
import '../styles.css/Project.css'

function Project({ projects }) {

  return (

    <div>
      <h3 className='my-projects'>Projects</h3>
      <div className='container'>
        <div className='row display'>
          {projects.map((project) => (
            <div className='col-6' id='effect' flex m-8 key={project.id}>
              <div className='card flex'>
                <img className='image' src={project.image} alt={project.title} />
                <div class="card-img-overlay" id="text">
                  <a href="https://saidou25.github.io/seo-refactor/">
                    <h3 class="card-title">{project.title}</h3>
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