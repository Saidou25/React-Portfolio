import React from 'react';
import Project from '../Project';
import seoRefactor from '../../assets/images/seoFour.png';
import weatherDashboard from '../../assets/images/weather.png';
import password from '../../assets/images/newpassword.png';
import team from '../../assets/images/myteam.png';
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
                title: 'Team',
                name: 'My Team',
                image: team,
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


function Portfolio() {
        return (
                <div>
                        <Project projects={projects} />
                </div>
        );
}

export default Portfolio;
