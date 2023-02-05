import React from 'react';
import '../../styles.css/Portfolio.css'


import seo from '../../images/seo.jpg';
import weather from '../../images/weather.png';
import sofa from '../../images/sofa.png';
import team from '../../images/team.png';
import print from '../../images/print.png';
import employee from '../../images/employee.png';

function Project() {

  return (
    <ul className="list-group">

      <li className="list-group-item">
        <div className='container'>
          <img
            alt='seo'
            className="img-fluid"
            src={seo}
          />
          <div className="top-left">
          <a href="https://github.com/Saidou25/seo-refactor"><h3>SEO Refactor</h3></a>
            <h3>SEO Refactor</h3>
            </div>
        </div>
      </li>

      <li className="list-group-item">
        <div className='container'>
          <img
            alt='weather'
            className="img-fluid"
            src={weather}
          />
          <div className="top-left">
         <a href="https://github.com/Saidou25/Weather-Dashboard"><h3>Weather Dashboard</h3></a>
          </div>
        </div>
      </li>

      <li className="list-group-item">
        <div className='container'>
          <img
            alt='sofa'
            className="img-fluid"
            src={sofa}
          />
          <div className="top-left">
          <a href="https://github.com/kassrojas/sofa-king-cool"><h3>Sofa King Cool</h3></a>
          
          </div>
        </div>
      </li>

      <li className="list-group-item">
        <div className='container'>
          <img
            alt='print'
            className="img-fluid"
            src={print}
          />
          <div className="top-left">
          <a href="https://github.com/Saidou25/Print-or-Film"><h3>Print or Film</h3></a>
          
          </div>
        </div>
      </li>

      <li className="list-group-item">
        <div className='container'>
          <img
            alt='team'
            className="img-fluid"
            src={team}
          />
          <div className="top-left">
          <a href="https://github.com/Saidou25/Team"><h3>Team Generator</h3>></a>
          
          </div>
        </div>

      </li>
      <li className="list-group-item">
        <div className='container'>
          <img
            alt='employee'
            className="employee"
            src={employee}
          />
           <div className="top-left">
           <a href="https://github.com/Saidou25/Employee--Tracker"><h3>Employee Tracker</h3></a>
           
           </div>
        </div>
      </li>
    </ul>
  );
};
export default Project;