
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
        <div>
          <img className={classes.image} src={Hello} alt='myImage' />
          <div className={classes.h1}>
            I'm Pran Kishor
            <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }} // Define the scale values for the bouncing effect
              transition={{ duration: 3.3, repeat: Infinity }} // Set the duration and repeat
              whileHover={{
                scale: 1.1
              }}
            >
              <a
                href='https://drive.google.com/file/d/18Q3AgJzfHVrBSz0Vvvv_scHDVC5seb9J/view?usp=sharing'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </motion.h1>
          </div>
        </div>
  );
}
