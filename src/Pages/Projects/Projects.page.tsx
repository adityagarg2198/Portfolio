import { AnimatePresence, motion } from 'framer-motion';
import Chip from '../../Components/Chip/Chip.component';
import { Box, Button, Card, Link, Stack, Typography } from '@mui/material';

const Projects = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.8 }}>
        <Chip text='Projects' />
        <Stack direction={'row'} gap={'2rem'} mt={'2rem'}>
          <Card
            sx={{
              width: '28rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
            <Typography color={'#8f94fb'} fontSize={'1.4rem'}>
              Binary Search Visualizer
            </Typography>
            <Box
              component={'embed'}
              src='https://peaceful-yeot-72d1db.netlify.app/'
            />
            <Typography color={'#8f94fb'} fontSize={'1.3rem'}>
              It is used to visualize the steps of Binary Search Algorithm
            </Typography>
            <Link
              component={'a'}
              href='https://peaceful-yeot-72d1db.netlify.app/'
              target='_blank'
              referrerPolicy='no-referrer'>
              <Button
                variant='text'
                sx={{
                  color: '#8f94fb',
                }}>
                View
              </Button>
            </Link>
          </Card>
          <Card
            sx={{
              width: '28rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
            <Typography color={'#8f94fb'} fontSize={'1.4rem'}>
              Sketch Board
            </Typography>
            <Box
              component={'embed'}
              src='https://aditya-sketch-app.netlify.app/'
            />
            <Typography color={'#8f94fb'} fontSize={'1.3rem'}>
              A mini sketch board app created using canvas api
            </Typography>
            <Link
              component={'a'}
              href='https://aditya-sketch-app.netlify.app/'
              target='_blank'
              referrerPolicy='no-referrer'>
              <Button
                variant='text'
                sx={{
                  color: '#8f94fb',
                }}>
                View
              </Button>
            </Link>
          </Card>
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
