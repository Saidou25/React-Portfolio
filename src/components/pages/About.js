import React from 'react';
import "../../styles/About.css"
function About() {

  return (
    <div className='about'>
      <h3 className='title'>About Me</h3>
      <div className='row'>
        <div className='col-5'>
          <img src='images/robot01.png' className="responsive flex" alt="robot icon"></img>
        </div>
        <div className='col-7'>
          <p className='story'>

            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
            dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
            sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
            libero. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
            lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.

          </p>
        </div>
      </div>
    </div>
  );
};
export default About;