import React from 'react';
import '../../styles.css/Portfolio.css'

import logo from '../../images/logo.png';
import seo from '../../images/seoFour.png';
import weather from '../../images/weatherFour.png';
import sofa from '../../images/sofa.png';
import team from '../../images/teamfour.png';
import print from '../../images/searchfour.png';
import employee from '../../images/employee.png';

function Project() {

  return (

    <div className='body'>

      <div className='row card'>
        <div className='col-6 card'>
          <img
            alt='seo'
            className="img-fluid"
            src={seo}
          />
          <div className="top-left">
            <a href="https://saidou25.github.io/seo-refactor/">
              <h3>SEO Refactor</h3>
            </a>
            <a href="https://github.com/Saidou25/seo-refactor">
              <img src={logo} alt="minicat"></img>
            </a>
          </div>
        </div>
      </div>

      <div className='col-6 card'>
        <img
          alt='weather'
          className="img-fluid"
          src={weather}
        />
        <div className="top-left">
          <a href='https://saidou25.github.io/Weather-Dashboard/'>
            <h3>Weather Dashboard</h3>
          </a>

          <a href="https://github.com/Saidou25/Weather-Dashboard">
            <img src={logo} alt="minicat"></img>
          </a>
        </div>
      </div>

      <div className='container'>
        <img
          alt='sofa'
          className="img-fluid"
          src={sofa}
        />
        <div className="top-left">
          <h3>Sofa King Cool</h3>
          <a href="https://github.com/kassrojas/sofa-king-cool">
            <img src={logo} alt="minicat"></img>
          </a>
        </div>
      </div>

      <div className='container'>
        <img
          alt='print'
          className="img-fluid"
          src={print}
        />
        <div className="top-left">
          <a href='https://saidou25.github.io/Print-or-Film/'>
            <h3>Print or Film</h3>
          </a>

          <a href="https://github.com/Saidou25/Print-or-Film">
            <img src={logo} alt="minicat"></img>
          </a>
        </div>
      </div>

      <div className='container'>
        <img
          alt='team'
          className="img-fluid"
          src={team}
        />
        <div className="top-left">
          <a href='https://saidou25.github.io/Team/'>
            <h3>Team Generator</h3>
          </a>

          <a href="https://github.com/Saidou25/Team">
            <img src={logo} alt="minicat"></img>
          </a>
        </div>
      </div>

      <div className='container'>
        <img
          alt='employee'
          className="employee"
          src={employee}
        />
        <div className="top-left">
          <a href='https://saidou25.github.io/Employee--Tracker/'>
            <h3>Employee Tracker</h3>
          </a>
          <a href="https://github.com/Saidou25/Employee--Tracker">
            <img src={logo} alt="minicat"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;