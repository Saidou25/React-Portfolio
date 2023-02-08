import React from 'react';
import Project from '../Project';

const projects = [
{
        id: 1,
        title: 'seo',
        name: 'Alex',
},
{
        id: 2,
        title: 'weather',
        name: 'Alex',
},
{
        id: 3,
        title: 'team',
        name: 'Alex',
},
{
        id: 4,
        title: 'sofa',
        name: 'Alex',
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