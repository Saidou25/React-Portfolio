import React from 'react';
    
import seo from 'my-app/src/images/seo.jpg';
import weather from 'my-app/src/images/weather.png';
import sofa from 'my-app/src/images/sofa.png';
import team from 'my-app/src/images/team.png';
import print from 'my-app/src/images/print.png';
import employee from 'my-app/src/images/employee.png';

function Project() {
  
  return (
    <ul className="list-group">
    
      <li className="list-group-item">
        <img
          alt='seo'
          className="img-fluid"
          src={`require(${seo})`}
          />
      </li>
       <li className="list-group-item">
        <img
          alt='weather'
          className="img-fluid"
          src={`require(${weather})`}
    
          />
      </li>
      <li className="list-group-item">
        <img
          alt='sofa'
          className="img-fluid"
          src={`require(${sofa})`}

          />
      </li>
      <li className="list-group-item">
        <img
          alt='print'
          className="img-fluid"
          src={`require(${print})`}
       
          />
      </li>
      <li className="list-group-item">
        <img
          alt='team'
          className="img-fluid"
          src={`require(${team})`}
         
          />
      </li>
      <li className="list-group-item">
        <img
          alt='employee'
          className="employee"
          src={`require(${employee})`}
       
        />
      </li>
    
  </ul>
  );
};
export default Project;