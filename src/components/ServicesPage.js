import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  specialText: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
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
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));
export default function ServicesPage({setValue, setSelectedIndex}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: '1em',
        }}
      >
        <Typography
          gutterBottom
          align={matchesSM ? 'center' : undefined}
          variant='h2'
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {' '}
        {/*-----iOS/Android Development Block-----*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? 0 : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
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
              width='250em'
            />
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
        {/*-----Website Development Block-----*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
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
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              alt='Mobile Phone Icon'
              src={websiteIcon}
              className={classes.icon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
