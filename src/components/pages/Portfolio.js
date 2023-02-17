import React from 'react';
import Project from '../Project';
import seoRefactor from '../../assets/images/seoFour.png';
import weatherDashboard from '../../assets/images/weatherFour.png';
import team from '../../assets/images/teamfour.png';
import autumn from '../../assets/images/DSC09412.jpeg';
import employee from '../../assets/images/employee.png';
import print from '../../assets/images/searchfour.png';
import logo from '../../assets/images/logo.png';

const projects = [
        {
                id: 1,
                title: 'seo-refactor',
                name: 'Seo',
                image: seoRefactor,
                logo: logo,
        },
        {
                id: 2,
                title: 'Weather-Dashboard',
                name: 'Weather',
                image: weatherDashboard,
                logo: logo,

        },
        {
                id: 3,
                title: 'Team',
                name: 'Team',
                image: team,
                logo: logo,
        },
        {
                id: 4,
                title: 'Autumn-in-Catalochee-Valley',
                name: 'Autumn',
                image: autumn,
                logo: logo,
        },
        {
                id: 5,
                title: 'Tracker',
                name: 'Emplohee',
                image: employee,
                logo: logo,
        },
        {
                id: 6,
                title: 'Print-or-Film',
                name: 'Print',
                image: print,
                logo: logo,

        },
];
console.log(projects);

function Portfolio() {
        return (
                <div>
                        <Project projects={projects} />
                </div>
        );
}

export default Portfolio;
