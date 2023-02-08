import React from 'react';
import Project from '../Project';

const projects = [
{
        id: 1,
        title: 'p1',
        name: 'Alex',
},
{
        id: 2,
        title: 'p2',
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