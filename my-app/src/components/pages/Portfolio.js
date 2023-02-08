import React from 'react';
import Project from '../Project';

const projects = [
{
    pro: {

        title: 'p1',
        name: 'Alex',

    },
},
{
    pro: {

        title: 'p2',
        name: 'Alex',

    }
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