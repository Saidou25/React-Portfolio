import React from 'react';
// import '../../styles.css/Portfolio.css'

function Project({ projects }) {

  return (

    <div>
      <ul className='row display'>
        {projects.map((project) => (
          <li className='col-6 list-group-item' key={project.id}>
            {`${project.title} ${project.name}`}
            <img className='image' src='images/robot01.png' alt={project.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Project;