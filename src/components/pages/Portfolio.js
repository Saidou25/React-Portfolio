import React from 'react';
import Project from '../Project';

const projects = [
        {
                id: 1,
                title: 'seo-refactor',
                image: "images/seoFour.png",
                logo: "images/logo.png,"
        },
        {
                id: 2,
                title: 'Weather-Dashboard',
                image: 'images/weatherFour.png',
                logo: "images/logo.png,"

        },
        {
                id: 3,
                title: 'Team',
                image: "images/teamfour.png",
                logo: "images/logo.png,"
        },
        {
                id: 4,
                title: 'Autumn-in-Catalochee-Valley.',
                image: "images/DSC09412.jpeg",
                logo: "images/logo.png,"
        },
        {
                id: 5,
                title: 'Employee--Tracker',
                image: "images/seoFour.png",
                logo: "images/logo.png,"
        },
        {
                id: 6,
                title: 'Print-or-Film',
                image: 'images/searchFour.png',
                logo: "images/logo.png,"

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
