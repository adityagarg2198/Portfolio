import { Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

const Progress: FC<{ lastValue: number; progressColor: string }> = ({
  lastValue,
  progressColor,
}) => {
  const localValue = useRef(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = () => {
      if (localValue.current < lastValue) {
        setValue((prev) => prev + 1);
        localValue.current = value;
      }
    };
    setTimeout(() => {
      start();
    }, 4);
  }, [value]);

  return (
    <Stack
      bgcolor={'#4e54c8'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'1.5rem'}
      width={'8rem'}
      height={'8rem'}
      sx={{
        background: `conic-gradient(${progressColor} ${
          value * 3.6
        }grad, white 360deg)`,
      }}>
      <Stack
        bgcolor={'white'}
        color={'#4e54c8'}
        borderRadius={'1.5rem'}
        width={'6rem'}
        height={'6rem'}
        fontSize={'1.6rem'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          transition: 'all 2s ease-in-out',
        }}>
        {Math.min(value - 1, 100)}%
      </Stack>
    </Stack>
  );
};

const ProgressBar: FC<{
  lastValue: number;
  children: React.ReactNode;
  progressColor: string;
}> = ({ lastValue, children, progressColor }) => {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <Paper
      sx={{
        display: 'flex',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1.5rem',
        height: '11rem',
        width: '11rem',
        cursor: 'pointer',
      }}
      onMouseOver={() => {
        setShowSkill(true);
      }}
      onMouseLeave={() => {
        setShowSkill(false);
      }}>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}>
        {showSkill ? (
          <Progress lastValue={lastValue} progressColor={progressColor} />
        ) : (
          <Stack
            width={'8rem'}
            height={'8rem'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              transition: 'all 2s ease-in-out',
              '& svg': {
                borderRadius: '1.5rem',
              },
            }}>
            {children}
          </Stack>
        )}
      </motion.div>
    </Paper>
  );
};

export default ProgressBar;
