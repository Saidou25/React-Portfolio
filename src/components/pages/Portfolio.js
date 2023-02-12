import React from 'react';
import Project from '../Project';

const projects = [
        {
                id: 1,
                title: 'seo',
                image: "images/seoFour.png",
                logo: "images/logo.png,"
        },
        {
                id: 2,
                title: 'weather',
                image: 'images/weatherFour.png',
                logo: "images/logo.png,"

        },
        {
                id: 3,
                title: 'team',
                image: "images/teamfour.png",
                logo: "images/logo.png,"
        },
        {
                id: 4,
                title: 'fa',
                image: "images/sofa.png",
                logo: "images/logo.png,"
        },
        {
                id: 5,
                title: 'so',
                image: "images/seoFour.png",
                logo: "images/logo.png,"
        },
        {
                id: 6,
                title: 'weather',
                image: 'images/weatherFour.png',
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
