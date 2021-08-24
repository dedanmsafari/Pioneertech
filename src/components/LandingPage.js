import React from 'react';
import { Link } from 'react-router-dom';

import {
  makeStyles,
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from '@material-ui/core';

import Lottie from 'react-lottie';
import animationData from '../animations/landinganimation/data';

import CallToAction from './ui/CallToAction';
import ButtonArrow from '../components/ui/ButtonArrow';

import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  animation: {
    marginTop: '2em',
    marginLeft: '10%',
    minWidth: '20em',
    maxWidth: '50em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.Orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    fontWeight: '700',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    fontSize: '0.7rem',
    height: 35,
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      margin: '2em',
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80em',
    width: '100%',
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  serviceContainer: {
    marginTop: '13em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  specialText: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: '1em',
  },
}));

export default function LandingPage({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        {/*-----First Section Hero Block-----*/}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align='center' variant='h2'>
              Technology within Africa's reach
              <br /> A new Dawn Begins
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to='/estimate'
                  onClick={() => setValue(5)}
                  className={classes.estimateButton}
                  variant='contained'
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{ marginLeft: '3em' }}
                  component={Link}
                  to='/revolution'
                  onClick={() => setValue(2)}
                  className={classes.learnButtonHero}
                  variant='outlined'
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
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----Custom Software Block-----*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete Digital Solutions from Investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to='/customsoftware'
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              className={classes.learnButton}
              variant='outlined'
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={20}
                height={20}
                fill={theme.palette.primary.light}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt='Custom Software Icon'
              src={customSoftwareIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----iOS/Android Development Block-----*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Extend Engagement
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app{' '}
              {matchesSM ? null : <br />}
              with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              className={classes.learnButton}
              variant='outlined'
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={20}
                height={20}
                fill={theme.palette.primary.light}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              alt='Mobile Phone Icon'
              src={mobileAppsIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----Website Development Block-----*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to='/websites'
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              className={classes.learnButton}
              variant='outlined'
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={20}
                height={20}
                fill={theme.palette.primary.light}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt='Mobile Phone Icon'
              src={websiteIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*The revolution Block*/}
        <Grid
          style={{ height: '100em', marginTop: '12em' }}
          container
          alignItems='center'
          justify='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                style={{ textAlign: 'center' }}
                container
                direction='column'
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1' gutterBottom>
                    Visionary Insights coupled with cutting edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    component={Link}
                    to='/revolution'
                    onClick={() => {
                      setValue(2);
                    }}
                    className={classes.learnButtonHero}
                    variant='outlined'
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
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*The About/Contact Block*/}
        <Grid
          alignItems='center'
          container
          direction='row'
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? 'center' : 'inherit',
            }}
            direction={matchesXS ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
              }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? '10em' : 0 }}
                direction='column'
              >
                <Typography variant='h3' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                  Lets get personal
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to='/about'
                    onClick={() => {
                      setValue(3);
                    }}
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                    variant='outlined'
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={20} height={20} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h3' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                  Say Hello! <span role='img' aria-label='hand and smile emoji'>👋🙂</span>
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to='/contact'
                    onClick={() => {
                      setValue(4);
                    }}
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                    variant='outlined'
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={20} height={20} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
