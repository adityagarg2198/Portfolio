import { AnimatePresence, motion } from 'framer-motion';
import Chip from '../../Components/Chip/Chip.component';
import {
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { Terminal, Navigation } from '@mui/icons-material';
import { useState } from 'react';

const About = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      label: 'Senior Frontend Developer-1',
      tenure: 'Oct-23 - Present',
      desc: [
        `Migrated React code to separate Git repo (history preserved).`,
        `Upgraded React codebase with TypeScript & best practices (useMemo, useCallback).`,
        `Optimized code for improved performance & readability.`,
        `Reduced app build size through webpack configuration.`,
        `Enforced code quality with ESLint & SonarLint.`,
        `Developed embeddable web components for existing features`,
        `Trained 3-4 interns in Frontend Induction.`,
      ],
    },
    {
      label: 'Frontend Developer',
      tenure: 'July-22 - Sep-23',
      desc: [
        `Ensured platform accessibility compliance with WCAG 2.1 AA standards.`,
        `Effectively resolved over 30 high-priority bugs, improving app stability.`,
        `Enhanced app performance by significantly optimizing initial load time (50%) and reducing build size (30%).`,
        `Implemented unit and integration testing frameworks (React Testing Library & Jest) from scratch, raising test coverage above (80%).`,
        `Developed and reviewed work breakdown sheets for projects exceeding 400 hours, ensuring accurate estimations and timely execution.`,
        `Created comprehensive documentation of core features on Confluence.`,
      ],
    },
  ];
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.8 }}>
        <Chip text='Experience' />
        <Stepper
          activeStep={activeStep}
          orientation='vertical'
          sx={{
            marginTop: '2rem',
            '& .MuiStepContent-root': {
              marginLeft: '2rem',
              borderLeft: '1px solid white',
            },
            '& .MuiStepConnector-line': {
              display: 'none',
            },
            '& .MuiStepLabel-label': {
              fontSize: '2rem',
              color: 'white  !important',
            },
          }}>
          {steps.map(({ label, desc, tenure }) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  fontSize: '2rem',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (activeStep === 0) {
                    setActiveStep(1);
                  } else {
                    setActiveStep(0);
                  }
                }}
                StepIconComponent={() => (
                  <Stack
                    bgcolor={'white'}
                    borderRadius={'50%'}
                    width={'4rem'}
                    height={'4rem'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Terminal
                      fill='currentColor'
                      sx={{
                        color: '#4e54c8',
                        fontSize: '3rem',
                      }}
                    />
                  </Stack>
                )}>
                {label}
                <Typography component={'p'} fontSize={'1.2rem'}>
                  {tenure}
                </Typography>
              </StepLabel>
              <StepContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '2rem',
                }}>
                {desc.map((item) => {
                  return (
                    <Typography
                      key={item}
                      fontSize={'1.4rem'}
                      component={'p'}
                      margin={'0.7rem 0'}
                      color={'white'}
                      display={'flex'}
                      alignItems={'flex-start'}
                      gap={'0.5rem'}>
                      <Navigation
                        sx={{
                          marginTop: '0.3rem',
                          transform: 'rotate(90deg)',
                        }}
                      />
                      {item}
                    </Typography>
                  );
                })}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
