import React, { Component } from 'react';
import classes from './Education.module.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>August(2022)-April(2023)</span>
                      </h2>
                      <p>
                        I worked as a <b>Secretary, Alumni Affairs</b> at{' '}
                        <a target='_blank' href='https://wiki.metakgp.org/w/Rajendra_Prasad_Hall_of_Residence'>
                          <b>Rajendra Prasad Hall of Residence</b>
                        </a>{' '}
                        <i>
                          (Worked for hall of 900+ students, managing events 
                          related to alumni and also published a hall magazine 
                          containing various various inter-hall events and 
                          experiences of seniors)
                        </i>{' '}
                        and boosting my team skills
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Undergraduation at IIT Kharagpur <span>2021-present</span>
                      </h2>
                      <p>
                        I am current pursuing B.Tech in Civil Engineering
                        from <a href='https://www.iitkgp.ac.in/'> <b>IIT Kharagpur</b> </a> with CG 8.73.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Higher Education <span>2018-2020</span>
                      </h2>
                      <p>
                        I have completed my higher education from <a href='https://sxcrani.org/'> <b>SXC Ranchi</b> </a> with major subjects as
                        Physics,Chemistry & Maths with 86% merit in Jharkhand board.{' '}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
