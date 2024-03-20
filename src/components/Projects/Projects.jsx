import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import chat from '../images/chat.png';
import monorepo from '../images/nike.png';
import weather from '../images/weather.png';
import flight from '../images/flight.png';
import github from '../images/github.png';

// Web projects
const webItem = [
  {
    link: 'https://weather-7.vercel.app/',
    title: 'Weather App',
    techStack: 'React JS, Tailwind CSS, Weather API',
    desc: 'provides information about temperature, wind speed and humidity in real time.',
    image: weather,
    color: '#cd7ddd',
    githubLink: 'https://github.com/PKmahto9771/Weather-App'
  },
  {
    link: 'https://nike-e-commerce1.vercel.app/',
    title: 'nike-e-commerce app',
    techStack: 'React',
    desc: 'It is a e-commerce app built in react.',
    image: monorepo,
    color: '#72d1d1',
    githubLink: 'https://github.com/PKmahto9771/Nike-E-Commerce'
  },
  {
    link: 'https://book-flights.vercel.app/',
    title: 'flight Booking',
    techStack: 'Reactjs, redux tailwindcss',
    desc: 'Frontend flight booking app',
    image: flight,
    color: '#a9def9',
    githubLink: 'https://github.com/PKmahto9771/flight-booking-app'
  },
  {
    link: 'https://mern-chat-app-p7zh.onrender.com/',
    title: 'Chat-App',
    techStack: 'MERN Stack, socket.io, TailwindCSS, Daisy UI, JWT, Zustand',
    desc: 'A chat application where users can create rooms and chat with each other.',
    image: chat,
    color: '#EEA47F',
    githubLink:
      'https://github.com/PKmahto9771/mern-chat-app'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              window.open(cardItem.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            <img src={github} className={classes.card__title__img} />
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
