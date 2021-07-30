import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  useMediaQuery,
  makeStyles,
  useTheme,
  Button,
  TextField,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.Orange,
    fontWeight: '700',
    marginRight: '5em',
    marginLeft: '2em',
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    fontSize: '0.7rem',
    height: 35,
    padding: 10,
    [theme.breakpoints.down('md')]: {
      margin: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.Green}`,
    marginTop: '2em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 205,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.Orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 200,
    },
  },
}));

export default function Contact({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper(`${event.target.value} is not a valid email address`);
        } else {
          setEmailHelper('');
        }

        break;

      case 'phone':
        setPhone(event.target.value);
        valid = /^([0|\+[0-9]{1,5})?([0-9]{10})$/.test(event.target.value);

        if (!valid) {
          setPhoneHelper(`${event.target.value} is not a valid phone number`);
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };
  const onConfirm = () => {
    setLoading(true);
    axios
      .get('https://us-central1-pioneertechemail.cloudfunctions.net/sendMail', {
        params: { name, email, phone, message },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message Sent!',
          backgroundColor: '#4BB543',
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Message failed to send. Please try again',
          backgroundColor: '#FF3232',
        });
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message{' '}
      <img src={airplane} alt='paper airplane' style={{ marginLeft: '1em' }} />
    </React.Fragment>
  );

  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid item container direction='column'>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='h2'
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='body1'
                style={{ color: theme.palette.common.Green }}
              >
                We're waiting...
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone'
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{
                    color: theme.palette.common.Green,
                    fontSize: '1rem',
                  }}
                >
                  <a
                    href='tel: (+254) 723-275-041'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {' '}
                    (+254) 723-275-041
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt='envelope'
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{
                    color: theme.palette.common.Green,
                    fontSize: '1rem',
                  }}
                >
                  <a
                    href='mailto:dedan.msafari@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    demsaftech@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction='column' style={{ width: '20em' }}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Name'
                  id='name'
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Email'
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id='email'
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Phone'
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  id='phone'
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                id='message'
                multiline
                fullWidth
                rows={10}
                className={classes.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button
                disabled={
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0 ||
                  name.length === 0 ||
                  phone.length === 0 ||
                  message.length === 0 ||
                  email.length === 0
                }
                variant='contained'
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '2em',
            paddingBottom: matchesXS ? '1em' : '2em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '8em'
              : '10em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '8em'
              : '10em',
          },
        }}
      >
        <DialogContent>
          <Grid
            container
            direction='column'
            // style={{ width: matchesXS ? '20em' : '20em', maxWidth: '50em' }}
          >
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phone'
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                id='phone'
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? '100%' : '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                id='message'
                multiline
                fullWidth
                rows={10}
                className={classes.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? 'column' : 'row'}
            alignItems='center'
            style={{ marginTop: '1em' }}
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color='primary'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0 ||
                  name.length === 0 ||
                  phone.length === 0 ||
                  message.length === 0 ||
                  email.length === 0
                }
                variant='contained'
                className={classes.sendButton}
                onClick={onConfirm}
              >
                {loading ? (
                  <CircularProgress size={30} color='white' />
                ) : (
                  buttonContents
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? 'center' : undefined}
        className={classes.background}
        lg={8}
        xl={9}
        alignItems='center'
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
          lg
        >
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
                Simple Software
                <br />
                Revolutionary Results
              </Typography>
              <Typography
                style={{ fontSize: '1.75em' }}
                align={matchesMD ? 'center' : undefined}
                variant='subtitle2'
              >
                Take advantage of the 21st century.
              </Typography>
              <Grid container item justify={matchesMD ? 'center' : undefined}>
                <Button
                  component={Link}
                  to='/revolution'
                  variant='outlined'
                  onClick={() => {
                    setValue(2);
                  }}
                  className={classes.learnButton}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={20}
                    height={20}
                    fill={theme.palette.primary.light}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg>
          <Button
            component={Link}
            to='/estimate'
            onClick={() => {
              setValue(5);
            }}
            variant='contained'
            className={classes.estimateButton}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
