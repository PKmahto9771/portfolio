import React, { Component } from 'react';
import classes from './About.module.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>PRAN KISHOR MAHTO</b>. I am a passionate developer having experience in{' '}
            <b>Frontend</b> development complemented by backend expertise. I am much interested in developing new things
            which excite me a lot. :)
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of
            latest trends. I try to leave every line of code I write more readable, accessible, and
            modular. My problem-solving mindset and active GitHub profile showcase my commitment to
            innovative and collaborative coding.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
