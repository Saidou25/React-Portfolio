import React from 'react';
import Project from '../Project';
import seoRefactor from '../../assets/images/seoFour.png';
import weatherDashboard from '../../assets/images/screenshot.png';
import password from '../../assets/images/Gp.png';
import autumn from '../../assets/images/DSC09412.jpeg';
import NoteTaker from '../../assets/images/note.3.png';
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
                name: 'weather',
                image: weatherDashboard,
                logo: logo,

        },
        {
                id: 3,
                title: 'Password-Generator',
                name: 'Password',
                image: password,
                logo: logo,
        },
        {
                id: 4,
                title: 'Autumn-in-Catalochee-Valley.',
                name: 'Autumn',
                image: autumn,
                logo: logo,
        },
        {
                id: 5,
                title: 'Note-Taker-',
                name: 'Employee',
                image: NoteTaker,
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
