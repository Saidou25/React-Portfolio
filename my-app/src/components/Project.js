import React from 'react';
// import '../../styles.css/Portfolio.css'

// import logo from '../../images/logo.png';
// import seo from '../../images/seoFour.png';
// import weather from '../../images/weatherFour.png';
// import sofa from '../../images/sofa.png';
// import team from '../../images/teamfour.png';
// import employee from '../../images/employee.png';
// import print from '../../images/searchfour.png';


function Project({projects}) {
  
  return (
    
    <div>
      <ul className='row display'>
        {projects.map((project) => (
          <li className='col-6 list-group-item' key={project.id}>
            {`${project.title} ${project.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Project;