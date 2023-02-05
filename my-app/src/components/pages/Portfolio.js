import React from 'react';

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
        <img
          alt='seo'
          className="img-fluid"
          src={seo}
        />
      </li>
      <li className="list-group-item">
        <img
          alt='weather'
          className="img-fluid"
          src={weather}

        />
      </li>
      <li className="list-group-item">
        <img
          alt='sofa'
          className="img-fluid"
          src={sofa}

        />
      </li>
      <li className="list-group-item">
        <img
          alt='print'
          className="img-fluid"
          src={print}

        />
      </li>
      <li className="list-group-item">
        <img
          alt='team'
          className="img-fluid"
          src={team}

        />
      </li>
      <li className="list-group-item">
        <img
          alt='employee'
          className="employee"
          src={employee}

        />
      </li>

    </ul>
  );
};
export default Project;