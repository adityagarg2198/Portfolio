import { AnimatePresence, motion } from 'framer-motion';
import Chip from '../../Components/Chip/Chip.component';
import emailjs from '@emailjs/browser';
import {
  Alert,
  Button,
  Card,
  Link,
  Snackbar,
  SpeedDial,
  SpeedDialAction,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import {
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Telegram,
} from '@mui/icons-material';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');

  const actions = [
    {
      icon: (
        <Link component={'a'} href='tel:8814849090'>
          <Phone />
        </Link>
      ),
      name: 'Contact',
    },
    {
      icon: (
        <Link
          component={'a'}
          href='https://www.instagram.com/adityag.a.r.g/'
          target='_blank'>
          <Instagram />
        </Link>
      ),
      name: 'Instagram',
    },
    {
      icon: (
        <Link
          component={'a'}
          href='https://github.com/adityagarg2198'
          target='_blank'>
          <GitHub />
        </Link>
      ),
      name: 'GitHub',
    },
    {
      icon: (
        <Link
          component={'a'}
          href='https://www.linkedin.com/in/adityagarg2198/'
          target='_blank'>
          <LinkedIn />
        </Link>
      ),
      name: 'LinkedIn',
    },
  ];

  const handleButtonClick = async () => {
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          to_name: 'Aditya Garg',
          message: desc,
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );
      if (res.status === 200) {
        setMessage('Sent Successfully');
        setOpenMessage(true);
      }
    } catch {
      setMessage('Something Went Wrong');
      setOpenMessage(true);
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{ height: '100%' }}>
        <Stack
          sx={{ height: '100%', transform: 'translateZ(0px)', flexGrow: 1 }}>
          <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            height={'6rem'}>
            <Chip text={`Let's Connect`} />
            <SpeedDial
              ariaLabel='Lets Connect'
              sx={{
                flexDirection: 'column',
                '& button': {
                  background: 'white',
                  '&:hover': {
                    background: 'white',
                  },
                },
                '& svg': {
                  fontSize: '2.8rem',
                  fill: '#4e54c8',
                },
              }}
              icon={<Telegram />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}>
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  id={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
          </Stack>
          <Card
            sx={{
              width: '65%',
              height: 'fit-content',
              padding: '3rem',
              display: 'flex',
              gap: '1.5rem',
              flexDirection: 'column',
              marginLeft: '1rem',
            }}>
            <TextField
              InputProps={{
                sx: {
                  fontSize: '1.6rem',
                },
              }}
              sx={{ fontSize: '1.6rem' }}
              placeholder='Name'
              type='text'
              value={name}
              onChange={({ currentTarget: { value } }) => setName(value)}
              fullWidth
            />
            <TextField
              InputProps={{
                sx: {
                  fontSize: '1.6rem',
                },
              }}
              sx={{ fontSize: '1.6rem' }}
              placeholder='Email'
              type='email'
              value={email}
              onChange={({ currentTarget: { value } }) => setEmail(value)}
              fullWidth
            />
            <TextField
              placeholder='Get In Touch'
              multiline
              type='text'
              value={desc}
              onChange={({ currentTarget: { value } }) => setDesc(value)}
              InputProps={{
                sx: {
                  fontSize: '1.6rem',
                },
              }}
              minRows={4}
              fullWidth
            />
            <Button
              sx={{ fontSize: '1.6rem' }}
              variant='outlined'
              onClick={handleButtonClick}>
              Send
            </Button>
          </Card>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            sx={{
              left: '44rem !important',
              '& div': {
                background: 'white',
              },
            }}
            open={openMessage}
            autoHideDuration={4000}
            onClose={() => setOpenMessage(false)}>
            <Alert
              severity='success'
              variant='filled'
              sx={{
                color: '#4e54c8',
                fontSize: '1.4rem',
                padding: '0.5rem 1rem',
              }}>
              {message}
            </Alert>
          </Snackbar>
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
