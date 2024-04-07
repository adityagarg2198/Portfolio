import Chip from '../../Components/Chip/Chip.component';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';
import './Intro.css';

import { FC, useEffect, useState } from 'react';
import { Stack } from '@mui/material';

type AnimatedTextProps = {
  text: string;
};

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'spring',
      duration: 10,
      ease: 'linear',
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <p
      className={`${
        animationCompleted ? 'animation-completed' : ''
      } intro-para`}>
      <motion.span>{displayText}</motion.span>
    </p>
  );
};

const Intro = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          height: '100%',
        }}>
        <Stack height={'100%'} alignItems={'flex-start'}>
          <Chip text='Intro' />
          <h2 className='heading'>
            Building Bridges in the Digital World Aditya Garg (Software
            Developer)
          </h2>
          <AnimatedText
            text={`Hi, I'm Aditya Garg, a coding enthusiast fueled by a passion for
          tackling challenges with fresh perspectives, transforming ideas into
          reality. I'm constantly seeking new ways to push boundaries and build
          exceptional software experiences.`}></AnimatedText>
          <button className='download-cv'>
            Download
            <svg
              xmlns='http://www.w3.org/2000/svg'
              id='Layer_1'
              data-name='Layer 1'
              viewBox='0 0 24 24'>
              <path d='m23.018,8.785c-.596-.543-1.375-.812-2.169-.782-.804.038-1.544.387-2.085.981l-3.217,3.534c-.551-.909-1.551-1.519-2.689-1.519H3c-1.654,0-3,1.346-3,3v7c0,1.654,1.346,3,3,3h10.448l9.787-10.984c1.094-1.227.996-3.124-.218-4.23Zm-1.275,2.899l-9.19,10.315H3c-.552,0-1-.448-1-1v-7c0-.552.448-1,1-1h9.857c.63,0,1.143.513,1.143,1.143,0,.564-.421,1.051-.98,1.13l-5.161.737.283,1.98,5.161-.737c1.175-.168,2.129-.988,2.514-2.059l4.426-4.864c.182-.199.431-.316.7-.329.269-.02.528.081.728.263.408.371.44,1.009.072,1.421ZM6,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm0,6.5h-2v-.5c0-1.379,1.121-2.5,2.5-2.5h4c1.379,0,2.5,1.121,2.5,2.5v.5h-2v-.5c0-.275-.225-.5-.5-.5h-4c-.275,0-.5.225-.5.5v.5Z' />
            </svg>
          </button>
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;
